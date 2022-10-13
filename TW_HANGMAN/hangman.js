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
        const wordLetters = [];
        const wordLetterSet = new Set;
        const wordAnswerBox = [];
        const choosenLetters = [];

        for (let wordLetter of constants.WORDS_TO_GUESS.level1[randomLevel1Word]){
            wordLetters.push(`${wordLetter}`.toUpperCase());
            wordLetterSet.add(`${wordLetter}`.toUpperCase());
            wordAnswerBox.push("_");
        }
        //Wortlänge
        const wordLength = wordLetters.length;
        
        console.log(wordLetters);
        console.log(wordLetterSet);
        console.log(wordLength);
        console.log(wordAnswerBox.join(" "));
        
        //Question & Answer Loop
        let answer1 = 0;
        while (answer1 === 0){ 
            const firstChoice = prompt("Pick a Letter: ");
                if (wordLetterSet.has(firstChoice.toUpperCase()) === true){
                console.log("GOOD CHOICE!");  
                choosenLetters.push(firstChoice);
                let wordIndex = wordLetters.indexOf(firstChoice.toUpperCase());
                console.log(wordIndex);
                while (wordIndex!=-1){
                wordIndex = wordLetters.indexOf(firstChoice.toUpperCase());   
                wordLetters.splice(wordIndex,1, 0)
                wordAnswerBox.splice(wordIndex, 1, `${firstChoice}`.toUpperCase());
                }
                
                console.log(wordAnswerBox.join(" "));
        
                
        
                } else if (firstChoice !== wordLetterSet && firstChoice !== choosenLetters){
                console.log(`Sorry, but ${firstChoice} IS NOT IN THE WORD`);
                choosenLetters.push(firstChoice);
                console.log(choosenLetters);
        
               } else if (firstChoice == choosenLetters){
                console.log(`YOU TRIED THIS LETTER ALREADY. THIS WERE YOUR CHOOSEN LETTERS: ${choosenLetters}`)
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