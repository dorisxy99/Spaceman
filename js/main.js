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



/*----- event listeners -----*/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = event.target.elements['guess'].value.toLowerCase()
    checkGuess(guess)
    $( ".letters-cont" ).append( "<div class='letter-box'> <p>"+guess +"</p></div>" );
    // handle the form data
});


/*----- start the app -----*/
chooseWord();
render();

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
    //call render
}


//*****************/
//Function checkGuess
//Args: String
//Returns: Boolean
//*****************/
function checkGuess(guess) {

}

//*****************/
//Function 
//Desc: 
//Args
//Returns: 
//*****************/

function render() {
    hintMsg.innerHTML = `The word has ${currentWord.length} letters.`;
    remainingMsg.innerHTML = `You have ${wrongGuessLimit - wrongGuesses.length} guesses left!`
    wrongMsg.innerHTML = `Wrong guesses ${wrongGuesses.toString()}`
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

