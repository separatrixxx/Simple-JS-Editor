let textArea = document.getElementById('textarea');

document.getElementById('btn').addEventListener('click', () => {
    let str = document.getElementById('textarea').value;

    let runCode = new Function(str);

    runCode()
})

let specialSymbols = ['(', '[', '{', '"', "'"];
let specialSymbolsReverse = [')', ']', '}', '"', "'", '*'];

textArea.addEventListener('keyup', function(e) {
    for (let i = 0; i < specialSymbols.length; i++) {
        if (e.key === specialSymbols[i]) {
            document.getElementById('textarea').value =
                document.getElementById('textarea').value + specialSymbolsReverse[i];

            textArea.selectionStart = textArea.value.length - 1;
            textArea.selectionEnd = textArea.value.length - 1;
        }
    }
})
