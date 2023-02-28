//global variables
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
//DOM elements
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let startGame = document.querySelector("#start-btn")
let newCard = document.querySelector("#new-btn")
//objects
let player = {name: "Niku", chips: 1000}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//functions
startGame.addEventListener("click", function () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
});

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

newCard.addEventListener("click", function () {
    if (isAlive == true && hasBlackJack == false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
});