let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let winner = document.getElementById('winner');
const winConditions = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
]
let winnerDeclared = false;
let flag=0;

//handle my click
function handleClick() {
     let td = event.target;
     console.log(td);
     let index = td.getAttribute('index');
     // check if the cell is already filled or empty
     if (td.innerHTML == '') {
          td.innerHTML = currentPlayer;
          gameState[index] = currentPlayer;

          // check the winner
          checkWinner();
          checkDraw();
          changePlayer();
     }

}

function changePlayer() {
     currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function checkWinner(){
     for(let i=0; i<8; i++){
          var a = winConditions[i][0];
          var b = winConditions[i][1];
          var c = winConditions[i][2];
          if(gameState[a] == currentPlayer && gameState[b] == currentPlayer && gameState[c] == currentPlayer){
               winnerDeclared = true;
               if(flag === 0)
               winner.innerHTML = "Winner is " + currentPlayer;
               winner.style.backgroundColor = "hsla(14, 87%, 69%, 1)";
               winner.style.border = "2px solid black";
               winner.style.borderRadius = "10px";
               flag=1;
          }
     }
}

function checkDraw(){
     if(!gameState.includes('') && winnerDeclared === false){
          winner.innerHTML = 'Game is Tied';
     }
}
// initiallize

// check the draw

function init() {
     var tdcells = document.getElementsByTagName('td');
     console.log(tdcells);

     for (let i = 0; i < 9; i++) {
          tdcells[i].addEventListener('click', handleClick);
     }
}
init();