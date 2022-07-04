const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle' 

const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn

// this code only ever fire this event listener once. so if you clicked on a cell once it will not fire up the event again. //
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    // placeMark
    // Check For Win
    // Check For Draw
    // Switch Turns
}