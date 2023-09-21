const prompt = require("prompt-sync")()

const target = Math.round(Math.random()*100)
//console.log(target);

let guesses = 0;

while(true){
    guesses++
    const  guess =Number( prompt("guess the number( 0-100): "))

    if(guess > target){
        console.log("you guess is too high")
    }else if(guess < target){
        console.log("you guess is too low")
    }else{
        console.log("correct")
        break
    }
}

console.log("you got it in",guesses,"guesses")

