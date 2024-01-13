document.addEventListener('DOMContentLoaded', () => {
  const cells = document.getElementsByClassName('cell');
  const resetButton = document.getElementById('reset');

  let currentPlayer = 'X';
  let board = ['', '', '', '', '', '', '', '', ''];
  let gameOver = false;

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      if (!gameOver && cells[i].innerHTML === '') {
        cells[i].innerHTML = currentPlayer;
        board[i] = currentPlayer;

        if (checkWin()) {
          alert(currentPlayer + ' wins!');
          gameOver = true;
        } else if (checkTie()) {
          alert("It's a tie!");
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  }

  resetButton.addEventListener('click', () => {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    for (let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = '';
    }
  });

  function checkWin() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  }

  function checkTie
  () {
    for (let cell of board) {
    if (cell === '') {
    return false;
    }
    }
    return true;
  }
});