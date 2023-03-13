
let togglePill = document.querySelector('.toggle-pill')

let body = document.querySelector('body')
let title = document.querySelectorAll('.title')
let fArray = document.querySelectorAll('.followers')
let numArray = document.querySelectorAll('.num')
let cardarray = document.querySelectorAll('.card')
let overviewarray = document.querySelectorAll('.overview-card')


fArray.forEach(x => x.classList.add('card-num'))
numArray.forEach(x => x.classList.add('card-num'))
cardarray.forEach(x => x.classList.add('card-bg'))
overviewarray.forEach(x => x.classList.add('card-bg'))


togglePill.addEventListener('click',()=>{
    body.classList.toggle('light-mode')
    title.forEach(x => x.classList.toggle('title-color'))
    fArray.forEach(x => x.classList.toggle('light-num'))
    numArray.forEach(x => x.classList.toggle('light-num'))
    cardarray.forEach(x => x.classList.toggle('light-bg'))
    overviewarray.forEach(x => x.classList.toggle('light-bg'))
})