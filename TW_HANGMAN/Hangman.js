const prompt = require("prompt-sync")();
const constants = require('./constants');

// Start Arrays und Sets
let choosenWord = "Mississippi";

let wordLetters = [];
let wordLetterSet = new Set;
let wordAnswerBox = [];

for (let wordLetter of choosenWord){
    wordLetters.push(`${wordLetter}`.toUpperCase());
    wordLetterSet.add(`${wordLetter}`.toUpperCase());
    wordAnswerBox.push("_");
}

//Question & Answer Loop
let answerLoop = 0;
let rightLetterCounter = 0;
let wrongLetterCounter = 0;
let wordIndex = [];

while (answerLoop === 0){ 
const firstChoise = prompt("Choose your Lettter").toUpperCase();
let choosenLetters = new Set;

    if (wordLetterSet.has(firstChoise) && !choosenLetters.has(firstChoise)){
        choosenLetters.add(firstChoise);
        rightLetterCounter++;
        
        while (wordIndex!==-1){
        wordIndex = wordLetters.indexOf(firstChoise);   
        wordLetters.splice(wordIndex, 1, 0);
        wordAnswerBox.splice(wordIndex, 1, firstChoise);
        }

        console.log("GOOD CHOISE!");  
        console.log(wordAnswerBox.join(" "));
        
    } else if (firstChoise !== wordLetterSet && !choosenLetters.has(firstChoise)){
        choosenLetters.add(firstChoise);
        wrongLetterCounter++;

        console.log(`WRONG ${firstChoise} IS NOT IN THE WORD`);
        console.log(choosenLetters);

    } else if (choosenLetters.has(firstChoise)){
        console.log("ALLREADY ENTERED:"); 
        console.log(choosenLetters);
    }   

    if (rightLetterCounter===wordLetterSet.size){
        console.log("WINNER");
        answerLoop = 1;
    }

    switch(wrongLetterCounter){
        case 1:
            console.log("LIVES: 9/10");
            break;
        case 2:
            console.log("LIVES: 8/10");
            break;
        case 3:
            console.log("LIVES: 7/10");
            break;
        case 4:
            console.log("LIVES: 6/10");
            break;
        case 5:
            console.log("LIVES: 5/10");
            break;
        case 6:
            console.log("LIVES: 4/10");
            break;
    }
}
