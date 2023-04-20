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

startGame();

    /* 
     * starts game
    */
    function startGame(event) {
        if (event) {
          event.preventDefault();
        }
        
        // Get the player names from the form
        player1Name = document.getElementById('player1Name').value;
        player2Name = document.getElementById('player2Name').value;
        
        // Assign player 1 to X_CLASS and player 2 to CIRCLE_CLASS
        board.classList.add(X_CLASS);
        board.classList.remove(CIRCLE_CLASS);
        
        // Display player 1's name below the board
        const currentPlayer = document.getElementById('currentPlayer');
        currentPlayer.textContent = player1Name;
        
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
        });
      }


      function handleClick(e) {
        console.log("hello world")
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
          const currentPlayer = document.getElementById('currentPlayer');
          currentPlayer.textContent = circleTurn ? player2Name : player1Name;
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
    console.log('Placing mark in cell:', cell);
    console.log('Current class:', currentClass);
    cell.classList.add(currentClass);
    cell.innerHTML = currentClass === X_CLASS ? player1Name : player2Name;
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