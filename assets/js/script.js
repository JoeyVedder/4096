$(document).ready(function () {
    $("#myModal").modal('show');
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('toggle-theme');
    const defaultTheme = 'theme-default'; 
    let currentTheme = localStorage.getItem('theme') || defaultTheme;
    
    document.body.classList.add(currentTheme);

    function updateButtonText() {
        if (document.body.classList.contains('theme-default')) {
            themeToggleButton.textContent = '☀️'; 
        } else {
            themeToggleButton.textContent = '🌑'; 
        }
    }

    updateButtonText();

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('theme-default') ? 'theme-light' : 'theme-default';
        document.body.classList.replace(currentTheme, newTheme);
        localStorage.setItem('theme', newTheme);
        currentTheme = newTheme; 
        updateButtonText();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const shapeToggleButton = document.getElementById('toggle-shape');
    const tiles = document.querySelectorAll('.game-container');
    let isCircle = JSON.parse(localStorage.getItem('isCircle')) || false;

    tiles.forEach(tile => {
        if (isCircle) {
            tile.classList.add('circle');
            shapeToggleButton.textContent = '🔵';
        } else {
            tile.classList.add('square');
            shapeToggleButton.textContent = '🟦';
        }
    });

    shapeToggleButton.addEventListener('click', () => {
        isCircle = !isCircle; // Toggle the state
        tiles.forEach(tile => {
            if (isCircle) {
                tile.classList.remove('square');
                tile.classList.add('circle');
                shapeToggleButton.textContent = '🔵'; 
            } else {
                tile.classList.remove('circle');
                tile.classList.add('square');
                shapeToggleButton.textContent = '🟦'; 
            }
        });
        localStorage.setItem('isCircle', JSON.stringify(isCircle)); // Save the shape state to localStorage
    });
});


//Game
const SIZE = 6;
let board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
let score = 0;
let highScore = localStorage.getItem('4096-high-score') || 0;
let previousAttempt = localStorage.getItem('4096-previous-attempt') || 0;
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const previousAttemptDisplay = document.getElementById('previous-attempt');

// Swipe detection variables
let touchStartX = 0;
let touchStartY = 0;

// Function to update the score display
function updateScoreDisplay() {
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        console.error('Score display element not found');
    }

    if (highScoreDisplay) {
        highScoreDisplay.textContent = `High Score: ${highScore}`;
    } else {
        console.error('High score display element not found');
    }

    if (previousAttemptDisplay) {
        previousAttemptDisplay.textContent = `Previous Attempt: ${previousAttempt}`;
    } else {
        console.error('Previous attempt display element not found');
    }
}

// Function to save scores to localStorage
function saveScores() {
    localStorage.setItem('4096-score', score);
    localStorage.setItem('4096-high-score', highScore);
    localStorage.setItem('4096-previous-attempt', previousAttempt);
}

// Function to create a tile element
function createTile(value) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.textContent = value || '';
    tile.style.backgroundColor = getTileColor(value);
    return tile;
}

// Function to get the color of a tile based on its value
function getTileColor(value) {
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#cdc1b4';
    }
}

// Function to render the game board
function renderBoard() {
    gameBoard.innerHTML = '';
    board.forEach(row => {
        row.forEach(cell => {
            const tile = createTile(cell);
            tile.classList.add('shrink-pop');
            gameBoard.appendChild(tile);
            // Remove the class after the animation is complete
            tile.addEventListener('animationend', () => {
                tile.classList.remove('shrink-pop');
            }, { once: true });
        });
    });
    updateScoreDisplay();
    saveScores();
}

// Function to add a random tile to the board
function addRandomTile() {
    const emptyCells = [];
    board.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (cell === 0) emptyCells.push([r, c]);
        });
    });

    if (emptyCells.length === 0) return;
    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    
    // Randomly choose tile value: 2, 4, 8, or 16
    const randomValue = Math.random();
    if (randomValue < 0.8) {
        board[r][c] = 2; // 80% chance
    } else if (randomValue < 0.95) {
        board[r][c] = 4; // 15% chance
    } else {
        board[r][c] = Math.random() < 0.5 ? 8 : 16; // 5% chance, equally for 8 or 16
    }
}

// Function to move tiles left
function moveLeft() {
    let moved = false;
    board.forEach((row, r) => {
        let newRow = row.filter(val => val !== 0);
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                score += newRow[i];
                newRow.splice(i + 1, 1);
                newRow.push(0);
                moved = true;
            }
        }
        while (newRow.length < SIZE) newRow.push(0);
        if (JSON.stringify(newRow) !== JSON.stringify(row)) moved = true;
        board[r] = newRow;
    });
    return moved;
}

// Function to move tiles right
function moveRight() {
    board.forEach((row, r) => {
        board[r] = row.reverse();
    });
    const moved = moveLeft();
    board.forEach((row, r) => {
        board[r] = row.reverse();
    });
    return moved;
}

// Function to move tiles up
function moveUp() {
    board = transpose(board);
    const moved = moveLeft();
    board = transpose(board);
    return moved;
}

// Function to move tiles down
function moveDown() {
    board = transpose(board);
    const moved = moveRight();
    board = transpose(board);
    return moved;
}

