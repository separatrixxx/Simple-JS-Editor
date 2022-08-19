document.getElementById('btn').addEventListener('click', () => {
    let str = document.getElementById('textarea').value;

    let runCode = new Function(str);

    runCode()
})

let specialSymbols = ['(', '[', '{', '"', "'"];
let specialSymbolsReverse = [')', ']', '}', '"', "'", '*'];

document.getElementById('textarea').addEventListener('keyup', function(e) {
    for (let i = 0; i < specialSymbols.length; i++) {
        if (e.key === specialSymbols[i]) {
            document.getElementById('textarea').value =
                document.getElementById('textarea').value + specialSymbolsReverse[i];
        }
    }
})
