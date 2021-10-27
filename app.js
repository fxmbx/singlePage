const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)


const highlightMenu = ()=>{
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#service-page')

    let scrollPos = window.scrollY;
console.log(scrollPos)
    if(window.innerWidth> 960 && scrollPos < 350){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return 
    }else if(window.innerWidth> 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        serviceMenu.classList.remove('highlight')
        return 
    }
    else if(window.innerWidth> 960 && scrollPos < 2345){
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        // homeMenu.classList.remove('highlight')
        return 
    }

    if( (element && window.innerWidth < 960 && scrollPos <600) || element)
    {
        element.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () =>{
    const menuBar = document.querySelector('.is-active')

    if(window.innerWidth <= 960 && menuBar){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)