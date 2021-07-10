const hamburger_menu = document.querySelector('.hamburger-menu')
const navitems_container = document.querySelector('.navitems-container--top')
const triangle = document.querySelector('.triangle')
const arrow_image = document.querySelector('.arrow-image')

hamburger_menu.addEventListener('click', function() {
    // console.log('working')
    navitems_container.classList.toggle('active')
    triangle.classList.toggle('triangle-active')
    arrow_image.classList.toggle('arrow-image-active')
})