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
let player1Name;
let player2Name;

const playersForm = document.getElementById('playersForm');
playersForm.addEventListener('submit', startGame);


function startGame(event) {

    /* 
     * starts game
    */
    if (event) {
      event.preventDefault();
    }
    document.getElementById("gameArea").removeAttribute("hidden");

    const cells = document.querySelectorAll('#board [data-cell]');
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('circle');
        cell.removeAttribute('data-marked-by');
        cell.textContent = '';
      });

    // Get the player names from the form
    player1Name = document.getElementById('player1Name').value;
    player2Name = document.getElementById('player2Name').value;
        
    // Assign player 1 to X_CLASS and player 2 to CIRCLE_CLASS
    board.classList.add(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);

    // Hide the welcome area and show the game area
    welcomeArea.style.display = 'none';
    gameArea.style.display = 'block';
        
    // Display player 1's name below the board
    const currentPlayer = document.getElementById('currentPlayer');
        
    // Add scoreboards below the names
    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.innerHTML = `
        <div>
            <h2>${player1Name} Wins:</h2>
            <span id="player1Score">0</span>
          </div>
          <div>
            <h2>${player2Name} Wins:</h2>
            <span id="player2Score">0</span>
          </div>
        `;
      
    // Add click event listener to each cell element
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
        console.log('Event listener added to cell:', cell);
    });


}


function handleClick(e) {
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
        winningMessage = `${circleTurn ? `${player2Name}` : `${player1Name}`} Wins!`;
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
            returnToMenu();
        }
    })
} 

function returnToMenu() {
      welcomeArea.style.display = 'block';
      gameArea.style.display = 'none';
      playersForm.reset();
      const scoreBoard = document.getElementById('scoreBoard');
      scoreBoard.innerHTML = '';
}


// shows winning message if there is a draw
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(CIRCLE_CLASS);
    });
}


function placeMark(cell, currentClass) {
    console.log('Placing mark in cell:', cell);
    console.log('Current class:', currentClass);
    cell.classList.add(currentClass);
    cell.innerText = currentClass === X_CLASS ? 'X' : 'O';
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
