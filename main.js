const cube = document.getElementById('cube')
const button = document.getElementById('btn')
const piece1 = document.getElementById('piece1')
const piece2 = document.getElementById('piece2')
const piece3 = document.getElementById('piece3')
const piece4 = document.getElementById('piece4')
const piece5 = document.getElementById('piece5')
const piece6 = document.getElementById('piece6')
const piece7 = document.getElementById('piece7')

button.addEventListener('click', () => {
    if (button.innerText == "Open Cube") {
        button.innerText = "Close Cube"
        cube.classList.add('op')
        piece1.classList.add('op1')
        piece2.classList.add('op2')
        piece3.classList.add('op3')
        piece4.classList.add('op4')
        piece5.classList.add('op5')
        piece6.classList.add('op6')
        piece7.classList.add('op7')
    }
    else if (button.innerText == "Close Cube") {
        button.innerText = "Open Cube"
        cube.classList.remove('op')
        piece1.classList.remove('op1')
        piece2.classList.remove('op2')
        piece3.classList.remove('op3')
        piece4.classList.remove('op4')
        piece5.classList.remove('op5')
        piece6.classList.remove('op6')
        piece7.classList.remove('op7')
    }
})