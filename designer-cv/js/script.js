// const burgerBtn = document.querySelector('.burger-menu')
// const navMenu = document.querySelector('.menu-nav')
// const navItems = document.querySelectorAll('.nav-list__item')


// burgerBtn.addEventListener('click', () => {
// 	navMenu.classList.toggle('active') 
// })

// navItems.forEach((item) =>{
//     item.addEventListener('click', () =>{
//         if (navMenu.classList.contains('active')) {
//             navMenu.classList.remove('active')
//         }
//      })
// }) 

const burgerBtn = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-list__item')
const burgerLinesColor = document.querySelectorAll('.burger-line')

burgerBtn.addEventListener('click', () => {
    if (!burgerBtn.classList.contains('burger-line_active')) {
        burgerBtn.classList.add('burger-line_active')

    } else {
        burgerBtn.classList.remove('burger-line_active')
        burgerBtn.style.transition = '0.5s'

    }
    navMenu.classList.toggle('active-nav')
})

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (navMenu.classList.contains('active-nav')) {
            navMenu.classList.remove('active-nav')

        }
        if (burgerBtn.classList.contains('burger-line_active')) {
            burgerBtn.classList.remove('burger-line_active')

        }
    })
})



// burgerLinesColor.forEach((item) => {
//     console.log(item);
//     burgerBtn.addEventListener('click', () => {
//         // if (!burgerBtn.classList.contains('burger-line_active')) {
//         //     burgerBtn.style.backgroundColor = "#fff"
//         //     item.style.backgroundColor = "#000"
//         // }
//         if (burgerBtn.classList.contains('burger-line_active')) {
//             burgerBtn.style.backgroundColor = "#fff"
//             item.style.backgroundColor = "#000"
//         }
//         else {
//             burgerBtn.style.backgroundColor = "#fff"
//             item.style.backgroundColor = "#000"
//         }

//     })

// })