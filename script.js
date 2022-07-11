const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle' 

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn

startGame()

function startGame() {
    circleTurn = false
// this code only ever fires this event listener once. so if you clicked on a cell once it will not fire up the event again. 
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
})    
}
function handleClick(e) {

    const cell = e.target
// if its circles turn show circle board or if not show x's board
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    swapTurns()
    setBoardHoverClass()
}

//placemark allows you to enter the x or circle into the cell 
    function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

// switches turns from x and circle
function swapTurns() {
    circleTurn = !circleTurn
}

// adds the correct hover effect to each board 
function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

