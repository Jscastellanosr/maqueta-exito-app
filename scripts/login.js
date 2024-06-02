const loginBox = document.querySelector('.loginBox')
const error = document.querySelector('#error')
const backButton = document.querySelector('#back')
const grayScreen = document.querySelector('.pantallaGris')
const okButton = document.querySelector('#errorOk')


loginBox.querySelector('form').addEventListener('submit', e=> {

    if(loginBox.querySelector('form').id == 'clientLogin'){
        if(clientLogin.user.value != "cliente") {        
            error.classList.toggle('inactive')
            grayScreen.classList.toggle('off')
            e.preventDefault()
        }
    }else{
        if(userLogin.user.value != 'empleado') {        
            error.classList.toggle('inactive')
            grayScreen.classList.toggle('off')
            e.preventDefault()
        }
    }
})

okButton.addEventListener('click', ()=> {
    error.classList.toggle('inactive')
    grayScreen.classList.toggle('off')
})


backButton.addEventListener('click', ()=>{
    console.log(loginBox.querySelector('form'))
    location.href = '../index.html'
})