
function BoardGame(boardGameEnteries){
    // const length = 8
    // let boardGameEnteries = new Array(length)
    // boardGameEnteries = returnedArray

        for(let i = 0; i < 9; i++){
        switch(i){
            case 2:
                if((boardGameEnteries[0][0] === 'X' || 'O') && (boardGameEnteries[2][0] === 'X' || 'O') && (boardGameEnteries[1][0] === 'X' || 'O')  ){
                    if ((boardGameEnteries[0][0] === boardGameEnteries[1][0]) && (boardGameEnteries[2][0] === boardGameEnteries[1][0])){
                              console.log(`${boardGameEnteries[0][1]} wins!`)
                              console.log("HELLOOOO")
                               i = 9
                }
            }
            
                break;
            case 5:
                if(boardGameEnteries[0][0] != undefined && boardGameEnteries[1][0] != undefined && boardGameEnteries[2][0] != undefined){
                          if ((boardGameEnteries[0][0] === boardGameEnteries[1][0]) && (boardGameEnteries[2][0] === boardGameEnteries[1][0])){
                               console.log(`${boardGameEnteries[0][1]} wins!`)
                                i = 9 
                }
            }
               else if(boardGameEnteries[3][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[5][0] != undefined){
                        if ((boardGameEnteries[3][0] === boardGameEnteries[4][0]) && (boardGameEnteries[5][0] === boardGameEnteries[4][0])){
                                 console.log(`${boardGameEnteries[3][1]} wins!`)
                                 i = 9
                }
            }
                break;
            case 6:
                if(boardGameEnteries[0][0] != undefined && boardGameEnteries[3][0] != undefined && boardGameEnteries[6][0] != undefined){
                        if ((boardGameEnteries[0][0] === boardGameEnteries[3][0]) && (boardGameEnteries[6][0] === boardGameEnteries[3][0])){
                                console.log(`${boardGameEnteries[0][1]} wins!`)
                                i = 9
                }
            }
                else if(boardGameEnteries[2][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[6][0] != undefined){
                        if ((boardGameEnteries[2][0] === boardGameEnteries[4][0]) && (boardGameEnteries[6][0] === boardGameEnteries[4][0])){
                               console.log(`${boardGameEnteries[2][1]} wins!`)
                                i = 9
                }
            }
                break;
            case 7:
                if(boardGameEnteries[1][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[7][0] != undefined){
                     if ((boardGameEnteries[1][0] === boardGameEnteries[4][0]) && (boardGameEnteries[7][0] === boardGameEnteries[4][0])){
                            console.log(`${boardGameEnteries[0][1]} wins!`)
                             i = 9
                }
            }
                else if(boardGameEnteries[2][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[7][0] != undefined){
                      if ((boardGameEnteries[2][0] === boardGameEnteries[4][0]) && (boardGameEnteries[7][0] === boardGameEnteries[4][0])){
                                     console.log(`${boardGameEnteries[0][2]} wins!`)
                                       i = 9
                }
            }
                break;
            case 8:
                if(boardGameEnteries[0][0] != undefined && boardGameEnteries[4][0] != undefined && boardGameEnteries[8][0] != undefined){
                        if ((boardGameEnteries[0][0] === boardGameEnteries[4][0]) && (boardGameEnteries[8][0] === boardGameEnteries[4][0])){
                              console.log(`${boardGameEnteries[0][1]} wins!`)
                               i = 9
                }
            }
                else if(boardGameEnteries[2][0] != undefined && boardGameEnteries[5][0] != undefined && boardGameEnteries[8][0] != undefined){

                          if ((boardGameEnteries[2][0] === boardGameEnteries[5][0]) && (boardGameEnteries[8][0] === boardGameEnteries[5][0])){
                               alert(`${boardGameEnteries[2][1]} wins!`)
                               i = 9
                }
            }
                else if(boardGameEnteries[6][0] != undefined && boardGameEnteries[7][0] != undefined && boardGameEnteries[8][0] != undefined){
                           if ((boardGameEnteries[6][0] === boardGameEnteries[7][0]) && (boardGameEnteries[8][0] === boardGameEnteries[7][0])){
                                 alert(`${boardGameEnteries[6][1]} wins!`)
                                  i = 9
                }
            }
                break;

            default:
                
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

        const boardGameEnteries = [[],[],[],[],[],[],[],[]]
        let playerInput = ''
        let player1Turn = false
        let player2Turn = true

        function eventListeners(xORo,isPlayingName){
            item1.addEventListener("click",()=>{
                item1P.textContent = xORo
                item1array = [xORo, isPlayingName]
                boardGameEnteries.splice(0,1,item1array)
            })

            item2.addEventListener("click",()=>{
                item2P.textContent = xORo
                item2array = [xORo, isPlayingName]
                boardGameEnteries.splice(1,1,item2array)
            })

            item3.addEventListener("click",()=>{
                item3P.textContent = xORo
                item3array = [xORo, isPlayingName]
                boardGameEnteries.splice(2,1,item3array)
            })

            item4.addEventListener("click",()=>{
                item4P.textContent = xORo
                item4array = [xORo, isPlayingName]
                boardGameEnteries.splice(3,1,item4array)
            })

            item5.addEventListener("click",()=>{
                item5P.textContent = xORo
                item5array = [xORo, isPlayingName]
                boardGameEnteries.splice(4,1,item5array)
            })

            item6.addEventListener("click",()=>{
                item6P.textContent = xORo
                item6array = [xORo, isPlayingName]
                boardGameEnteries.splice(5,1,item6array)
            })

            item7.addEventListener("click",()=>{
                item7P.textContent = xORo
                item7array = [xORo, isPlayingName]
                boardGameEnteries.splice(6,1,item7array)
            })

            item8.addEventListener("click",()=>{
                item8P.textContent = xORo
                item8array = [xORo, isPlayingName]
                boardGameEnteries.splice(7,1,item8array)
            })
            let item9Counter = 0
            item9.addEventListener("click",()=>{
                if(item9Counter === 0){
                    ++item9Counter
                item9P.textContent = xORo
                item9array = [xORo, isPlayingName]
                boardGameEnteries.splice(8,1,item9array)
                console.log(boardGameEnteries)
                }
                else{
                    console.log(boardGameEnteries)
                }
            })
            BoardGame(boardGameEnteries)

    }
        
            eventListeners('M','Juliette')
        
        
    })()
    })
}

domManipulation()








