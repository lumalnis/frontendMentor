const hamburguerMenu = document.querySelector('#hamburguer-menu');
const navbar = document.getElementById('navbar');
const closeBtn = document.querySelector('#close-btn');

hamburguerMenu.addEventListener('click', () => {
    navbar.style.display = 'block'

})

closeBtn.addEventListener('click', () => {
    navbar.style.display = 'none'
})


const submenuBtn = document.querySelector('.submenu-btn');
const featuresUl = document.querySelector('.features-ul'); 
const companyUl  = document.getElementsByClassName('company-ul');

submenuBtn.addEventListener('click', ()=> {
    featuresUl.style.display = 'block'
})

submenuBtn.addEventListener('click', ()=> {
    companyUl.style.display = 'block'
})