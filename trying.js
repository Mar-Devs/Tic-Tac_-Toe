function Player(name , points){
    this.name = name
    this.points = points
}



const player1Input = document.querySelector(".player1name")
const player2Input = document.querySelector(".player2name")
const landingPageContainer = document.querySelector(".landingPageContainer")
const startGameBtn = document.querySelector(".startGame")
startGameBtn.addEventListener("click",()=>{
        let player1name = player1Input.value
        let player2name = player2Input.value
        
        landingPageContainer.remove()
        Game(player1name,player2name)
})




    function playersInfo(player1name,player2name){
        let player1Name = player1name
        let player1 = new Player(player1Name,0)

        let player2Name = player2name
        let player2 = new Player(player2Name,0)

        return {player1Name,player2Name}
    
    }


    function createGrid(player1name,player2name){
        let {player1Name , player2Name} = playersInfo(player1name,player2name)


        const body = document.querySelector("body")
        body.style.display = 'grid'
        body.style.gridTemplateColumns = 'repeat(5,1fr)'
        body.style.gridTemplateRows = 'repeat(5,1fr)'
        body.style.justifyItems = 'center'

        const player1NameDisplay = document.createElement("p")
        player1NameDisplay.className = 'player1NameDisplay'
        player1NameDisplay.textContent = player1Name
        body.appendChild(player1NameDisplay)


        const player2NameDisplay = document.createElement("p")
        player2NameDisplay.className = 'player2NameDisplay'
        player2NameDisplay.textContent = player2Name
        body.appendChild(player2NameDisplay)


        const createGameBtn = document.createElement("button")
        createGameBtn.textContent = 'Restart Game'
        createGameBtn.className = 'restart-game'
        body.appendChild(createGameBtn)

        const boardGame = document.createElement("div")
        boardGame.className = 'boardGame'
        body.appendChild(boardGame)  

        const item1 = document.createElement("div")
        const item1P = document.createElement("p")
        item1.appendChild(item1P)
        item1.className = 'item'
        item1.setAttribute('id','item1')
        boardGame.appendChild(item1)

        const item2 = document.createElement("div")
        const item2P = document.createElement("p")
        item2.appendChild(item2P)
        item2.className = 'item'
        item2.setAttribute('id','item2')
        boardGame.appendChild(item2)

        const item3 = document.createElement("div")
        const item3P = document.createElement("p")
        item3.appendChild(item3P)
        item3.className = 'item'
        item3.setAttribute('id','item3')
        boardGame.appendChild(item3)

        const item4 = document.createElement("div")
        const item4P = document.createElement("p")
        item4.appendChild(item4P)
        item4.className = 'item'
        item4.setAttribute('id','item4')
        boardGame.appendChild(item4)

        const item5 = document.createElement("div")
        const item5P = document.createElement("p")
        item5.appendChild(item5P)
        item5.className = 'item'
        item5.setAttribute('id','item5')
        boardGame.appendChild(item5)

        const item6 = document.createElement("div")
        const item6P = document.createElement("p")
        item6.appendChild(item6P)
        item6.className = 'item'
        item6.setAttribute('id','item6')
        boardGame.appendChild(item6)

        const item7 = document.createElement("div")
        const item7P = document.createElement("p")
        item7.appendChild(item7P)
        item7.className = 'item'
        item7.setAttribute('id','item7')
        boardGame.appendChild(item7)

        const item8 = document.createElement("div")
        const item8P = document.createElement("p")
        item8.appendChild(item8P)
        item8.className = 'item'
        item8.setAttribute('id','item8')
        boardGame.appendChild(item8)

        const item9 = document.createElement("div")
        const item9P = document.createElement("p")
        item9.appendChild(item9P)
        item9.className = 'item'
        item9.setAttribute('id','item9')
        boardGame.appendChild(item9)

        function event(){
            let BoardGameArray = [[],[],[],[],[],[],[],[],[]]
            let count = 0
            let item1Counter = 0
            let item2Counter = 0
            let item3Counter = 0
            let item4Counter = 0
            let item5Counter = 0
            let item6Counter = 0
            let item7Counter = 0
            let item8Counter = 0
            let item9Counter = 0
    

            let clear  = function(){
            item1P.textContent = ''
            item2P.textContent = ''
            item3P.textContent = ''
            item4P.textContent = ''
            item5P.textContent = ''
            item6P.textContent = ''
            item7P.textContent = ''
            item8P.textContent = ''
            item9P.textContent = ''
            item1Counter = 0
            item2Counter = 0
            item3Counter = 0
            item4Counter = 0
            item5Counter = 0
            item6Counter = 0
            item7Counter = 0
            item8Counter = 0
            item9Counter = 0
            count = 0
            BoardGameArray = [[],[],[],[],[],[],[],[],[]]
            player2NameDisplay.style.textShadow = '0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 20px #77d4e0,0 0 20px #77d4e0,0 0 10px #77d4e0,0 0 30px #77d4e0,0 0 5px #77d4e0'
            player1NameDisplay.style.textShadow = '0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 20px #03fc49,0 0 20px #03fc49,0 0 10px #03fc49,0 0 30px #03fc49,0 0 5px #03fc49'
            // player1NameDisplay.textContent = player1Name
            // player2NameDisplay.textContent = player2Name
        }

         createGameBtn.addEventListener("click",()=>{
            clear()
            player1NameDisplay.textContent = player1Name
            player2NameDisplay.textContent = player2Name
        })
            
            item1.addEventListener("click",()=>{
                if(item1Counter === 0){
                    ++item1Counter
                    ++count
                      let j = 0
                    slices(player1Name,player2Name,BoardGameArray,j,count,item1P,clear,player1NameDisplay,player2NameDisplay)

}
            })

            item2.addEventListener("click",()=>{
                if(item2Counter === 0){
                    ++item2Counter
                    ++count
                     let j = 1
                    slices(player1Name,player2Name,BoardGameArray,j,count,item2P,clear,player1NameDisplay,player2NameDisplay)
                     
}
            })

            item3.addEventListener("click",()=>{
                if(item3Counter === 0){
                    ++item3Counter
                    ++count
                     let j = 2
                    slices(player1Name,player2Name,BoardGameArray,j,count,item3P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            item4.addEventListener("click",()=>{
                if(item4Counter === 0){
                    ++item4Counter
                    ++count
                     let j = 3
                    slices(player1Name,player2Name,BoardGameArray,j,count,item4P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            item5.addEventListener("click",()=>{
                if(item5Counter === 0){
                    ++item5Counter
                    ++count
                     let j = 4
                    slices(player1Name,player2Name,BoardGameArray,j,count,item5P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            item6.addEventListener("click",()=>{
                if(item6Counter === 0){
                    ++item6Counter
                    ++count
                     let j = 5
                    slices(player1Name,player2Name,BoardGameArray,j,count,item6P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            item7.addEventListener("click",()=>{
                if(item7Counter === 0){
                    ++item7Counter
                    ++count
                     let j = 6
                    slices(player1Name,player2Name,BoardGameArray,j,count,item7P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            item8.addEventListener("click",()=>{
                if(item8Counter === 0){
                    ++item8Counter
                    ++count
                     let j = 7
                    slices(player1Name,player2Name,BoardGameArray,j,count,item8P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            item9.addEventListener("click",()=>{
                if(item9Counter === 0){
                    ++item9Counter
                    ++count
                     let j = 8
                    slices(player1Name,player2Name,BoardGameArray,j,count,item9P,clear,player1NameDisplay,player2NameDisplay)
}
            })

            let winner = decideWinner(BoardGameArray)
            if(winner === true){
                alert("We have a winner!")
            }
        
        }

        event()

        return {player1Name , player2Name}
    }

    let decideWinner = function(BoardGameArray){
        let arrname = ''
        let gameOver = false
    

                if(BoardGameArray?.[0][0] && BoardGameArray?.[1][0] && BoardGameArray?.[2][0]){
                    if(BoardGameArray?.[0][0] === BoardGameArray?.[1][0] && BoardGameArray?.[1][0] === BoardGameArray?.[2][0]){
                        arrname = BoardGameArray?.[0][1]
                        gameOver = true
                        }
                    }

 
                if(BoardGameArray?.[3][0] && BoardGameArray?.[4][0]  && BoardGameArray?.[5][0]){
                    if(BoardGameArray?.[3][0] === BoardGameArray?.[4][0] && BoardGameArray?.[4][0] === BoardGameArray?.[5][0]){
                        arrname = BoardGameArray?.[3][0]
                        gameOver = true
                    }
                }

                if(BoardGameArray?.[0][0] && BoardGameArray?.[3][0] && BoardGameArray?.[6][0]){
                    if(BoardGameArray?.[0][0] === BoardGameArray?.[3][0] && BoardGameArray?.[3][0] === BoardGameArray?.[6][0]){
                        arrname = BoardGameArray?.[0][0]
                        gameOver = true
                    }
                }
                if(BoardGameArray?.[2][0] && BoardGameArray?.[4][0] && BoardGameArray?.[6][0]){
                    if(BoardGameArray?.[2][0] === BoardGameArray?.[4][0] && BoardGameArray?.[4][0] === BoardGameArray?.[6][0]){
                        arrname = BoardGameArray?.[2][0]
                        gameOver = true
                    }
                }

                if(BoardGameArray?.[1][0] && BoardGameArray?.[4][0] && BoardGameArray?.[7][0]){
                    if(BoardGameArray?.[1][0] === BoardGameArray?.[4][0] && BoardGameArray?.[4][0] === BoardGameArray?.[7][0]){
                        arrname = BoardGameArray?.[1][0]
                        gameOver = true
                    }
                }

                if(BoardGameArray?.[0][0] && BoardGameArray?.[4][0] && BoardGameArray?.[8][0]){
                    if(BoardGameArray?.[0][0] === BoardGameArray?.[4][0] && BoardGameArray?.[4][0] === BoardGameArray?.[8][0] ){
                        arrname = BoardGameArray?.[0][0]
                        gameOver = true
                    }
                }
                if(BoardGameArray?.[2][0] && BoardGameArray?.[5][0] && BoardGameArray?.[8][0]){
                    if(BoardGameArray?.[2][0] === BoardGameArray?.[5][0] && BoardGameArray?.[5][0] === BoardGameArray?.[8][0]){
                        arrname = BoardGameArray?.[2][2]
                        gameOver = true
                    }
                }
                if(BoardGameArray?.[6][0] && BoardGameArray?.[7][0] && BoardGameArray?.[8][0]){
                    if(BoardGameArray?.[6][0] === BoardGameArray?.[7][0] && BoardGameArray?.[7][0] === BoardGameArray?.[8][0]){
                        arrname = BoardGameArray?.[6][0]
                        gameOver = true
                    }
                }
  
    return gameOver

}

function Game(player1name,player2name){
    let createArray = (function(){
        let {player1Name , player2Name} = createGrid(player1name,player2name)
        return {player1Name,player2Name}
        })()   
        
//          function gameLogic(j,item){
//             let choice = ''
//             let choiceArray = []
//             let player1Points = 0
//             let player2Points = 0

//             let player1Name = createArray.player1Name
//             let player2Name = createArray.player2Name
//             let BoardGameArray = createArray.BoardGameArray

//             for(let i = 0; i < 1 ; i++){
//             for(let i = 1; i < 4; i++){
//                 alert(`This is round: ${i}`)
//                 BoardGameArray = [[],[],[],[],[],[],[],[],[],[]]
//                     for(let i = 1; i < 10; i++){  
//                           if(i % 2 === 0){
//                             alert(`It's ${player2Name} turn`)
//                            choice = 'O'
//                            item.textContent = 'O'
//                           choiceArray = [choice,player2Name]
//                           BoardGameArray.splice((j),1,choiceArray)
//                           decideWinner(BoardGameArray)
//                           let gameOver = decideWinner(BoardGameArray)
//                             if(gameOver === true){
//                                 ++player2Points
//                                 console.log(player2Points)
//                                   break
//                               }
//                            }
//                          else if(i % 2 !== 0){
//                             alert(`It's ${player1Name} turn`)
//                             item.textContent = 'X'
//                             choice = 'X'
//                             choiceArray = [choice,player1Name]
//                             BoardGameArray.splice((j),1,choiceArray)
//                             decideWinner(BoardGameArray)
//                             let gameOver = decideWinner(BoardGameArray)
//                               if(gameOver === true){
//                                    ++player1Points
//                                       console.log(player1Points)
//                                       break
//                                   }

//                            }
   
//                 if(player1Points > player2Points){
//                     console.log(`The winner is ${player1Name}`)
//                 }
//                 else if(player2Points > player2Points){
//                     console.log(`The winner is ${player2Name}`)
//                 }
//             }
//     }
//     if(player1Points > player2Points){
//                     console.log(`The final winner is ${player1Name}`)
//                 }
//                 else if(player2Points > player2Points){
//                     console.log(`The final winner is ${player2Name}`)
//                 }
    
// }

//         }

        

}


     function slices(player1Name,player2Name,BoardGameArray,j,count,item,clear,player1NameDisplay,player2NameDisplay){
        let choiceArray = []
        let player1Points = 0
        let player2Points = 0
        if(count % 2 === 0){
            player1NameDisplay.style.textShadow = '0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 20px #03fc49,0 0 20px #03fc49,0 0 10px #03fc49,0 0 30px #03fc49,0 0 5px #03fc49'
            player2NameDisplay.style.textShadow = '0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 20px #77d4e0,0 0 20px #77d4e0,0 0 10px #77d4e0,0 0 30px #77d4e0,0 0 5px #77d4e0'
            item.textContent = 'O'
            choiceArray = ['O',player2Name]
            BoardGameArray.splice(j,1,choiceArray)
        }
        else if(count % 2 !== 0){
            player2NameDisplay.style.textShadow = '0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 20px #03fc49,0 0 20px #03fc49,0 0 10px #03fc49,0 0 30px #03fc49,0 0 5px #03fc49'
            player1NameDisplay.style.textShadow = '0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 5px #9ad4db, 0 0 20px #77d4e0,0 0 20px #77d4e0,0 0 10px #77d4e0,0 0 30px #77d4e0,0 0 5px #77d4e0'
            item.textContent = 'X'
          choiceArray = ['X',player1Name]
          BoardGameArray.splice(j,1,choiceArray)
        }
        console.log(BoardGameArray)
        let winner = decideWinner(BoardGameArray)
        console.log(winner)
        if(winner === true){
            if (count % 2 === 0){
                player2NameDisplay.textContent = `${player2Name} is the winner!`

            }
            else{
                player1NameDisplay.textContent = `${player1Name} is the winner!`

            }
                clear()
            
            
        }
        console.log(BoardGameArray)
    }