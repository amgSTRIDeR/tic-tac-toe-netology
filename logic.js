let players = ['x', 'o'];
let activePlayer = 0;
let board;


function startGame() {
  board = [['', '', ''], 
           ['', '', ''], 
           ['', '', ''], 
         ];
  
  renderBoard(board);
  
  console.log(`Player ${activePlayer + 1} (${players[activePlayer].toUpperCase()}) move`);
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
    
    console.clear();
    
    console.log(`Player ${activePlayer + 1} (${players[activePlayer].toUpperCase()}) move`);
  }
}