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
    let isCircle = false; // Initial state

    shapeToggleButton.addEventListener('click', () => {
        tiles.forEach(tile => {
            if (isCircle) {
                tile.classList.remove('circle');
                tile.classList.add('square');
                shapeToggleButton.textContent = '🔲'; // Square icon
            } else {
                tile.classList.remove('square');
                tile.classList.add('circle');
                shapeToggleButton.textContent = '🔵'; // Circle icon
            }
        });
        isCircle = !isCircle; // Toggle the state
    });
});


//Game
const SIZE = 6;
let board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
let score = 0;
let highScore = localStorage.getItem('4096-high-score') || 0;
let previousScore = localStorage.getItem('4096-previous-score') || 0;
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const previousScoreDisplay = document.getElementById('previous-score');

// Swipe detection variables
let touchStartX = 0;
let touchStartY = 0;

// Function to update the score display
function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
    previousScoreDisplay.textContent = `Previous Score: ${previousScore}`;
}

// Function to save scores to localStorage
function saveScores() {
    localStorage.setItem('4096-score', score);
    localStorage.setItem('4096-high-score', highScore);
    localStorage.setItem('4096-previous-score', previousScore);
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
            gameBoard.appendChild(createTile(cell));
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
// Function to add a random tile with a value between 1 and 100 (game lost modal testing)
//function addRandomTileWithValue() {
//    const emptyCells = [];
//    board.forEach((row, r) => {
//        row.forEach((cell, c) => {
//            if (cell === 0) emptyCells.push([r, c]);
//        });
//    });
//
//    if (emptyCells.length === 0) return;
//    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//    
//    // Randomly generate a value between 1 and 100
//    const randomValue = Math.floor(Math.random() * 100) + 1;
//    board[r][c] = randomValue;
//    
//    renderBoard();
//}
//
// Event listener for the "Spawn Random Tile" button
//document.getElementById('spawn-random-tile').addEventListener('click', () => {
//    addRandomTileWithValue();
//});

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
        checkForWinner();// Check if any tile has reached 4096
        checkForLoser(); // Check if the player has lost
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
    previousScore = score;
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
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}


// Show Winnner Modal
function checkForWinner() {
    // Assuming tiles are stored in an array or a grid
    let tiles = document.querySelectorAll('.tile'); // Or however you select your tiles

    tiles.forEach(function(tile) {
        if (parseInt(tile.textContent) === 16) {
           console.log('Winner detected, showing modal.');
            showWinnerModal();
        }
    });
}

function showWinnerModal() {
    var winnerModal = new bootstrap.Modal(document.querySelector('#winnerModal'), {
        backdrop: false
    });
    winnerModal.show();
}



// Function to show the Game Over modal
function showGameOverModal() {
    var gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
    gameOverModal.show();

    // Add an event listener to the "Try again" button
    document.getElementById('try-again-btn').addEventListener('click', function() {
        gameOverModal.hide(); // Close the modal
        initGame(); // Reinitialize the game
    });
}

// Function to check if the game is over (no moves left)
function checkForLoser() {
    // Check if there are any empty tiles
    let hasEmptyTile = board.some(row => row.includes(0));
    
    // Check if there are any possible moves
    let hasMoves = false;
    
    // Check if any adjacent tiles can be combined (left/right, up/down)
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (r < SIZE - 1 && board[r][c] === board[r + 1][c]) {
                hasMoves = true;
            }
            if (c < SIZE - 1 && board[r][c] === board[r][c + 1]) {
                hasMoves = true;
            }
        }
    }

    if (!hasEmptyTile && !hasMoves) {
        showGameOverModal(); // Show the game over modal
    
    }
}
// Initialize the game
initGame();