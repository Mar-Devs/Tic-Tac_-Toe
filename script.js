
function BoardGame(boardGameEnteries){

                if((boardGameEnteries[0][0] === ('X' || 'O')) && (boardGameEnteries[2][0] === ('X' || 'O')) && (boardGameEnteries[1][0] === ('X' || 'O'))  ){
                    if ((boardGameEnteries[0][0] === boardGameEnteries[1][0]) && (boardGameEnteries[2][0] === boardGameEnteries[1][0])){
                              console.log(`${boardGameEnteries[0][1]} wins!`)
                               winner()
                }
            }
            
                
                if(boardGameEnteries[0][0] != undefined && boardGameEnteries[1][0] != undefined && boardGameEnteries[2][0] != undefined){
                          if ((boardGameEnteries[0][0] === boardGameEnteries[1][0]) && (boardGameEnteries[2][0] === boardGameEnteries[1][0])){
                               console.log(`${boardGameEnteries[0][1]} wins!`)
                               winner()
                }
            }
               else if(boardGameEnteries[3][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[5][0] != undefined){
                        if ((boardGameEnteries[3][0] === boardGameEnteries[4][0]) && (boardGameEnteries[5][0] === boardGameEnteries[4][0])){
                                 console.log(`${boardGameEnteries[3][1]} wins!`)
                                 winner()
                }
            }
                
                if(boardGameEnteries[0][0] != undefined && boardGameEnteries[3][0] != undefined && boardGameEnteries[6][0] != undefined){
                        if ((boardGameEnteries[0][0] === boardGameEnteries[3][0]) && (boardGameEnteries[6][0] === boardGameEnteries[3][0])){
                                console.log(`${boardGameEnteries[0][1]} wins!`)
                                winner()
                }
            }
                else if(boardGameEnteries[2][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[6][0] != undefined){
                        if ((boardGameEnteries[2][0] === boardGameEnteries[4][0]) && (boardGameEnteries[6][0] === boardGameEnteries[4][0])){
                               console.log(`${boardGameEnteries[2][1]} wins!`)
                               winner()
                }
            }
               
                if(boardGameEnteries[1][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[7][0] != undefined){
                     if ((boardGameEnteries[1][0] === boardGameEnteries[4][0]) && (boardGameEnteries[7][0] === boardGameEnteries[4][0])){
                            console.log(`${boardGameEnteries[0][1]} wins!`)
                            winner()
                }
            }
                else if(boardGameEnteries[2][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[7][0] != undefined){
                      if ((boardGameEnteries[2][0] === boardGameEnteries[4][0]) && (boardGameEnteries[7][0] === boardGameEnteries[4][0])){
                                     console.log(`${boardGameEnteries[0][2]} wins!`)
                                     winner()
                }
            }
               
                if(boardGameEnteries[0][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[8][0] != undefined){
                        if ((boardGameEnteries[0][0] === boardGameEnteries[4][0]) && (boardGameEnteries[8][0] === boardGameEnteries[4][0])){
                              console.log(`${boardGameEnteries[0][1]} wins!`)
                              winner()
                }
            }
                else if(boardGameEnteries[2][0] != undefined && boardGameEnteries[5][0] != undefined && boardGameEnteries[8][0] != undefined){

                          if ((boardGameEnteries[2][0] === boardGameEnteries[5][0]) && (boardGameEnteries[8][0] === boardGameEnteries[5][0])){
                               winner()
                }
            }
                else if(boardGameEnteries[6][0] != undefined && boardGameEnteries[7][0] != undefined && boardGameEnteries[8][0] != undefined){
                           if ((boardGameEnteries[6][0] === boardGameEnteries[7][0]) && (boardGameEnteries[8][0] === boardGameEnteries[7][0])){
                                 winner()
                }
            }
              
        }
    



const domManipulation = function(){
    const landingPageContainer = document.querySelector(".landingPageContainer")
    const startGameBtn = document.querySelector(".startGame")
    const inputPlayer1 = document.querySelector(".player1name")
    const inputPlayer2 = document.querySelector(".player2name")
    let player1Name = ''
    let player2Name = ''


    startGameBtn.addEventListener("click",(event)=>{
        event.preventDefault()
        landingPageContainer.remove()

        player1Name = inputPlayer1.value
        player2Name = inputPlayer2.value
        console.log(`${player1Name} and ${player2Name}`)

        const createGrid = (function(){
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

        let boardGameEnteries = [[],[],[],[],[],[],[],[]]

        function eventListeners(){
            let xORo
            let isPlayingName
            let count = 0

            let item1Counter = 0
            item1.addEventListener("click",()=>{ 
                ++count
                if(item1Counter === 0){
                    ++item1Counter
                   if (count % 2 === 0){
                       item1P.textContent = 'O'
                       item1array = ['O', player2Name]
                       boardGameEnteries.splice(0,1,item1array)
                       console.log(boardGameEnteries)
                       BoardGame(boardGameEnteries)
                }
                else if(count % 2 !== 0){
                item1P.textContent = 'X'
                item1array = ['X', player1Name]
                boardGameEnteries.splice(0,1,item1array)
                console.log(boardGameEnteries)
                BoardGame(boardGameEnteries)
                }
            }
            })

            let item2Counter = 0
            item2.addEventListener("click",()=>{
                ++count
                if(item2Counter === 0){
                    ++item2Counter
                    if(count % 2 === 0){
                       item2P.textContent = 'O'
                       item2array = ['O', player2Name]
                       boardGameEnteries.splice(1,1,item2array)
                       BoardGame(boardGameEnteries)
                     }
                     else if(count % 2 !== 0){
                        item2P.textContent = 'X'
                        item2array = ['X', player1Name]
                        boardGameEnteries.splice(1,1,item2array)
                        BoardGame(boardGameEnteries)

                     }
            }
            })

            let item3Counter = 0
            item3.addEventListener("click",()=>{
                ++count
                if(item3Counter === 0){
                    ++item3Counter
                    if(count % 2 === 0){
                         item3P.textContent = 'O'
                         item3array = ['O', player2Name]
                         boardGameEnteries.splice(2,1,item3array)
                         BoardGame(boardGameEnteries)
                    }
                    else if(count % 2 !== 0){
                        item3P.textContent = 'X'
                         item3array = ['X', player1Name]
                         boardGameEnteries.splice(2,1,item3array)
                         BoardGame(boardGameEnteries)
                    }
                 
                }
            })

            let item4Counter = 0
            item4.addEventListener("click",()=>{
                ++count
                if(item4Counter === 0){
                    ++item4Counter
                    if(count % 2 === 0){
                       item4P.textContent = 'O'
                       item4array = ['O', player2Name]
                       boardGameEnteries.splice(3,1,item4array)
                       BoardGame(boardGameEnteries)
                    }
                    else if(count % 2 !== 0){
                       item4P.textContent = 'X'
                       item4array = ['X', player1Name]
                       boardGameEnteries.splice(3,1,item4array)
                       BoardGame(boardGameEnteries)
                    }
                }
            })

            let item5Counter = 0
            item5.addEventListener("click",()=>{
                ++count
                if(item5Counter === 0){
                    ++item5Counter
                    if(count % 2 === 0){
                      item5P.textContent = 'O'
                      item5array = ['O', player2Name]
                      boardGameEnteries.splice(4,1,item5array)
                      BoardGame(boardGameEnteries)
                    }
                    else if(count % 2 !== 0){
                      item5P.textContent = 'X'
                      item5array = ['X', player1Name]
                      boardGameEnteries.splice(4,1,item5array)
                      BoardGame(boardGameEnteries)
                    }
                }
            })

            let item6Counter = 0
            item6.addEventListener("click",()=>{
                ++count 
                if(item6Counter === 0){
                    ++item6Counter
                    if(count % 2 === 0){
                       item6P.textContent = 'O'
                       item6array = ['O', player2Name]
                       boardGameEnteries.splice(5,1,item6array)
                       BoardGame(boardGameEnteries)
                    }
                    else if(count % 2 !== 0){
                       item6P.textContent = 'X'
                       item6array = ['X', player1Name]
                       boardGameEnteries.splice(5,1,item6array)
                       BoardGame(boardGameEnteries)
                    }
                }
            })

            let item7Counter = 0
            item7.addEventListener("click",()=>{
                ++count
                if(item7Counter === 0){
                    ++item7Counter
                    if(count % 2 === 0){
                      item7P.textContent = 'O'
                      item7array = ['O', player2Name]
                      boardGameEnteries.splice(6,1,item7array)
                      BoardGame(boardGameEnteries)
                    }
                    else if (count % 2 !== 0){
                      item7P.textContent = 'X'
                      item7array = ['X', player1Name]
                      boardGameEnteries.splice(6,1,item7array)
                      BoardGame(boardGameEnteries)
                    }
                }
            })


            let item8Counter = 0
            item8.addEventListener("click",()=>{
                ++count
                if(item8Counter === 0){
                    ++item8Counter
                    if(count % 2 === 0){
                          item8P.textContent = 'O'
                          item8array = ['O', player2Name]
                          boardGameEnteries.splice(7,1,item8array)
                          BoardGame(boardGameEnteries)
                    }
                    else if(count % 2 !== 0){
                          item8P.textContent = 'X'
                          item8array = ['X', player1Name]
                          boardGameEnteries.splice(7,1,item8array)
                          BoardGame(boardGameEnteries)
                    }
                }
            })
            let item9Counter = 0
            item9.addEventListener("click",()=>{
                ++count
                if(item9Counter === 0){
                    ++item9Counter
                    if(count % 2 === 0){
                        item9P.textContent = 'O'
                        item9array = ['O', player2Name]
                        boardGameEnteries.splice(8,1,item9array)
                        BoardGame(boardGameEnteries)
                      }
                   else if(count % 2 !== 0){
                        item9P.textContent = 'O'
                        item9array = ['O', player2Name]
                        boardGameEnteries.splice(8,1,item9array)
                        BoardGame(boardGameEnteries)
                }
            }
            })

            createGameBtn.addEventListener("click",()=>{
                boardGameEnteries = []
                item1P.textContent = ''
                item2P.textContent = ''
                item3P.textContent = ''
                item4P.textContent = ''
                item5P.textContent = ''
                item6P.textContent = ''
                item7P.textContent = ''
                item8P.textContent = ''
                item9P.textContent = ''
                count = 0
                item1Counter = 0
                item2Counter = 0
                item3Counter = 0
                item4Counter = 0
                item5Counter = 0
                item6Counter = 0
                item7Counter = 0
                item8Counter = 0
                item9Counter = 0

            })

    }
        
            
        let playerInput = ''
        let player1Turn = false
        let player2Turn = true

        
        eventListeners()
        
        
    })()
    })
}

domManipulation()








