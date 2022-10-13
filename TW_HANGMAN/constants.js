const HANGMAN_PICS = [
  "+---+\n" +
    "|   |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " /    |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " / \\  |\n" +
    "      |\n" +
    "=========",
];

// TODO: Fill this list with values about a certain topic
// you are passionate about: e.g. famous scientists, chess players, ...
const WORDS_TO_GUESS = {
  level1: ['coding','mentor','arrays'],
  level2: ['algorithm','operators','abstraction'],
  level3: ['ergonomics','specification','polymorphism']
}
const MENU = [" \n" +
" \n" +
" \n" +
" \n" +  
  "Don't Hang The Coder\n" +
" \n" +
" \n" + 
"Menu\n" +
"1. Play Hangman\n" +
"2. Add a new word\n" + 
"3. How to play\n" +
"4. Quit\n" +
HANGMAN_PICS[6]];

module.exports = {
  HANGMAN_PICS: HANGMAN_PICS,
  WORDS_TO_GUESS: WORDS_TO_GUESS,
  MENU: MENU,
};