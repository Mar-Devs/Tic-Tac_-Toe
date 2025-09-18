
const Player = (function() {
    let Player1Name = prompt("Player 1 (X) Enter Your Name: ")
    let Player2Name = prompt("Player 2 (O) Enter Your Name: ")

    let Player1Variable = 'X'
    let Player2Variable = 'O'

    const player1 = () => console.log(`${Player1Name} is '${Player1Variable}'`)
    const player2 = () => console.log(`${Player2Name} is '${Player2Variable}'`)

    return{Player1Name, Player2Name, player1, player2}
})()

Player.player1()
Player.player2()


const BoardGame = function(){
    let player1Turn = false
    let player2Turn = false
    let boardGameEnteries = []

    for(let i = 0; i < 9; i++){
        switch(i){
            case 0:
                let index0 = prompt(`It's ${Player.Player1Name}'s turn`)
                player1Turn = true
                let index0Move = [index0, "Player1"]
                boardGameEnteries.push(index0Move)
                break;
            case 1:
                let index1 = prompt(`It's ${Player.Player2Name}'s turn`)
                player2Turn = true
                let index1Move = [index1, "Player2"]
                boardGameEnteries.push(index1Move)
                break;
            case 2:
                let index2 = prompt((`It's ${Player.Player1Name}'s turn`))
                player1Turn = true
                let index2Move = [index2, "Player1"]
                boardGameEnteries.push(index2Move)
                break;
            case 3:
                let index3 = prompt(`It's ${Player.Player2Name}'s turn`)
                boardGameEnteries.push(index3)
                player1Turn = true
                player2Turn = false
                break;
            case 4:
                let index4 = prompt(`It's ${Player.Player1Name}'s turn`)
                boardGameEnteries.push(index4)
                player1Turn = false
                player2Turn = true
                break;
            case 5:
                let index5 = prompt(`It's ${Player.Player2Name}'s turn`)
                boardGameEnteries.push(index5)
                player1Turn = true
                player2Turn = false
                break;
            case 6:
                let index6 = prompt(`It's ${Player.Player1Name}'s turn`)
                boardGameEnteries.push(index6)
                player1Turn = false
                player2Turn = true
                break;
            case 7:
                let index7 = prompt(`It's ${Player.Player2Name}'s turn`)
                boardGameEnteries.push(index7)
                player1Turn = true
                player2Turn = false
                break;
            case 8:
                let index8 = prompt(`It's ${Player.Player1Name}'s turn`)
                boardGameEnteries.push(index8)
                player1Turn = false
                player2Turn = false
                break;

            default:
                prompt("Game Over!")
        }

        if(boardGameEnteries[0] && boardGameEnteries[1] && boardGameEnteries[2] === 'X' || boardGameEnteries[0] && boardGameEnteries[1] && boardGameEnteries[2] === 'O'){
            
        }

    }


    return boardGameEnteries

}

BoardGame()