// Function to transpose a matrix
function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

// Function to handle move direction
function handleMove(direction) {
    let moved = false;
    switch (direction) {
        case 'left': moved = moveLeft(); break;
        case 'right': moved = moveRight(); break;
        case 'up': moved = moveUp(); break;
        case 'down': moved = moveDown(); break;
    }
    if (moved) {
        addRandomTile();
        renderBoard();
        if (checkForWinner()) {
            triggerConfetti(); // Optional: Trigger confetti if there's a winner
        } else if (checkForLoser()) {
            // Game over logic here
        }
    }
}
// Event listener for keyboard input
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
            handleMove("up");
            break;
        case "ArrowDown":
        case "s":
        case "S":
            handleMove("down");
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            handleMove("left");
            break;
        case "ArrowRight":
        case "d":
        case "D":
            handleMove("right");
            break;
    }
});


// Event listener for touch start
document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
});

// Event listener for touch end
document.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;

    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    // Determine swipe direction
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
            handleMove('right');
        } else {
            handleMove('left');
        }
    } else {
        if (dy > 0) {
            handleMove('down');
        } else {
            handleMove('up');
        }
    }
});

// Function to initialize the game
function initGame() {
    // Save previous score to local storage before initializing the new game
    localStorage.setItem('4096-previous-attempt', previousAttempt);
    // Initialize game state
    board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    score = 0;
    addRandomTile();
    addRandomTile();
    renderBoard();
    // Lock the page from scrolling
    document.body.style.overflow = 'hidden';
}

// Function to trigger confetti animation (requires confetti library)
function triggerConfetti() {
    const duration = 5 * 1000; // Duration of the confetti animation in milliseconds
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5, // Number of confetti particles to generate per frame
            angle: Math.random() * 360, // Random angle for confetti spread
            spread: Math.random() * 60 + 20, // Random spread value for confetti
            origin: {
                x: Math.random(), // Random horizontal position
                y: Math.random() - 0.2 // Random vertical position
            }
        });

        // Continue to generate confetti frames until the end time is reached
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}



function checkForWinner() {
    for (let row of board) {
        if (row.includes(4096)) {
            if (score > highScore) {
                highScore = score; // Update high score
                saveScores(); // Save high score to local storage
            }
            showWinnerModal(); // Show winner modal
            return true;
        }
    }
    return false;
}

function showWinnerModal() {
    console.log('Showing winner modal');
    var winnerModal = new bootstrap.Modal(document.querySelector('#winnerModal'), {
        backdrop: 'static'  // Disable closing the modal by clicking outside
    });
    winnerModal.show();

    const winnerPlayAgainButton = document.getElementById('winner-play-again-btn');
    winnerPlayAgainButton.addEventListener('click', function() {
        winnerModal.hide();  // Close the modal
        initGame();  // Reinitialize the game
        const resetButton = document.getElementById('reset-game');
        resetButton.textContent = 'Reset Game';  // Reset button text to "Reset Game"
    });
}

function checkForLoser() {
    // Check if there are any empty cells
    for (let row of board) {
        if (row.includes(0)) {
            return false;
        }
    }

    // Check for possible moves horizontally and vertically
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            // Check right and down neighbors
            if ((c < SIZE - 1 && board[r][c] === board[r][c + 1]) ||
                (r < SIZE - 1 && board[r][c] === board[r + 1][c])) {
                return false;
            }
        }
    }

    // No moves left and no empty cells, game over
    previousAttempt = score; // Update previous attempt score
    saveScores(); // Save previous attempt score to local storage
    showGameOverModal(); // Show game over modal
    return true;
}

function showGameOverModal() {
    console.log('Showing game over modal');
    var gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
    gameOverModal.show();

    // Add an event listener to the "Try again" button
    document.getElementById('try-again-btn').addEventListener('click', function() {
        // Update previous attempt with the current score
        previousAttempt = score;
        localStorage.setItem('4096-previous-attempt', previousAttempt);

        gameOverModal.hide(); // Close the modal
        initGame(); // Reinitialize the game
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve previous attempt from local storage
    previousAttempt = localStorage.getItem('4096-previous-attempt') || 0;
    updateScoreDisplay();
});

function handleGameOver() {
    previousAttempt = score;
    showGameOverModal();
}

// function that adds a random value to a tile on the playing board for gameOver modal testing
//function addRandomValueTileOnClick() {
//    const addRandomValueButton = document.getElementById('add-random-value');

//    addRandomValueButton.addEventListener('click', () => {
//        const emptyCells = [];
        
       // Find all empty cells (cells with a value of 0)
//        board.forEach((row, r) => {
//           row.forEach((cell, c) => {
//               if (cell === 0) emptyCells.push([r, c]);
//            });
//        });

        // If there are no empty cells, exit the function
//        if (emptyCells.length === 0) return;

        // Choose a random empty cell
//        const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        // Assign a random value between 1 and 100 to the chosen cell
//        board[r][c] = Math.floor(Math.random() * 100) + 1;

        // Re-render the board to display the new value
//        renderBoard();
//    });
//}

        //Initialize random tile number generator for modal testing

//addRandomValueTileOnClick();

// Initialize the game
initGame();