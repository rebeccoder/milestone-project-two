const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle' 
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn

startGame()

function startGame() {
// starts game on x's turn
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
    if (checkWin(currentClass)) {
        console.log('winner')
    }
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


// so if any of the winning combinations happen then it will be recognised as a win
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
         })
    })
}
