let textArea = document.getElementById('textarea');

document.getElementById('btn').addEventListener('click', () => {
    let str = document.getElementById('textarea').value;

    let runCode = new Function(str);

    runCode()
})

let specialSymbols = ['(', '[', '{', '"', "'", '`'];
let specialSymbolsReverse = [')', ']', '}', '"', "'", '`'];


textArea.addEventListener('keyup', function(e) {
    for (let i = 0; i < specialSymbols.length; i++) {
        if (e.key === specialSymbols[i]) {
            let a = textArea.selectionStart;

            textArea.value = textArea.value.slice(0, a) + specialSymbolsReverse[i] + textArea.value.slice(a);
            textArea.selectionStart = a;
            textArea.selectionEnd = a;
        }
    }
})

textArea.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace') {
        let a = textArea.selectionStart;

        if ((textArea.value.slice(a-1, a) === '(' && textArea.value.slice(a, a+1) === ')')
            || (textArea.value.slice(a-1, a) === '[' && textArea.value.slice(a, a+1) === ']')
            || (textArea.value.slice(a-1, a) === '{' && textArea.value.slice(a, a+1) === '}')
            || (textArea.value.slice(a-1, a) === '"' && textArea.value.slice(a, a+1) === '"')
            || (textArea.value.slice(a-1, a) === "'" && textArea.value.slice(a, a+1) === "'")
            || (textArea.value.slice(a-1, a) === '`' && textArea.value.slice(a, a+1) === '``')) {
            textArea.value = textArea.value.slice(0, a - 1) + textArea.value.slice(a);
            textArea.selectionStart = a;
            textArea.selectionEnd = a;
        }
    }
})
