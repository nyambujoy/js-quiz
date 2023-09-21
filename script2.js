const prompt = require("prompt-sync")()

let wins=0;
let loses=0;
let ties=0
while(true){
    const playerChoice = prompt("please pick rock ,paper or scissors or( q to quit): ")
    if (playerChoice.toLowerCase() === "q"){
        break;
    }
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        console.log("please insert valid option")
        continue;//if the user doesnt we start from the top
    }

    const choices=["rock","paper","scissors"]
    const randomIndex=Math.round (Math.random() *2 )
    ComputerChoice = choices[randomIndex]

    console.log("the computer chose",ComputerChoice,)

    if (ComputerChoice === playerChoice){
        console.log("draw")
        ties++
    }else if((playerChoice==="paper" && ComputerChoice ==="rock") ||
    (playerChoice==="scissors" && ComputerChoice === "paper")||
    (playerChoice==="rock" && ComputerChoice === "scissors")){
        console.log("you won!")
        wins++
    }else{
        console.log("you lost")
        loses++
    }
}

console.log("wins:",wins,"ties:",ties,"loses:",loses,)