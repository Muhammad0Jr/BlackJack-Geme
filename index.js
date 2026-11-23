let firstCard = Math.floor(Math.random() *(11-2+1))+2;
let secondCard = Math.floor(Math.random() * (11-2+1))+2;
let thirdCard = Math.floor(Math.random() * (11-2+1))+2;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEL = document.getElementById("message-el")
let sumC = document.getElementById("sum")
let cards = document.getElementById("cards")

function startGame() {
    renderGame()
    
}

function renderGame() {

    firstCard = Math.floor(Math.random() *(11-2+1))+2;
    secondCard = Math.floor(Math.random() * (11-2+1))+2;
    sum = firstCard + secondCard
    sumC.textContent = "Sum: " + sum
    cards.textContent = "Cards: " + firstCard + " & " + secondCard
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "WoHoo! you have won a BlackJack!"
    hasBlackJack = true
    } else {
    message = "You're out of the game!"
    isAlive = false
    }
    messageEL.textContent = message
    isAlive = true
    hasBlackJack = false
}

function newCard() { 
    if (isAlive) {
    thirdCard = Math.floor(Math.random() * (11-2+1))+2;
    sum = sum + thirdCard
    cards.textContent +=  " & " + thirdCard
    sumC.textContent = "Sum: " + sum
    } else if (hasBlackJack) {
    cards.textContent +=  " & " + thirdCard
    sumC.textContent = "Sum: " + sum
    messageEL.textContent = message
    }

    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "WoHoo! you have won a BlackJack!"
    hasBlackJack = true
    } else {
    message = "You're out of the game!"
    isAlive = false
    }
    messageEL.textContent = message
}

