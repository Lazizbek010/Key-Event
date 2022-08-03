let opened = document.querySelector('#opened')
let keys = document.querySelector('.keys')
let code = document.querySelector('#code')
let keyCode = document.querySelector('#keyCode')
let key = document.querySelector('#key')
document.addEventListener('keydown', (e) => {
    opened.classList.add('hidden')
    keys.classList.remove('hidden')
    code.textContent = e.code
    keyCode.textContent = e.keyCode
    key.textContent = e.key
})