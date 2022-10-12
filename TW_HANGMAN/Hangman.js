const prompt = require("prompt-sync")();

//Buchstaben Array erstellen
//Buchstaben Set erstellen
let choosenWord = "Mississippi";

const wordLetters = [];
const wordLetterSet = new Set;
const wordAnswerBox = [];
const choosenLetters = [];

for (let wordLetter of choosenWord){
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
    const firstChoise = prompt("Choose your Lettter");
        if (wordLetterSet.has(firstChoise.toUpperCase()) === true){
        console.log("GOOD CHOISE!");  
        choosenLetters.push(firstChoise);
        let wordIndex = wordLetters.indexOf(firstChoise.toUpperCase());
        console.log(wordIndex);
        while (wordIndex!=-1){
        wordIndex = wordLetters.indexOf(firstChoise.toUpperCase());   
        wordLetters.splice(wordIndex,1, 0 )
        wordAnswerBox.splice(wordIndex, 1, `${firstChoise}`.toUpperCase());

        }
        
        console.log(wordAnswerBox.join(" "));

        

        } else if (firstChoise !== wordLetterSet && firstChoise !== choosenLetters){
        console.log(`WRONG ${firstChoise} IS NOT IN THE WORD`);
        choosenLetters.push(firstChoise);
        console.log(choosenLetters);

       } else if (firstChoise == choosenLetters){
        console.log(`YOU TRIED THIS LETTER ALREADY. THIS WAS YOUR CHOOSEN LETTERS: ${choosenLetters}`)
       }
    }        


