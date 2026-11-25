function getRandom() {
    let random = Math.floor(Math.random()*13)+1;
    if (random === 1) {
        return 11
    }   else if (random > 10) {
        return 10
    }   else {
        return random
    }
}


let player = {
    name: "John Doe",
    chips: 195
}
let card = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEL = document.getElementById("message-el")
let sumC = document.getElementById("sum")
let cards = document.getElementById("cards")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    if (player.chips >= 13) {
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandom() 
    let secondCard = getRandom()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    } else {
    messageEL.textContent ="Not enough chips to start a round!"
    }
}

function renderGame() {
    sumC.textContent = "Sum: " + sum
    cards.textContent = "Cards: " + card.join(" & ")
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    isAlive = true
    } else if (sum === 21) {
    message = "WoHoo! you have won a BlackJack!"
    player.chips = player.chips + 39
    hasBlackJack = true
    isAlive = false
    } else {
    message = "You're out of the game!"
    isAlive = false
    player.chips = player.chips - 13
    }
    messageEL.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips

}

function newCard() { 
    if (isAlive && !hasBlackJack && player.chips >= 13) {
    let drawnCard = getRandom()
    card.push(drawnCard)
    sum = sum + drawnCard
    renderGame()}
}

function newGame() {
    card = []
    sum = 0
    player.chips = 195
    isAlive = false
    hasBlackJack = false

    messageEL.textContent = "Want to play a round?"
    cards.textContent = "Cards: "
    sumC.textContent = "Sum: "
    playerEl.textContent = player.name + ": $" + player.chips
}