const initApp = () => {
    const hamburgerBtn = document.getElementById
    ('hamburger-button')
    const mobileMenu = document.getElementById
    ('mobile-menu')
    const mobileImg = document.getElementById
    ('mobile-img')
    

    
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    
    const click = () => {
        mobileImg.classList.toggle('hidden')
        mobileImg.classList.toggle('block')
    }
    

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
    hamburgerBtn.addEventListener('click', click)
    
}


document.addEventListener('DOMContentLoaded', initApp)
