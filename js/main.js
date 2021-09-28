/*----- constants -----*/
const wrongGuessLimit = 6;
const initialWordBank = ["Space", "Earth", "Solar", "Jupiter", "Mars","moon", "Neptune", "Mercury", "Pluto", "Saturn", "Venus", "asteroid", "astronaut", "comet", "star","constellation", "space", "planet", "galaxy", "lunar", "solar", "orbit", "sun", "universe", "sky", "telescope", "eclipse", "zodiac", "gravity", "Uranus", "ray", "air", "spacewalks", "spacecraft", "spacefaring", "spacetravel", "spaceflights", "spacewalking"];

/*----- app's state (variables) -----*/

let currentWord;
let correctGuessesLetters = [];
let wrongGuessesLetters = [];
let wordBank = initialWordBank;
let winCount = 0;

/*----- cached element references -----*/

const form  = document.getElementById('guessForm');
const hintMsg = document.getElementById('hint-msg');
const resetBtn = document.getElementById('reset-btn');
const remainingMsg = document.getElementById('remaining-msg');
const wrongMsg = document.getElementById('wrong-msg');
const lettersBox = document.getElementById('letters');
const winLostMsg = document.getElementById('win-lost');



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
//*****************/
function chooseWord() {
    let difficulty = 3 + winCount;
    let filteredWords = wordBank.filter(word => word.length === difficulty);

    if(filteredWords.length === 0){
        winGame();
        return;
    }
    
    currentWord = filteredWords[Math.floor(Math.random()*filteredWords.length)].toLowerCase();
    console.log(currentWord);
    render();
}


//*****************/
//Function checkGuess
//*****************/
function checkGuess(guess) {
    //check to see if the guess is already use
    if(correctGuessesLetters.includes(guess) || wrongGuessesLetters.includes(guess)){
        console.log("You've already guessed this letter");
        //double check with render, Jim suggested not to use render()***
        return;
    } 

    //check to see if the guessed letter is in the curren chosen word
    if(currentWord.includes(guess)) {
        //letter to replaced the current 
        correctGuessesLetters.push(guess)
    } else {
        wrongGuessesLetters.push(guess);
        if(wrongGuessesLetters.length >= wrongGuessLimit) {
            looseGame();    
            return;
        }
    }

    //turn current word into array and de-dupe the letters to count the unique letters in the word
    let letters = currentWord.split("");
    let lettersUnique = letters.filter((letter, i) => letters.indexOf(letter) === i);

    //check if the correct guesses equal to the unique letters to determine if the word is complete
    if(correctGuessesLetters.length === lettersUnique.length) {
        //winLostMsg.innerHTML = "Congrats!! You won!!"
        completeWord();
    }
    render();

}


//*****************/
//Function createLetterBox
//*****************/
function createLetterBox(letter) {
    let letterItem = document.createElement("div");
    letterItem.classList.add("letter-box");
   
    //check if the letter is contained in the correct guesses
    if(correctGuessesLetters.includes(letter)){
        let textnode = document.createTextNode(letter);
        letterItem.appendChild(textnode);
    }

    lettersBox.appendChild(letterItem);
}

//*****************/
//Function render
//*****************/
function render() {
    hintMsg.innerHTML = `The word has ${currentWord.length} letters.`;
    remainingMsg.innerHTML = `You have ${wrongGuessLimit - wrongGuessesLetters.length} guesses left!`;
    wrongMsg.innerHTML = `Wrong guesses ${wrongGuessesLetters.toString()}`;

    //hacky. change later (reset the fill)
    lettersBox.innerHTML = "";

    let letters = currentWord.split("");
    for (i in letters) {
        createLetterBox(letters[i]);
    }
}

//*****************/
//Function animatedCharacter
//*****************/
function animatedCharacter() {

}


//*****************/
//Function winGame
//*****************/
function winGame() {
    console.log("Congrats! You win!!");
}

//*****************/
//Function looseGame
//*****************/
//seperating the looseGame into its own function that it is reusable
function looseGame() {
    console.log("You sent me to the alien ship!!");
    resetGame();
}

//*****************/
//Function completeWord
//*****************/
function completeWord() {
    //remove currentWord from wordBank
    wordBank = wordBank.filter(word => word !== currentWord);
    wrongGuessesLetters = [];
    correctGuessesLetters = [];
    winCount = ++winCount;
    chooseWord();
}

//*****************/
//Function resetGame 
//*****************/
function resetGame() {
    correctGuessesLetters = [];
    wrongGuessesLetters = [];
    wordBank = initialWordBank;
    winCount = 0;
    chooseWord();
    render();
}

