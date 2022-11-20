const rate = document.querySelectorAll('.rate__el')
const submit = document.querySelector('.btn')
let current = document.querySelector('.rate__el')

rate.forEach(circle => {
    circle.addEventListener('click', () => {
        current.classList.remove('is-active')
        circle.classList.add('is-active')
        current = circle
    })
})