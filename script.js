//players stored inside object

const player = (name ,char) => {
let symbol = char;
let turn = false;

//add symbol to whichever mark is clicked
//update the gamearray with that symbol
function takeTurn(){
    if (turn) {        
        console.log(e.target.id)
        //if it is players turn, then let them make one selection on gamboard
        //tie that to dom -symbol to whatever mark/update game array

        //if the game array slot is taken then do not allow that to be updated
    }

}

return{symbol, takeTurn, turn}
}

const player1 = player("player1", "X");
const player2 = player("player2", "O");
player1.turn = true;

//store gameboard as array inside object
//set up html and write function that will render the contents of the gameboard array to the page
var gameBoard = (function(){
        
    let gameArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    

    //this is event listener function, will update to the players symbol... 
    //have that working but also want to update the array value to the symbol...switch isnt working
    function updateDisplay(e){
        console.log(e)
        let square = document.getElementById(e.target.id)           
        if (player1.turn) {
            console.log(square)
            var symbol = player1.symbol;            
        }
        else if (player2.turn) {            
            var symbol = player2.symbol;
        }
        //updates relevant array value with players symbol
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
        renderBoard();
        console.log(gameArray)
    };

    //draw out contents of gamearray on board
    function renderBoard(){
    for(var i = 0; i < 10; i++)
        {
            let table = document.getElementById(`${i+1}`);
            table.innerText = gameArray[i];
            table.addEventListener("click", updateDisplay);
        }
    }

    return{gameArray, renderBoard};
})();

gameBoard.renderBoard();

//object to control the flow of the game

//if you need one of something, use a module
//multiples(players) create with factories


/*Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, 
letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing
 in spots that are already taken!

    Think carefully about where each bit of logic should reside. Each little piece of functionality should be 
    able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. 
    Spending a little time brainstorming here can make your life much easier later!*/

