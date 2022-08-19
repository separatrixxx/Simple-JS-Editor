document.getElementById('btn').addEventListener('click', () => {
    let str = document.getElementById('textarea').value;

    let sayHi = new Function(str);

    sayHi()
})
