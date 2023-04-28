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
const gameArea = document.getElementById('gameArea');
const instructionsArea = document.getElementById('instructions');
const scoreBoard = document.getElementById('scoreBoard');
let circleTurn;
let player1Name;
let player2Name;
let currentPlayer;
let player1Score = 0;
let player2Score = 0;

const playersForm = document.getElementById('playersForm');
playersForm.addEventListener('submit', startGame);

const restartButton = document.getElementById('resetButton');
restartButton.addEventListener('click', resetGame);


function startGame(event) {
    /**
     * Get players' names from the form and assign player 1 with X class and player 2 with Circle class. 
     * Hide the welcome and instruction area, set up the board and scoreboard with X to start the game.
     * @param event: A DOM event object
     * @return: None
     */

    player1Name = document.getElementById('player1Name').value;
    player2Name = document.getElementById('player2Name').value;

    circleTurn = false;
    currentPlayer = player1Name;

    if (event !== null && event !== undefined) {
        event.preventDefault();
    }
    document.getElementById("gameArea").removeAttribute("hidden");

    board.classList.add(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);

    welcomeArea.style.display = 'none';
    instructionsArea.style.display = 'none';
    gameArea.style.display = 'block';

    currentPlayer = player1Name;
    displayCurrentPlayer();

    setupGrid();

    scoreBoard.innerHTML = `
        <div>
            <h2>${player1Name}'s Score:</h2>
            <span id="player1Score">${player1Score}</span>
          </div>
          <div>
            <h2>${player2Name}'s Score:</h2>
            <span id="player2Score">${player2Score}</span>
          </div>
        `;
}

function setupGrid() {
    cellElements.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('circle');
        cell.removeAttribute('data-marked-by');
        cell.textContent = '';
    });

    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {
            once: true
        });
    });
}
function handleClick(e) {
    /**
     * Handles the click event when the player clicks on a cell.
     * @param {Object} e - The event object.
     * @returns {undefined}
     */
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}


function instructionsPage() {
    /**
     * Displays the instructions page and hides the welcome and game pages.
     * @return: None
     */
    document.getElementById("instructions").removeAttribute("hidden");
    welcomeArea.style.display = 'none';
    gameArea.style.display = 'none';
    instructionsArea.style.display = 'block';
}


function endGame(draw) {
    /**
     * Shows the winning message and updates the scoreboard.
     * @param {boolean} draw - Indicates if the game ended in a draw.
     * @return {void} 
     */
    let winningMessage = "";
    let icon = "";

    if (draw) {
        winningMessage = 'Draw!';
        icon = "info";
    } else {
        winningMessage = `${circleTurn ? `${player2Name}` : `${player1Name}`} Wins!`;
        icon = "success";
        handleWin(circleTurn ? 'player2' : 'player1');
    }
    Swal.fire({
        position: "center",
        icon: icon,
        title: winningMessage,
        allowOutsideClick: false,
        showConfirmButton: true,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Play Again",
        denyButtonText: "Return to Main Menu",
    }).then((result) => {
        if (result.isConfirmed) {
            startGame(null);
        } else if (result.isDenied) {
            returnToMenu();
        }
        document.getElementById('player1Score').innerHTML = player1Score;
        document.getElementById('player2Score').innerHTML = player2Score;
    });

}


function handleWin(player) {
    /**
     * Updates the scoreboard with the win for the relevant player.
     * @param {string} player - The identifier for the player who won (either 'player1' or 'player2').
     * @return {undefined}
     */
    if (player === 'player1') {
        player1Score += 1;
        document.getElementById('player1Score').innerHTML = player1Score;
    } else if (player === 'player2') {
        player2Score += 1;
        document.getElementById('player2Score').innerHTML = player2Score;
    }
}


function returnToMenu() {
    /**
     * Returns the user to the welcome area, hiding the game and instructions areas.
     * Resets the player names using the players form and clears the scoreboard.
     * @returns {void}
     */
    welcomeArea.style.display = 'block';
    gameArea.style.display = 'none';
    instructionsArea.style.display = 'none';
    playersForm.reset();
    scoreBoard.innerHTML = '';
}


function resetGame() {
    /**
     * Resets the game by clearing the board and setting the scores to zero,
     * while keeping the player names. Starts a new game after resetting.
     */
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1Score').innerHTML = player1Score;
    document.getElementById('player2Score').innerHTML = player2Score;
}


function isDraw() {
    /*
     * Checks if the game has ended in a draw, meaning that all cells on the board
     * are filled without any winning combinations.
     * Returns true if the game is a draw, false otherwise.
     */
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS);
    });
}


function placeMark(cell, currentClass) {
    /**
     * Adds the X or O mark to the given cell and updates its inner text with the corresponding mark.
     * @param {HTMLElement} cell - The HTML element representing the cell that was clicked.
     * @param {String} currentClass - The current player's class (either 'x' or 'circle').
     * @returns {void}
     */
    cell.classList.add(currentClass);
    cell.innerText = currentClass === X_CLASS ? 'X' : 'O';
}


function swapTurns() {
    /**
     * Switches the turn between the players and updates the current player names to be displayed.
     */
    circleTurn = !circleTurn;
    currentPlayer = circleTurn ? player2Name : player1Name;
    displayCurrentPlayer();
}


function setBoardHoverClass() {
    /**
     * Adds a hover effect to the cells on the game board based on the current player's turn.
     * If it's the circle player's turn, the class 'circle' is added to the board element,
     * and if it's the cross player's turn, the class 'x' is added instead.
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
    /**
     * Checks for winning combinations.
     * @param {string} currentClass - The class of the current player's token.
     * @returns {boolean} True if there is a winning combination, false otherwise.
     */
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

function displayCurrentPlayer() {
    /**
     * Displays the current player's name above the game board.
     * The name is retrieved from the global `currentPlayer` variable.
     * @returns {void}
     */
    const currentPlayerElem = document.getElementById("currentPlayer");
    currentPlayerElem.innerHTML = `${currentPlayer}'s turn`;
}