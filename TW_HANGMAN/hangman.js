const { WORDS_TO_GUESS } = require('./constants');
const { HANGMAN_PICS } = require('./constants');
const { HANGMAN_LOGO } = require('./constants');

const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

let menu = 0;

// random Words ausspucken

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min; 
};
let randomLevel1Word = getRndInteger(0, constants.WORDS_TO_GUESS.level1.length-1);
let randomLevel2Word = getRndInteger(0, constants.WORDS_TO_GUESS.level2.length-1);
let randomLevel3Word = getRndInteger(0, constants.WORDS_TO_GUESS.level3.length-1);

// MENU LOOP

    while (menu=== 0) {
        console.log(constants.HANGMAN_LOGO);
        for (let figure of constants.MENU) {
                console.log(figure);
            };
        let pick = prompt("You pick: ");
            if (pick === "1") { 
                guess ();
            };
            if (pick === "2") { 
                addAWord ();
            };
            if (pick === "3") { 
                howTo ();
            };
            if (pick === "4") {
                quit ();
            };

        };

//weiter Functions (NOCH ZU BEARBEITEN)
// FUNKTIONEN: QUIT, HOW TO, ADD A WORD, GUESS

function quit() {
        console.log(" \n" +  
        " \n" +  
        " \n" +  
        "Sry to hear that! Goodbye!" +
        " \n" +  
        " \n" +  
        " \n");
        process.exit();
    };
    
function howTo() {
        console.log(" \n" + 
            "Welcome to Don't Hang The Coder! \n" +
            "If you want to play a round go back to the menu and press 1. \n" +
            "You will have to pick a level. There are three different levels: \n" +
            "easy, average & hard. The level you pick determinates how difficult \n" +
            "the word is, you have to guess. That's the most important rules. \n" +
            "We hope you are going to enjoy our game! Good Luck! \n" +
            " \n" +
            " \n");
        let back = prompt("Go back?(y/n): ")
        if (back === "y") {
            return;
        }
        if (back === "n") {
            console.log(" \n" + 
            " \n" + 
            "Don't think about it too much. Just start a round!" +
            " \n");
        let back2 = prompt("Go back? (y):" )
            if (back2 === "y") {
                return;
            };
        };
    };

function addAWord() {
    let question = prompt("You want to add an own word to a level? (y/n)");
    if (question === "y") {
        let LevelToAdd = prompt("To which Level would you like to add a new word? (1/2/3) ");
        if (LevelToAdd === "1") { 
            let newWord = prompt("Which word would you like to add: ")
            constants.WORDS_TO_GUESS.level1.push(newWord);
            console.log(constants.WORDS_TO_GUESS.level1);
            console.log("Thank you!")
        };
        if (LevelToAdd === "2") { 
            let newWord = prompt("Which word would you like to add: ")
            constants.WORDS_TO_GUESS.level2.push(newWord);
            console.log(constants.WORDS_TO_GUESS.level2);
            console.log("Thank you!")
        };
        if (LevelToAdd === "3") { 
            let newWord = prompt("Which word would you like to add: ")
            constants.WORDS_TO_GUESS.level3.push(newWord);
            console.log(constants.WORDS_TO_GUESS.level3);
            console.log("Thank you!")
        };
    } 
    if (question === "n") {
        console.log("Ok, let me bring you back then!");  
    };
    };

// SPIELER WÄHLT 1 : PLAY HANGMAN

 
function guess() {
    let level = prompt("Pick a difficulty (easy/average/hard): ")        
    while (level === "easy") {
        console.log("Welcome to our game of Don't Hang The Coder!\n" +
        "I am giving you empty dashes and you can guess the word I picked for you,\n" +
        "by typing one letter at a time.\n" +
        "But be careful, guess it right before you hang our coder!\n");
        console.log (constants.WORDS_TO_GUESS.level1[randomLevel1Word]);

        // Start Arrays und Sets
        
        let wordLetters = [];
        let wordLetterSet = new Set;
        let wordAnswerBox = [];
        
        for (let wordLetter of constants.WORDS_TO_GUESS.level1[randomLevel1Word]){
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
        const firstChoise = prompt("Pick a Letter: ").toUpperCase();
        let choosenLetters = new Set;
        
            if (wordLetterSet.has(firstChoise) && !choosenLetters.has(firstChoise)){
                choosenLetters.add(firstChoise);
                rightLetterCounter++;
                
                while (wordIndex!==-1){
                wordIndex = wordLetters.indexOf(firstChoise.toUpperCase());   
                wordLetters.splice(wordIndex, 1, 0);
                wordAnswerBox.splice(wordIndex, 1, `${firstChoise}`.toUpperCase());
                };
        
                console.log("GOOD CHOICE!");  
                console.log(wordAnswerBox.join(" "));
                
            } else if (firstChoise !== wordLetterSet && !choosenLetters.has(firstChoise)){
                choosenLetters.add(firstChoise);
                wrongLetterCounter++;
        
                console.log(`Sorry, but ${firstChoise} is not in the Word.`);
                console.log(`The letters you already tried are: ${choosenLetters}`);
        
            } else if (choosenLetters.has(firstChoise)){
                console.log("You already entered this one."); 
                console.log(`The letters you already tried are: ${choosenLetters}`);
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
              
    };     
};    