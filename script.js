
const Player = (function() {
    let Player1Name = ''
    let Player2Name = ''

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
                player1Turn = true
                let index0 = prompt(`It's ${Player.Player1Name}'s turn`)
                let index0Move = [index0, Player.Player1Name]
                boardGameEnteries.push(index0Move)
                break;
            case 1:
                player2Turn = true
                let index1 = prompt(`It's ${Player.Player2Name}'s turn`)
                let index1Move = [index1, Player.Player2Name]
                boardGameEnteries.push(index1Move)
                break;
            case 2:
                player1Turn = true
                let index2 = prompt((`It's ${Player.Player1Name}'s turn`))
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

        item1.addEventListener("click",()=>{
               if(player1Turn === true){
                item1P.textContent = 'X'
                boardGameEnteries.splice(0)
                }
        })


        const item2 = document.createElement("div")
        const item2P = document.createElement("p")
        item2.appendChild(item2P)
        item2.className = 'item'
        item2.setAttribute('id','item2')
        boardGame.appendChild(item2)

        item2.addEventListener("click",()=>{
            if(player1Turn === true){
                item2P.textContent = 'X'
            }
            else if(player2Turn === true){
                item2P.textContent = 'O'
            }
        })

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
        item1.appendChild(item9P)
        item9.className = 'item'
        item9.setAttribute('id','item9')
        boardGame.appendChild(item9)
    })()
    })
}

domManipulation()



