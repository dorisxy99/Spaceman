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

chooseWord()


/*----- event listeners -----*/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = event.target.elements['guess'].value
    checkGuess(guess)
    $( ".letters-cont" ).append( "<div class='letter-box'> <p>"+guess +"</p></div>" );
    // handle the form data
});



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
    currentWord = filteredWords[Math.floor(Math.random()*filteredWords.length)];
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

