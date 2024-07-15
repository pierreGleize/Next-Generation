const menu = document.querySelector('#mobile-menu')
const menulLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function (){
    menu.classList.toggle('is-active')
    menulLinks.classList.toggle('active')
})
