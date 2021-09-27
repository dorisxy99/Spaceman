/*----- constants -----*/
const wrongGuessLimit = 6;
const initialWordBank = ["Space", "Earth", "Solar", "Jupiter", "Mars", 
                        "moon", "Neptune", "Mercury", "Pluto", "Saturn", 
                        "Venus", "asteroid", "astronaut", "comet", "star", 
                        "constellation", "space", "planet", "galaxy", "lunar", 
                        "solar", "orbit", "sun", "universe", "sky", 
                        "telescope", "eclipse", "zodiac", "gravity", "Uranus", "ray", "air"];

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
    // handle the form data
});


/*----- start the app -----*/
chooseWord();

/*----- functions -----*/

//*****************/
//Function chooseWord
//Desc: 
//Args: 
//Returns: 
//*****************/

function chooseWord() {
    let difficulty = 3 + winCount;
    let filteredWords = wordBank.filter(word => word.length == difficulty);
    currentWord = filteredWords[Math.floor(Math.random()*filteredWords.length)].toLowerCase();
    console.log(currentWord)
    render();
}


//*****************/
//Function checkGuess
//Args: String
//Returns: Boolean
//*****************/
function checkGuess(guess) {
    //check to see if the guess is already use
    if(correctGuesses.includes(guess) || wrongGuesses.includes(guess)){
        console.log("You've already guessed this letter");
        render();
        return;
    } 

    if(currentWord.includes(guess)) {
        correctGuesses.push(guess)
    } else{
        wrongGuesses.push(guess)
    } 
    render();
   
}

//*****************/
//Function createLetterBox
//Args: String
//Returns: NA
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
//Args
//Returns: 
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
//Function looseGame
//Desc: 
//Args:
//Returns: 
//*****************/

function looseGame() {

}


//*****************/
//Function animatedCharacter
//Desc: 
//Args:
//Returns: 
//*****************/

function animatedChracter() {

}


//*****************/
//Function winGame
//Desc: 
//Args: 
//Returns: 
//*****************/

function winGame() {

}

//*****************/
//Function completeWord
//Desc: 
//Args: 
//Returns: 
//*****************/

function completeWord() {

}

//*****************/
//Function 
//Desc: 
//Args: 
//Returns: 
//*****************/

function resetGame() {
    currentWord = undefined;
    correctGuesses = [];
    wrongGuesses = [];
    wordBank = initialWordBank;
    winCount = 0;
    render();
}

