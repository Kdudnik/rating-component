const component = document.querySelector('.rating-component')
const rate = component.querySelectorAll('.rate__el')
const submit = component.querySelector('.btn')
const score = component.querySelector('.result__score')
let current = component.querySelector('.rate__el')
let result = 5

rate.forEach(circle => {
    circle.addEventListener('click', () => {
        submit.classList.remove('btn--disabled')
        current.classList.remove('is-active')
        circle.classList.add('is-active')
        current = circle
        result = circle.dataset.value
    })
})

submit.addEventListener('click', () => {
    const initState = component.querySelector('.init-state')
    const resultState = component.querySelector('.result-state')
    score.innerHTML = `You selected ${result} out of 5`
    initState.classList.add('is-hidden')
    resultState.classList.remove('is-hidden')
})