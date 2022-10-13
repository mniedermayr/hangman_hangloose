const constants = require('./constants');
const { WORDS_TO_GUESS } = require('./constants');
const { HANGMAN_PICS } = require('./constants');
const { HANGMAN_LOGO } = require('./constants');
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
            " \n" +
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
            console.log(" \n" +
            " \n" +
            "Thank you! I added your Word to this Level.\n" +
            " \n" +
            " \n" +
            " \n" +
            " \n");
        };
        if (LevelToAdd === "2") { 
            let newWord = prompt("Which word would you like to add: ")
            constants.WORDS_TO_GUESS.level2.push(newWord);
            console.log(" \n" +
            " \n" +
            "Thank you! I added your Word to this Level.\n" +
            " \n" +
            " \n" +
            " \n" +
            " \n");
        };
        if (LevelToAdd === "3") { 
            let newWord = prompt("Which word would you like to add: ")
            constants.WORDS_TO_GUESS.level3.push(newWord);
            console.log( " \n" +
            " \n" +
            "Thank you! I added your Word to this Level." +
            " \n" +
            " \n" +
            " \n")
        };
    };
    if (question === "n") {
        console.log("Ok, let me bring you back then!");  
    };
};

// SPIELER WÄHLT EIN LEVEL UND SPIELT HANGMAN:
// LEVEL 1
 
