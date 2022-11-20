const rate = document.querySelectorAll('.rate__el')
const submit = document.querySelector('.btn')
const initState = document.querySelector('.init-state')
const resultState = document.querySelector('.result-state')
const score = document.querySelector('.result__score')
let current = document.querySelector('.is-active')
let result = 5

rate.forEach(circle => {
    circle.addEventListener('click', () => {
        current.classList.remove('is-active')
        circle.classList.add('is-active')
        current = circle
        result = circle.dataset.value
    })
})

submit.addEventListener('click', () => {
    score.innerHTML = `You selected ${result} out of 5`
    initState.classList.add('is-hidden')
    resultState.classList.remove('is-hidden')
})