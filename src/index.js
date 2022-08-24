import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

let textArea = document.getElementById('textarea');
let textArea2 = document.getElementById('textarea2');

document.getElementById('btn').addEventListener('click', () => {
    let str = document.getElementById('textarea').value;

    let runCode = new Function(str);

    textArea.classList.remove('text-red-500');

    try {
        runCode();
    } catch (err) {
        textArea.classList.add('text-red-500');
        alert(err);
    }
})

let specialSymbols = ['(', '[', '{', '"', "'", '`'];
let specialSymbolsReverse = [')', ']', '}', '"', "'", '`'];

let nowStr = 1;
let activeStr = ['1\n'];

textArea.addEventListener('keydown', function (e) {
    textArea.classList.remove('text-red-500');

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

        if (textArea.value.slice(a-1, a) === '\n') {
            if (textArea.value.split('\n').length !== 1) {
                nowStr = textArea.value.split('\n').length - 1;
                activeStr.pop();
            }
        }
    }

    if (e.key === 'Delete') {
        a = textArea.selectionStart;

        if (textArea.value.slice(a, a+1) === '\n') {
            if (textArea.value.split('\n').length !== 1) {
                nowStr = textArea.value.split('\n').length - 1;
                activeStr.pop();
            }
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

        nowStr = textArea.value.split('\n').length + 1;
        activeStr.push(nowStr + '\n');
    }

    let activeStrStr = '';

    for (let val of activeStr) {
        activeStrStr = activeStrStr + val;
    }

    textArea2.value = activeStrStr;
    textArea2.scrollTop = textArea.scrollTop;
})

textArea.addEventListener('keyup', function (e) {
    if (textArea.value.split('\n').length < activeStr.length) {
        for (let i = activeStr.length; i > textArea.value.split('\n').length; i--) {
            activeStr.pop();
        }
    }

    if (textArea.value.split('\n').length > activeStr.length) {
        for (let i = activeStr.length; i <= textArea.value.split('\n').length; i++) {
            activeStr.push(i + 1 + '\n');
        }
    }

    let activeStrStr = '';

    for (let val of activeStr) {
        activeStrStr = activeStrStr + val;
    }

    textArea2.value = activeStrStr;
})

textArea2.value = '1';

textArea.addEventListener('scroll', () => {
    console.log(textArea.scrollHeight)
    textArea2.scrollTop = textArea.scrollTop;
})
