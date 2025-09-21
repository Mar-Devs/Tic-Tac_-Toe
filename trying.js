function Player(name, character, points){
    this.name = name
    this.character = character
    this.points = points
}


    let playersInfo = (function(){
        let player1Name = prompt("Player one enter your name:")
        let player1Character = prompt("Enter the character you'll be playing with (e.g X or O)")
        let player1 = new Player(player1Name,player1Character,0)

        let player2Name = prompt("Player two enter your name:")
        let player2Character = prompt("Enter the character you'll be playing with (e.g X or O")
        let player2 = new Player(player2Name, player2Character,0)

        return {player1,player2}
    })()




    let decideWinner = function(BoardGameArray){
        let arrname = ''
        let gameOver = false

                if(BoardGameArray?.[0][0] && BoardGameArray?.[1][0] && BoardGameArray?.[2][0]){
                    if(BoardGameArray[0][0] === BoardGameArray[1][0] && BoardGameArray[1][0] === BoardGameArray[2][0]){
                        arrname = BoardGameArray[0][1]
                        gameOver = true
                        }
                    }
                if(BoardGameArray?.[3][0] && BoardGameArray?.[4][0]  && BoardGameArray?.[5][0]){
                    if(BoardGameArray[3][0] === BoardGameArray[4][0] && BoardGameArray[4][0] === BoardGameArray[5][0]){
                        arrname = BoardGameArray[3][0]
                        gameOver = true
                    }
                }
            
  
    return gameOver

}

function Game(){
    let createArray = (function(){
        let BoardGameArray = [[],[],[],[],[],[],[],[]]
        let player1Name = playersInfo.player1.name
        let player2Name = playersInfo.player2.name

        return {player1Name,player2Name, BoardGameArray}
        })()
        

        let player1Name = createArray.player1Name
        let player2Name = createArray.player2Name
        let BoardGameArray = createArray.BoardGameArray

        let gameLogic = function(){
            let choice = ''
            let choiceArray = []
            let player1Points = playersInfo.player1.points
            let player2Points = playersInfo.player2.points


            for(let i = 1; i < 4; i++){
                alert(`This is round: ${i}`)
                BoardGameArray = [[],[],[],[],[],[],[],[]]
                    for(let i = 1; i < 10; i++){
                          if(i % 2 === 0){
                          choice = prompt(`${player2Name}'s turn:`)
                          choiceArray = [choice,player2Name]
                          BoardGameArray.splice((i-1),1,choiceArray)
                          decideWinner(BoardGameArray)
                          let gameOver = decideWinner(BoardGameArray)
                            if(gameOver === true){
                                ++player2Points
                                console.log(player2Points)
                                  break
                              }
                           }
                         else if(i % 2 !== 0){
                            choice = prompt(`${player1Name}'s turn:`)
                            choiceArray = [choice,player1Name]
                            BoardGameArray.splice((i-1),1,choiceArray)
                            decideWinner(BoardGameArray)
                            let gameOver = decideWinner(BoardGameArray)
                              if(gameOver === true){
                                   ++player1Points
                                      console.log(player1Points)
                                      break
                                  }

                           }
                          
                        }
   
                if(player1Points > player2Points){
                    console.log(`The winner is ${player1Name}`)
                }
                else if(player2Points > player2Points){
                    console.log(`The winner is ${player2Name}`)
                }
    }
    return {player1Points, player2Points}
        }
        gameLogic()
}


    Game()



