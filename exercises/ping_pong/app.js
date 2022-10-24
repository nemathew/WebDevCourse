let p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}

let p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}

const resetButton = document.querySelector('#reset')
let selectWinScore = document.querySelector('#playto')

let isGameOver = false
let winningScore = parseInt(selectWinScore.value)

function updateScore(scoringPlayer, otherPlayer){
        scoringPlayer.score += 1
        if (scoringPlayer.score === winningScore) {
            isGameOver = true
            scoringPlayer.display.classList.add('has-text-success')
            otherPlayer.display.classList.add('has-text-danger')
            scoringPlayer.button.disabled = true
            otherPlayer.button.disabled = true
        }
        scoringPlayer.display.textContent = scoringPlayer.score
}

function resetGame(){
    isGameOver = false

    for (let p of [p1, p2]){
        p.score = 0
        p.display.textContent = p.score
        p.button.disabled = false
        p.display.classList.remove('has-text-success', 'has-text-danger')
    }
}

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        updateScore(p1, p2)
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        updateScore(p2, p1)
    }
})

selectWinScore.addEventListener('change', () => {
    winningScore = parseInt(selectWinScore.value)
    resetGame()
})

resetButton.addEventListener('click', resetGame)