function guess() {
    let level = prompt("Pick a difficulty (easy/average/hard): ")        
    while (level === "easy") {
        console.log(" \n" +
        " \n" +
        "Welcome to our game of Don't Hang The Coder!\n" +
        "I am giving you empty dashes and you can guess the word I picked for you,\n" +
        "by typing one letter at a time.\n" +
        "But be careful, guess it right before you hang our coder!\n" +
        " \n" +
        " \n");

        // Start Arrays und Sets
        
        let wordLetters = [];
        let wordLetterSet = new Set;
        let wordAnswerBox = [];
        
        for (let wordLetter of constants.WORDS_TO_GUESS.level1[randomLevel1Word]){
            wordLetters.push(`${wordLetter}`.toUpperCase());
            wordLetterSet.add(`${wordLetter}`.toUpperCase());
            wordAnswerBox.push("_");
        };
        
        //Question & Answer Loop
        let answerLoop = 0;
        let rightLetterCounter = 0;
        let wrongLetterCounter = 0;
        let choosenLetters = new Set;
        
        while (answerLoop === 0){ 
        const firstChoice = prompt(" \n" +
        " \n" +
        "Pick a Letter: ").toUpperCase();
       

            if (wordLetterSet.has(firstChoice) && !choosenLetters.has(firstChoice)){
                choosenLetters.add(firstChoice);
                rightLetterCounter++;
                let outputWord = constants.WORDS_TO_GUESS.level1[randomLevel1Word];
               for (var i= 0; i< outputWord.length; i++ ) {
                    if (!choosenLetters.has(outputWord[i].toUpperCase())) {
                        outputWord = outputWord.replace(outputWord[i], "_");
                    };
                };
                console.log(" \n"+
                "GOOD CHOICE!" +
                " \n" +
                " \n" +
                " \n");  
                console.log(outputWord);
        
            } else if (!choosenLetters.has(firstChoice)) {
                choosenLetters.add(firstChoice);
                wrongLetterCounter++;
                console.log(" \n" +
                "Sorry, but \n" + 
                `${firstChoice}` + " is not in the Word.\n" +
                " \n"+
                " \n"+
                " \n");
        
            } else if (choosenLetters.has(firstChoice)){
                console.log( " \n"+
                " \n"+
                " \n"+
                "You already entered this one." +
                " \n"); 
            };   
        
            if (rightLetterCounter===wordLetterSet.size){
                console.log(" \n" +
                " \n" +
                "YOU DID IT! \n" +
                " \n" +
                " \n" +
                "CONGRATZ! \n"+
                " \n"+
                " \n");
                answerLoop = 1;
                return;
            };
        
            switch(wrongLetterCounter){
                case 1:
                    console.log(constants.HANGMAN_PICS[0]);
                    console.log(" \n" +
                    "LIVES: 9/10");
                    break;
                case 2:
                    console.log(constants.HANGMAN_PICS[1]);
                    console.log(" \n" +
                    "LIVES: 8/10");
                    break;
                case 3:
                    console.log(constants.HANGMAN_PICS[2]);
                    console.log(" \n" +
                    "LIVES: 7/10");
                    break;
                case 4:
                    console.log(constants.HANGMAN_PICS[3]);
                    console.log(" \n" +
                    "LIVES: 6/10");
                    break;
                case 5:
                    console.log(constants.HANGMAN_PICS[4]);
                    console.log(" \n" +
                    "LIVES: 5/10");
                    break;
                case 6:
                    console.log(constants.HANGMAN_PICS[5]);
                    console.log(" \n" +
                    "LIVES: 4/10");
                    break;
                case 7:
                    console.log(constants.HANGMAN_PICS[6]);
                    console.log(" \n" +
                    "LIVES: 3/10");
                    break;
                case 8:
                    console.log(constants.HANGMAN_PICS[7]);
                    console.log(" \n" +
                    "LIVES: 2/10");
                    break;
                case 9:
                    console.log(constants.HANGMAN_PICS[8]);
                    console.log(" \n" +
                    "LIVES: 1/10");
                    break;
                case 10:
                    console.log(constants.HANGMAN_PICS[9]);
                    console.log(" \n" +
                    "LIVES: 0/10 \n" +
                    "Oh no! You hanged the Coder! \n" +
                    " \n" +
                    "Better luck next time! \n" +
                    " \n" +
                    " \n");
                    return;
            };
        };      
    };  
    // LEVEL 2:

    while (level === "average") {
        console.log(" \n" +
        " \n" +
        "Welcome to our game of Don't Hang The Coder!\n" +
        "I am giving you empty dashes and you can guess the word I picked for you,\n" +
        "by typing one letter at a time.\n" +
        "But be careful, guess it right before you hang our coder!\n" +
        " \n" +
        " \n");

        // Start Arrays und Sets
        
        let word2Letters = [];
        let word2LetterSet = new Set;
        let word2AnswerBox = [];
        
        for (let word2Letter of constants.WORDS_TO_GUESS.level2[randomLevel2Word]){
            word2Letters.push(`${word2Letter}`.toUpperCase());
            word2LetterSet.add(`${word2Letter}`.toUpperCase());
            word2AnswerBox.push("_");
        };
        
        //Question & Answer Loop
        let answerLoop2 = 0;
        let rightLetterCounter2 = 0;
        let wrongLetterCounter2 = 0;
        let choosenLetters2 = new Set;

        while (answerLoop2 === 0){ 
        const firstChoice2 = prompt(" \n" +
        " \n" +
        "Pick a Letter: ").toUpperCase();
        
        if (word2LetterSet.has(firstChoice2) && !choosenLetters2.has(firstChoice2)){
            choosenLetters2.add(firstChoice2);
            rightLetterCounter2++;
            let outputWord2 = constants.WORDS_TO_GUESS.level2[randomLevel2Word];
           for (var i= 0; i< outputWord2.length; i++ ) {
                if (!choosenLetters2.has(outputWord2[i].toUpperCase())) {
                    outputWord2 = outputWord2.replace(outputWord2[i], "_");
                };
            };
            console.log(" \n"+
            "GOOD CHOICE!" +
            " \n" +
            " \n" +
            " \n");  
            console.log(outputWord2);
                
            } else if (!choosenLetters2.has(firstChoice2)){
                choosenLetters2.add(firstChoice2);
                wrongLetterCounter2++;
                console.log(" \n" +
                "Sorry, but \n" + 
                `${firstChoice2}` + " is not in the Word.\n" +
                " \n"+
                " \n"+
                " \n");
        
            } else if (choosenLetters2.has(firstChoice2)){
                console.log( " \n"+
                " \n"+
                " \n"+
                "You already entered this one." +
                " \n"); 
            }   
        
            if (rightLetterCounter2===word2LetterSet.size){
                console.log(" \n" +
                " \n" +
                "YOU DID IT! \n" +
                " \n" +
                " \n" +
                " \n" +
                "CONGRATZ! \n"+
                " \n"+
                " \n");
                answerLoop = 1;
                return;
            };
        
            switch(wrongLetterCounter2){
                case 1:
                    console.log(constants.HANGMAN_PICS[0]);
                    console.log(" \n" +
                    "LIVES: 9/10");
                    break;
                case 2:
                    console.log(constants.HANGMAN_PICS[1]);
                    console.log(" \n" +
                    "LIVES: 8/10");
                    break;
                case 3:
                    console.log(constants.HANGMAN_PICS[2]);
                    console.log(" \n" +
                    "LIVES: 7/10");
                    break;
                case 4:
                    console.log(constants.HANGMAN_PICS[3]);
                    console.log(" \n" +
                    "LIVES: 6/10");
                    break;
                case 5:
                    console.log(constants.HANGMAN_PICS[4]);
                    console.log(" \n" +
                    "LIVES: 5/10");
                    break;
                case 6:
                    console.log(constants.HANGMAN_PICS[5]);
                    console.log(" \n" +
                    "LIVES: 4/10");
                    break;
                case 7:
                    console.log(constants.HANGMAN_PICS[6]);
                    console.log(" \n" +
                    "LIVES: 3/10");
                    break;
                case 8:
                    console.log(constants.HANGMAN_PICS[7]);
                    console.log(" \n" +
                    "LIVES: 2/10");
                    break;
                case 9:
                    console.log(constants.HANGMAN_PICS[8]);
                    console.log(" \n" +
                    "LIVES: 1/10");
                    break;
                case 10:
                    console.log(constants.HANGMAN_PICS[9]);
                    console.log(" \n" +
                    "LIVES: 0/10 \n" +
                    "Oh no! You hanged the Coder! \n" +
                    "Better luck next time! \n" +
                    " \n" +
                    " \n");
                    return;
            };
        };
    };       

    //LEVEL 3 same

    while (level === "hard") {
        console.log(" \n" +
        " \n" +
        "Welcome to our game of Don't Hang The Coder!\n" +
        "I am giving you empty dashes and you can guess the word I picked for you,\n" +
        "by typing one letter at a time.\n" +
        "But be careful, guess it right before you hang our coder!\n" +
        " \n" +
        " \n");
        
        let word3Letters = [];
        let word3LetterSet = new Set;
        let word3AnswerBox = [];
        
        for (let word3Letter of constants.WORDS_TO_GUESS.level3[randomLevel3Word]){
            word3Letters.push(`${word3Letter}`.toUpperCase());
            word3LetterSet.add(`${word3Letter}`.toUpperCase());
            word3AnswerBox.push("_");
        };
        
        let answerLoop3 = 0;
        let rightLetterCounter3 = 0;
        let wrongLetterCounter3 = 0;
        let choosenLetters3 = new Set;
        
        while (answerLoop3 === 0){ 
        const firstChoice3 = prompt(" \n" +
        " \n" +
        "Pick a Letter: ").toUpperCase();
        
        if (word3LetterSet.has(firstChoice3) && !choosenLetters3.has(firstChoice3)){
            choosenLetters3.add(firstChoice3);
            rightLetterCounter3++;
            let outputWord3 = constants.WORDS_TO_GUESS.level3[randomLevel3Word];
           for (var i= 0; i< outputWord3.length; i++ ) {
                if (!choosenLetters3.has(outputWord3[i].toUpperCase())) {
                    outputWord3 = outputWord3.replace(outputWord3[i], "_");
                };
            };
            console.log(" \n"+
            "GOOD CHOICE!" +
            " \n" +
            " \n" +
            " \n");  
            console.log(outputWord3);
                
            } else if (!choosenLetters3.has(firstChoice3)){
                choosenLetters3.add(firstChoice3);
                wrongLetterCounter3++;
                console.log(" \n" +
                "Sorry, but \n" + 
                `${firstChoice3}` + " is not in the Word.\n" +
                " \n"+
                " \n"+
                " \n");
        
            } else if (choosenLetters3.has(firstChoice3)){
                console.log( " \n"+
                " \n"+
                " \n"+
                "You already entered this one." +
                " \n"); 
            };   
        
            if (rightLetterCounter3 === word3LetterSet.size){
                console.log(" \n" +
                " \n" +
                "YOU DID IT! \n" +
                " \n" +
                " \n" +
                "CONGRATZ! \n"+
                " \n"+
                " \n");
                answerLoop3 = 1;
                return;
            };
        
            switch(wrongLetterCounter3) {
                case 1:
                    console.log(constants.HANGMAN_PICS[0]);
                    console.log(" \n" +
                    "LIVES: 9/10");
                    break;
                case 2:
                    console.log(constants.HANGMAN_PICS[1]);
                    console.log(" \n" +
                    "LIVES: 8/10");
                    break;
                case 3:
                    console.log(constants.HANGMAN_PICS[2]);
                    console.log(" \n" +
                    "LIVES: 7/10");
                    break;
                case 4:
                    console.log(constants.HANGMAN_PICS[3]);
                    console.log(" \n" +
                    "LIVES: 6/10");
                    break;
                case 5:
                    console.log(constants.HANGMAN_PICS[4]);
                    console.log(" \n" +
                    "LIVES: 5/10");
                    break;
                case 6:
                    console.log(constants.HANGMAN_PICS[5]);
                    console.log(" \n" +
                    "LIVES: 4/10");
                    break;
                case 7:
                    console.log(constants.HANGMAN_PICS[6]);
                    console.log(" \n" +
                    "LIVES: 3/10");
                    break;
                case 8:
                    console.log(constants.HANGMAN_PICS[7]);
                    console.log(" \n" +
                    "LIVES: 2/10");
                    break;
                case 9:
                    console.log(constants.HANGMAN_PICS[8]);
                    console.log(" \n" +
                    "LIVES: 1/10");
                    break;
                case 10:
                    console.log(constants.HANGMAN_PICS[9]);
                    console.log(" \n" +
                    "LIVES: 0/10 \n" +
                    "Oh no! You hanged the Coder! \n" +
                    " \n" +
                    "Better luck next time! \n" +
                    " \n" +
                    " \n");
                    return;
            };
        };
    };       
}; 