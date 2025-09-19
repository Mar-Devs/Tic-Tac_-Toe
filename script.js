
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
                let index0Move = [index0, Player.Player1Name]
                boardGameEnteries.push(index0Move)
                break;
            case 1:
                let index1 = prompt(`It's ${Player.Player2Name}'s turn`)
                player2Turn = true
                let index1Move = [index1, Player.Player2Name]
                boardGameEnteries.push(index1Move)
                break;
            case 2:
                let index2 = prompt((`It's ${Player.Player1Name}'s turn`))
                player1Turn = true
                let index2Move = [index2, Player.Player1Name]
                boardGameEnteries.push(index2Move)
                if ((boardGameEnteries[0][0] === boardGameEnteries[1][0]) && (boardGameEnteries[2][0] === boardGameEnteries[1][0])){
                    console.log(`${boardGameEnteries[0][1]} wins!`)
                    i = 9
                }
                break;
            case 3:
                let index3 = prompt(`It's ${Player.Player2Name}'s turn`)
                player2Turn = true
                let index3Move = [index3, Player.Player2Name]
                boardGameEnteries.push(index3Move)
                break;
            case 4:
                let index4 = prompt(`It's ${Player.Player1Name}'s turn`)
                player1Turn = true
                let index4Move = [index4, Player.Player1Name]
                boardGameEnteries.push(index4Move)
                
                break;
            case 5:
                let index5 = prompt(`It's ${Player.Player2Name}'s turn`)
                player2Turn = true
                let index5Move = [index5, Player.Player2Name]
                boardGameEnteries.push(index5Move)
                if ((boardGameEnteries[0][0] === boardGameEnteries[1][0]) && (boardGameEnteries[2][0] === boardGameEnteries[1][0])){
                    console.log(`${boardGameEnteries[0][1]} wins!`)
                    i = 9 
                }
                else if ((boardGameEnteries[3][0] === boardGameEnteries[4][0]) && (boardGameEnteries[5][0] === boardGameEnteries[4][0])){
                    console.log(`${boardGameEnteries[3][1]} wins!`)
                    i = 9
                }
                
                break;
            case 6:
                let index6 = prompt(`It's ${Player.Player1Name}'s turn`)
                player2Turn = true
                let index6Move = [index6, Player.Player1Name]
                boardGameEnteries.push(index6Move)
                if ((boardGameEnteries[0][0] === boardGameEnteries[3][0]) && (boardGameEnteries[6][0] === boardGameEnteries[3][0])){
                    console.log(`${boardGameEnteries[0][1]} wins!`)
                    i = 9
                }
                else if ((boardGameEnteries[2][0] === boardGameEnteries[4][0]) && (boardGameEnteries[6][0] === boardGameEnteries[4][0])){
                    console.log(`${boardGameEnteries[2][1]} wins!`)
                    i = 9
                }
                break;
            case 7:
                let index7 = prompt(`It's ${Player.Player2Name}'s turn`)
                player2Turn = true
                let index7Move = [index7, Player.Player2Name]
                boardGameEnteries.push(index7Move)
                if ((boardGameEnteries[1][0] === boardGameEnteries[4][0]) && (boardGameEnteries[7][0] === boardGameEnteries[4][0])){
                    console.log(`${boardGameEnteries[0][1]} wins!`)
                    i = 9
                }
                else if ((boardGameEnteries[2][0] === boardGameEnteries[4][0]) && (boardGameEnteries[7][0] === boardGameEnteries[4][0])){
                    console.log(`${boardGameEnteries[0][2]} wins!`)
                    i = 9
                }
                break;
            case 8:
                let index8 = prompt(`It's ${Player.Player1Name}'s turn`)
                player1Turn = true
                let index8Move = [index8, Player.Player1Name]
                boardGameEnteries.push(index8Move)
                if ((boardGameEnteries[0][0] === boardGameEnteries[4][0]) && (boardGameEnteries[8][0] === boardGameEnteries[4][0])){
                    console.log(`${boardGameEnteries[0][1]} wins!`)
                    i = 9
                }

                else if ((boardGameEnteries[2][0] === boardGameEnteries[5][0]) && (boardGameEnteries[8][0] === boardGameEnteries[5][0])){
                    console.log(`${boardGameEnteries[2][1]} wins!`)
                    i = 9
                }
                else if ((boardGameEnteries[6][0] === boardGameEnteries[7][0]) && (boardGameEnteries[8][0] === boardGameEnteries[7][0])){
                    console.log(`${boardGameEnteries[6][1]} wins!`)
                    i = 9
                }
                break;

            default:
                prompt("Game Over!")
        }
    }

    return boardGameEnteries

}

BoardGame()





