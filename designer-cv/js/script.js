const burgerBtn = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-list__item')
const burgerLinesColor = document.querySelectorAll('.burger-line')

burgerBtn.addEventListener('click', () => {
    if (!burgerBtn.classList.contains('burger-line_active')) {
        burgerBtn.classList.add('burger-line_active')

        for (let item of burgerLinesColor) {
            item.classList.remove('burger-line')
            item.classList.add('burger-line-1')
        }

    } else {
        for (let item of burgerLinesColor) {
            item.classList.remove('burger-line-1')
            item.classList.add('burger-line')
        }
        burgerBtn.classList.remove('burger-line_active')
        burgerBtn.style.transition = '0.5s'

    }
    navMenu.classList.toggle('active-nav')
})

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (navMenu.classList.contains('active-nav')) {
            navMenu.classList.remove('active-nav')
            for (let item of burgerLinesColor) {
                item.classList.remove('burger-line-1')
                item.classList.add('burger-line')
            }

        }
        if (burgerBtn.classList.contains('burger-line_active')) {
            burgerBtn.classList.remove('burger-line_active')

        }
    })
})
