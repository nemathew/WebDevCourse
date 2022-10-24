
let max = parseInt(prompt("Enter a max number: "));
while(!max){
    max = parseInt(prompt("Not a valid number, please enter a new max number: "));
}

console.log(max)

const secret_num = Math.floor(Math.random() * max) + 1;
console.log(`Secret num: ${secret_num}`)

let counter = 1;
let guess = parseInt(prompt("Enter a guess: "));
while(guess !== secret_num){
    if (guess > secret_num){   
        guess = parseInt(prompt("Too High, guess again"));
        counter++
    }
    else if (guess < secret_num){
        guess = parseInt(prompt("Too Low, guess again"));
        counter++
    }
}
console.log(`Yay, you guessed the secret_num correctly! It took you ${counter} guesses`)
