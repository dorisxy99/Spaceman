/*----- constants -----*/
const wrongGuessLimit = 6;
const initialWordBank = ["Space", "Earth", "Solar", "Jupiter", "Mars","moon", "Neptune", "Mercury", "Pluto", "Saturn", "Venus", "asteroid", "astronaut", "comet", "star","constellation", "space", "planet", "galaxy", "lunar", "solar", "orbit", "sun", "universe", "sky", "telescope", "eclipse", "zodiac", "gravity", "Uranus", "ray", "air", "spacewalks", "spacecraft", "spacefaring", "spacetravel", "spaceflights", "spacewalking"];

/*----- app's state (variables) -----*/

let currentWord;
let correctGuesses = [];
let wrongGuesses = [];
let wordBank = initialWordBank;
let winCount = 0;

/*----- cached element references -----*/

const form  = document.getElementById('guessForm');
const hintMsg = document.getElementById('hint-msg');
const resetBtn = document.getElementById('reset-btn');
const remainingMsg = document.getElementById('remaining-msg');
const wrongMsg = document.getElementById('wrong-msg');
const lettersBox = document.getElementById('letters');



/*----- event listeners -----*/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = event.target.elements['guess'].value.toLowerCase();
    checkGuess(guess);
    event.target.elements['guess'].value = "";
    // handle the form data
});

resetBtn.addEventListener('click',(event) => {
    resetGame();
})


/*----- start the app -----*/
chooseWord();

/*----- functions -----*/

//*****************/
//Function chooseWord
//Desc: 
//*****************/
function chooseWord() {
    let difficulty = 3 + winCount;
    let filteredWords = wordBank.filter(word => word.length === difficulty);

    if(filteredWords.length === 0){
        winGame();
        return;
    }
    
    currentWord = filteredWords[Math.floor(Math.random()*filteredWords.length)].toLowerCase();
    console.log(currentWord)
    render();
}


//*****************/
//Function checkGuess
//Desc: 
//*****************/
function checkGuess(guess) {
    //check to see if the guess is already use
    if(correctGuesses.includes(guess) || wrongGuesses.includes(guess)){
        console.log("You've already guessed this letter");
        render();
        return;
    } 

    //check to see if the guessed letter is in the curren chosen word
    if(currentWord.includes(guess)) {
        correctGuesses.push(guess)
    } else{
        wrongGuesses.push(guess);
        if(wrongGuesses.length >= wrongGuessLimit) {
            looseGame();
            return;
        }
    } 

    //turn current word into array and de-dupe the letters to count the unique letters in the word
    let letters = currentWord.split("");
    let lettersUnique = letters.filter((letter, i) => letters.indexOf(letter) === i);

    //check if the correct guesses equal to the unique letters to determine if the word is complete
    if(correctGuesses.length === lettersUnique.length) {
       completeWord();
    }

    //
    render();
}

//*****************/
//Function createLetterBox
//Desc: 
//*****************/
function createLetterBox(letter) {
    let letterItem = document.createElement("div");
    letterItem.classList.add("letter-box");
   
    //check if the letter is contained in the correct guesses
    if(correctGuesses.includes(letter)){
        let textnode = document.createTextNode(letter);
        letterItem.appendChild(textnode);
    }

    lettersBox.appendChild(letterItem);
}

//*****************/
//Function 
//Desc: 
//*****************/
function render() {
    hintMsg.innerHTML = `The word has ${currentWord.length} letters.`;
    remainingMsg.innerHTML = `You have ${wrongGuessLimit - wrongGuesses.length} guesses left!`;
    wrongMsg.innerHTML = `Wrong guesses ${wrongGuesses.toString()}`;

    //hacky. change later
    lettersBox.innerHTML = "";

    let letters = currentWord.split("");
    for (i in letters) {
        createLetterBox(letters[i]);
    }
}

//*****************/
//Function animatedCharacter
//Desc: 
//*****************/
function animatedCharacter() {

}


//*****************/
//Function winGame
//Desc: 
//*****************/
function winGame() {
    console.log("Congrats! You win!!");
}

//*****************/
//Function looseGame
//Desc: 
//*****************/
function looseGame() {
    console.log("You sent me to the alien ship!!");
    resetGame();
}

//*****************/
//Function completeWord
//Desc: 
//*****************/
function completeWord() {
    //remove currentWord from wordBank
    wordBank = wordBank.filter(word => word !== currentWord);
    wrongGuesses = [];
    correctGuesses = [];
    winCount = ++winCount;
    chooseWord();
}

//*****************/
//Function 
//Desc: 
//*****************/
function resetGame() {
    correctGuesses = [];
    wrongGuesses = [];
    wordBank = initialWordBank;
    winCount = 0;
    chooseWord();
    render();
}

