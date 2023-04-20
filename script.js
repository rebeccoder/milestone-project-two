const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle'; 
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const welcomeArea = document.getElementById('welcomeArea');
let circleTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    /* 
     * starts game
    */
    welcomeArea.style.display = "none";
    circleTurn = false;  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
});    
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleClick(e) {
    /* 
     * displays the board of whoevers turn it is
    */
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns ();
        setBoardHoverClass();
    }
}


function endGame(draw) {
    /*
    * shows the winning message
    */
   let winningMessage = "";
   let icon = "";

    if (draw) {
        winningMessage = 'Draw!';
        icon = "info";
    } else {
        winningMessage = `${circleTurn ? "O's" : "X's"} Win!`;
        icon = "success";
    }

    Swal.fire({
        position: "center",
        icon: icon,
        title: winningMessage,
        allowOutsideClick: false,
        showConfirmButon: true,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Play Again",
        denyButtonText: "Return to Main Menu",
    }).then((result) => {
        if (result.isConfirmed) {
            startGame();
        } else if (result.isDenied) {
            hideBoard();
            displayWelcomePage();
        }
    })
} 

function hideBoard() {
    /*
     * removes board from screen
    */
    board.style.display = "none";
}

function displayWelcomePage() {
    /*
     * brings menu page back up
    */
    document.getElementById("welcomeArea").style.display = "block";
}

function hideBoard() {
    /*
     * removes board from screen
    */
    board.style.display = "none";
}

function displayWelcomePage() {
    /*
     * brings menu page back up
    */
    document.getElementById("welcomeArea").style.display = "block";
}

function hideBoard() {
    /*
     * removes board from screen
    */
    board.style.display = "none";
}

function displayWelcomePage() {
    /*
     * brings menu page back up
    */
    document.getElementById("welcomeArea").style.display = "block";
}

// shows winning message if there is a draw
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS);
    });
}


function placeMark(cell, currentClass) {
    /*
     * allows to enter x or o to the cell
    */
    cell.classList.add(currentClass);
    cell.ariaLabel = X_CLASS;
    cell.ariaLabel = CIRCLE_CLASS;
    cell.ariaLabel = currentClass;
}

function swapTurns() {
    /* 
     * changes turn
    */
    circleTurn = !circleTurn;
}


function setBoardHoverClass() {
    /* 
     * adds the correct hover effect
    */
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}


function checkWin(currentClass) {
    /* 
     * checks for winning combos
    */
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
        return cellElements[index].classList.contains(currentClass);
         });
    });
}