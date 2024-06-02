/*const button1 = document.querySelector('#but1')

button1.addEventListener(`click`, ()=>{
    location.href="paginas/login.html"

    window.open('paginas/login.html', '_blank')
})*/

const logButton = document.querySelector('.logButton')
const logSelect = document.querySelector('.popUp')
const logBackground = document.querySelector('.pantallaGris')
const logCliente = document.querySelector('#cliente')
const logUser = document.querySelector('#empleado')


logButton.addEventListener('click', ()=> {
    logSelect.classList.toggle('inactive')
    logBackground.classList.toggle('off')
})

logCliente.addEventListener('mousedown', ()=>{
    logCliente.classList.add('clicked')
})

logCliente.addEventListener('click', ()=>{
    location.href = 'paginas/loginClient.html'
})

logUser.addEventListener('mousedown', ()=>{
    logUser.classList.add('clicked')
})

logUser.addEventListener('click', ()=>{
    location.href = 'paginas/loginUser.html'
})

window.addEventListener('mouseup', ()=>{
    logCliente.classList.remove('clicked')
})


