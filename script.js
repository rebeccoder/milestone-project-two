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
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById ('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
// starts game on x's turn
  circleTurn = false
// this code only ever fires this event listener once. so if you clicked on a cell once it will not fire up the event again. 
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
})    
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
// if its circles turn show circle board or if not show x's board
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns ()
        setBoardHoverClass()
    }
}


// shows winning message when x's or o's wins
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Win!`
    }
    winningMessageElement.classList.add('show')
}

// shows winning message if there is a draw
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS)
    })
}
//placemark allows you to enter the x or circle into the cell 
    function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
//This allows screen readers to see whether it is an x or an 0
    cell.ariaLabel = X_CLASS 
    cell.ariaLabel = CIRCLE_CLASS
    cell.ariaLabel = currentClass;
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
