let textArea = document.getElementById('textarea');
let textArea2 = document.getElementById('textarea2');

document.getElementById('btn').addEventListener('click', () => {
    let str = document.getElementById('textarea').value;

    let runCode = new Function(str);

    textArea.classList.remove('err');

    try {
        runCode();
    } catch (err) {
        textArea.classList.add('err');
        alert(err);
    }
})

let specialSymbols = ['(', '[', '{', '"', "'", '`'];
let specialSymbolsReverse = [')', ']', '}', '"', "'", '`'];

let nowStr = 1;
let activeStr = ['1'];

textArea.addEventListener('keydown', function ssCheck(e) {
    textArea.classList.remove('err');

    let a = 0;

    for (let i = 0; i < specialSymbols.length; i++) {
        if (e.key === specialSymbols[i]) {
            let a = textArea.selectionStart;

            let b = textArea.selectionEnd;

            textArea.value = textArea.value.slice(0, a)
                + textArea.value.slice(a, b)
                + specialSymbolsReverse[i]
                + textArea.value.slice(b);

            textArea.selectionStart = a;
            textArea.selectionEnd = a;

            break;
        }
    }

    if (e.key === 'Backspace') {
        a = textArea.selectionStart;

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

    if (e.key === 'Enter') {
        a = textArea.selectionStart;

        if ((textArea.value.slice(a - 1, a) === '[' && textArea.value.slice(a, a + 1) === ']')
            || (textArea.value.slice(a - 1, a) === '(' && textArea.value.slice(a, a + 1) === ')')
            || (textArea.value.slice(a - 1, a) === '{' && textArea.value.slice(a, a + 1) === '}')) {
            textArea.value = textArea.value.slice(0, a) + '\n' + textArea.value.slice(a);
            textArea.selectionStart = a;
            textArea.selectionEnd = a;
        }
    }
})

textArea.addEventListener('keyup', function ssCheck(e) {
    if (textArea.value.split('\n').length >= nowStr) {
        nowStr = textArea.value.split('\n').length;

        if (nowStr !== 1) {
            activeStr.push('\n');
            activeStr.push(nowStr);
        }
    } else {
        activeStr.pop();
        activeStr.pop();
        nowStr = textArea.value.split('\n').length;
    }

    let activeStrStr = '';

    for (let val of activeStr) {
        activeStrStr = activeStrStr + val;
    }

    textArea2.value = activeStrStr;

    textArea2.scrollTop(textArea2[0].scrollHeight);
})

textArea2.value = activeStr;
