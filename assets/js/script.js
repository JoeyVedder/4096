$(document).ready(function(){
    $("#myModal").modal('show');
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

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
    previousAttemptDisplay.textContent = `Previous Attempt: ${previousAttempt}`;
}

function saveScores() {
    localStorage.setItem('4096-score', score);
    localStorage.setItem('4096-high-score', highScore);
    localStorage.setItem('4096-previous-attempt', previousAttempt);
}

function createTile(value) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.textContent = value || '';
    tile.style.backgroundColor = getTileColor(value);
    return tile;
}

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

function addRandomTile() {
    const emptyCells = [];
    board.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (cell === 0) emptyCells.push([r, c]);
        });
    });

    if (emptyCells.length === 0) return;
    const [r, c] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
    

}

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

function moveUp() {
    board = transpose(board);
    const moved = moveLeft();
    board = transpose(board);
    return moved;
}

function moveDown() {
    board = transpose(board);
    const moved = moveRight();
    board = transpose(board);
    return moved;
}

function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

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
    }
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp': handleMove('up'); break;
        case 'ArrowDown': handleMove('down'); break;
        case 'ArrowLeft': handleMove('left'); break;
        case 'ArrowRight': handleMove('right'); break;
    }
});

function initGame() {
    previousAttempt = score;
    board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0)); 
    score = 0; 
    addRandomTile();
    addRandomTile();
    renderBoard();
}

function triggerConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}


initGame();
