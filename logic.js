let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
  console.log("Player " + activePlayer + " move");

  board = [
    ['', '', ''], 
    ['', '', ''], 
    ['', '', ''], 
  ];
  
  renderBoard(board);
}

function click(row, column) {
  let count = 0;

  if (board[row][column] == '') {
    board[row][column] = players[activePlayer];

    for (let i = 0; i < board.length; i++) {
      for (let k = 0; k < board[i].length; k++) {
        if (board[i][k] == players[activePlayer]) {
          count += 1;
        }
        if (count == board.length) {
          showWinner(activePlayer);
        }
      }
      count = 0;
    }
    
    for (let k = 1; k <= board.length; k++) {
     for (let i = 0; i < board.length; i++) {
        if (board[i][(board.length - k)] == players[activePlayer]) {
          count += 1;
        }
       
        if (count == board.length) {
          showWinner(activePlayer);
        }
      }
      count = 0;
    }

        
     for (let i = 0; i < board.length; i++) {
        if (board[i][i] == players[activePlayer]) {
          count += 1;
        }
       
        if (count == board.length) {
          showWinner(activePlayer);
        }
      }
      count = 0;

        for (let i = 0; i < board.length; i++) {
        if (board[i][(board.length - i - 1)] == players[activePlayer]) {
          count += 1;
        }
       
        if (count == board.length) {
          showWinner(activePlayer);
        }
      }
      count = 0;
    
    renderBoard(board);

    activePlayer = activePlayer == 0 ? 1 : 0;
    
    console.log("Player " + activePlayer + " move");
  }
}

// click вызывается при клике игрока по полю. Вызов происходит с двумя значениями — номер строки и колонки, по которой произошел клик. В этой функции нужно обновить игровое поле и проверить, выиграл ли игрок, либо можно передавать ход следующему.