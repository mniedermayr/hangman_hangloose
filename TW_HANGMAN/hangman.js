const { WORDS_TO_GUESS } = require('./constants');
const { HANGMAN_PICS } = require('./constants');
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

//weiter Functions (NOCH ZU BEARBEITEN)

function quit() {
        console.log("Sry to hear that! Goodbye!");
        process.exit();
    };
    
function howTo() {
        console.log("Welcome to Don't Hang The Coder! If you want to play a round. Go to the menu and press 1. You will have to pick a level. There are three different levels: easy,  average and hard. The level you pick determinates how difficult the word is, you have to guess and how many chances you get.");
        let back = prompt("Go back?(y/n): ")
        if (back === "y") {
            return;
        }
    };
        
function addAWord() {
    console.log("You want to add an own word to a level?")
    };

for (let figure of constants.MENU) {
        console.log(figure);
        if (menu === 0);
    };

let pick = prompt("You pick: ");
// SPIELER WÄHLT 1 : PLAY HANGMAN

if (pick = "1") { 
    guess ();
};

// 
function guess() {
    let level = prompt("Pick a difficulty (easy/average/hard): ")        
    while (level === "easy") {
        console.log("Welcome to our game of Don't Hang The Coder!\n" +
        "I am giving you empty dashes and you can guess the word I picked for you,\n" +
        "by typing one letter at a time.\n" +
        "But be careful, guess it right before you hang our coder!\n");
        console.log (constants.WORDS_TO_GUESS.level1[randomLevel1Word]);

        
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
              
    };     
};    

//SPIELER WÄHLT SPIEL BEENDEN

if (pick = "4") {
    quit ();
};

// SPIELER WÄHLT ERKLÄRUNGSTEXT

if (pick = "3") { 
    howTo ();
};


//SPIELER WÄHLT WORT HINZUFÜGEN

if (pick = "2") { 
    addAWord ();
};