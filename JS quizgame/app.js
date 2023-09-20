//quiz game
//loads in this module
const prompt = require("prompt-sync")()
console.log("welcome to my quiz")
let score = 0;
const t0talQuestions = 5
const answer1 = prompt("what's my favourite movie:  ").toLowerCase()
if (answer1 == "the hangover"){
    console.log("yess")
     score++
}else{
    console.log("Noo")
}
const answer2 = prompt("what's my favourite food:  ").toLowerCase()
if (answer2 == "pizza"){
    console.log("yess")
    score++
}else{
    console.log("Noo")
}
const answer3 = prompt("what's my favourite cheese:  ").toLowerCase()
if (answer3 == "mozarella"){
    console.log("yess")
     score++
}else{
    console.log("Noo")
}
const answer4 = prompt("what's my favourite color:  ").toLowerCase()
if (answer4 == "pink"){
    console.log("yess")
     score++
}else{
    console.log("Noo")
}
const answer5 = prompt("what's my dream holiday:  ").toLowerCase()
if (answer5 == "zanzibar"){
    console.log("yess")
     score++
}else{
    console.log("Noo")
}

console.log("you got ",score,"right")
console.log("your score",Math.round((score/t0talQuestions)*100),"correct")