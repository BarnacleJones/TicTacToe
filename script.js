//players stored inside factory function
const player = (char) => {
let symbol = char;
let turn = false;
return{symbol, turn}
}

//gameboard inside module
var gameBoard = (function(){       
    let gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];   
    let takenTurn = false;  
    //onclick event to update text in square and relevant array value
    function updateDisplay(e){   
        let square = document.getElementById(e.target.id)           
        if (player1.turn) {
            var symbol = player1.symbol;  
            }
        else if (player2.turn) {            
            var symbol = player2.symbol;
            }
        //if slot in the array is not already taken:
        let arrayValue = parseInt(square.id);
        if (gameArray[arrayValue-1] === " ") {            
        //updates array based on id returned from the square
        switch (square.id) {
            case "1":
                gameArray[0] = symbol;
                break;
            case "2":
                gameArray[1] = symbol
                break;
            case "3":
                gameArray[2] = symbol
                break;
            case "4":
                gameArray[3] = symbol
                break;
            case "5":
                gameArray[4] = symbol
                break;
            case "6":
                gameArray[5] = symbol
                break;
            case "7":
                gameArray[6] = symbol
                break;
            case "8":
                gameArray[7] = symbol
                break;    
            case "9":
                gameArray[8] = symbol
                break;                                      
            default:
                break;
        }        
        gameBoard.takenTurn = true;
        gamePlay.determineWin();
        gamePlay.toggleTurns();        
        }
        else{console.log("already taken")}
        renderBoard(); 
    };
    //draw out contents of gamearray on board
    function renderBoard(){               
    for(var i = 0; i < 10; i++)   
        {
            let table = document.getElementById(`${i+1}`);
            table.innerText = gameArray[i];
            table.removeEventListener("click", resetGame);
            table.addEventListener("click", updateDisplay);
        }                         
    }

    function resetGame(){
        gameArray.fill(" ") 
        takenTurn = false;        
        player2.turn = false;
        player1.turn = true;
        document.getElementById("winningSection").innerText = "";
        gamePlay.startGame();
    }

    function stopClicking(){
        for(var i = 0; i < 10; i++)   
        {
            let table = document.getElementById(`${i+1}`);
            table.innerText = '🎉';
            table.addEventListener("click", resetGame);
        } 
    }

    return{gameArray, renderBoard, takenTurn, resetGame, stopClicking};
})();

//object to control the flow of the game
var gamePlay = function(){
    //score tallys for gameboard interface
    let player1Score = 0;
    let player2Score = 0;
    let winnerDisplay = document.getElementById("winningSection");

    function score(){
    let player1ScoreTally = document.getElementById("player1Score");
    let player2ScoreTally = document.getElementById("player2Score");
    player1ScoreTally.innerText = player1Score;
    player2ScoreTally.innerText = player2Score;
    }

    function startGame(){
        player1.turn = true;
        gameBoard.renderBoard();        
    }
    function toggleTurns(){
        if (player1.turn && gameBoard.takenTurn) {
            player1.turn = false;
            player2.turn = true;
            gameBoard.takenTurn = false;
        }
        else if (player2.turn && gameBoard.takenTurn) {
            player2.turn = false;
            player1.turn = true;
            gameBoard.takenTurn = false;
        }
    }
    function determineWin()
    { 
        if ((gameBoard.gameArray[0] == "X" && gameBoard.gameArray[1] == "X" && gameBoard.gameArray[2] == "X") ||
        (gameBoard.gameArray[3] == "X" && gameBoard.gameArray[4] == "X" && gameBoard.gameArray[5] == "X") ||
        (gameBoard.gameArray[6] == "X" && gameBoard.gameArray[7] == "X" && gameBoard.gameArray[8] == "X") ||
        (gameBoard.gameArray[0] == "X" && gameBoard.gameArray[3] == "X" && gameBoard.gameArray[6] == "X") ||
        (gameBoard.gameArray[1] == "X" && gameBoard.gameArray[4] == "X" && gameBoard.gameArray[7] == "X") ||
        (gameBoard.gameArray[2] == "X" && gameBoard.gameArray[5] == "X" && gameBoard.gameArray[8] == "X") ||
        (gameBoard.gameArray[0] == "X" && gameBoard.gameArray[4] == "X" && gameBoard.gameArray[8] == "X") ||
        (gameBoard.gameArray[2] == "X" && gameBoard.gameArray[4] == "X" && gameBoard.gameArray[6] == "X")) 
        {
            player1Score++;
            score();
            winnerDisplay.innerText = "Player 1 wins";
            gameBoard.stopClicking();
        }

        else if ((gameBoard.gameArray[0] == "O" && gameBoard.gameArray[1] == "O" && gameBoard.gameArray[2] == "O") ||
        (gameBoard.gameArray[3] == "O" && gameBoard.gameArray[4] == "O" && gameBoard.gameArray[5] == "O") ||
        (gameBoard.gameArray[6] == "O" && gameBoard.gameArray[7] == "O" && gameBoard.gameArray[8] == "O") ||
        (gameBoard.gameArray[0] == "O" && gameBoard.gameArray[3] == "O" && gameBoard.gameArray[6] == "O") ||
        (gameBoard.gameArray[1] == "O" && gameBoard.gameArray[4] == "O" && gameBoard.gameArray[7] == "O") ||
        (gameBoard.gameArray[2] == "O" && gameBoard.gameArray[5] == "O" && gameBoard.gameArray[8] == "O") ||
        (gameBoard.gameArray[0] == "O" && gameBoard.gameArray[4] == "O" && gameBoard.gameArray[8] == "O") ||
        (gameBoard.gameArray[2] == "O" && gameBoard.gameArray[4] == "O" && gameBoard.gameArray[6] == "O")) {
            player2Score++;
                score();
                winnerDisplay.innerText = "Player 2 wins"
                gameBoard.stopClicking();                
        }

        // else if (array.forEach(element => {element !== " "; return true;})) {
        //     winnerDisplay.innerText = "Its a tie!"
        //     gameBoard.resetGame();
        // }
    }
        //spent hours trying to get this to go...
        
        //const winConditions = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];  
        //from stackoverflow no idea how this works
        /*const indexOfAll = (arr, val) => arr.reduce((previousValue, currentValue, index) =>
        (currentValue === val ? [...previousValue, index] : previousValue), []);

        let combinationX = indexOfAll(gameBoard.gameArray, "X");
        let combinationO = indexOfAll(gameBoard.gameArray, "O");
            
        for (let index = 0; index < winConditions.length; index++) {         
            
            if (combinationX === winConditions[index])) 
            {
                player1Score++;
                score();
                alert("player1 wins");
                gameBoard.resetGame();            
            }
            else if (combinationO === winConditions[index])) 
            {
                player2Score++;
                score();
                alert("player2 wins");
                gameBoard.resetGame(); 
            }           
        }
    }*/ 
    return{startGame, toggleTurns, determineWin}    
}();

//global calls
const player1 = player("X");
const player2 = player("O");

gamePlay.startGame();

// document.getElementById("resetButton").addEventListener("click", gameBoard.resetGame());