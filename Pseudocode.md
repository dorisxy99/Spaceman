# No Man Space Game

## Define Constants and Variables
### Define required constants

    * const_wrongGuesssedLetterLimit (No. of total wrong guesses before you lose the game, 6)
    * const_initialWordBank

### Define required variables used to track the state of the game

    * let _currentWord (selected from the bank randomly)
    * let_correctGuessesLetter (correct guessed letter)
    * let_wrongGuessesLetter (wrong gusseed letter)
    * let_wordBank (I decided to use the word bank as a varible becuase it is mutable. We can remove the words that are already use, so that the player doesn't get the same word twice. And will eventually finish the whole game!!!!)
    * let_winCount (a number of how many words the player guesses correctly)



### Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant

    * the form for useer input
    * reset button
    * game character illustration
    * the message telling the user how many letters in the word
    * the message telling the user how many guesses they have left
    * the wrong guesses list (message)

## Game Logic
### Upon loading the app should

    * initialize all the variables
    * initialize the event handlers
    * select the required elements on the page and store them in JS
    * render inital messages to the page
    * * select the word from wordBank based on the difficulty rating (3 + winCount)
    * render total letter slots on the page 

### User submits their guess using the form submit event handler

    * search the current word for the submitted guessed letter (use js to include)

    * if the letter is not include in the word, add letter to wrongGuesses array
        * check the length of the wrongGuessLimit vs length of the wrongGuess array
            * animate the astronut to go up one level
            * re-render all the messages to the page
            * if the limit is reached, present a game over message 

    * else the letter is included in the word, add the letter to correctGuesses array
        * figure out the position of the letter of the correct guess 
        * re-render the letter in the UI that fills the space out
            * check if the word is completed
                * if the word is completed, 
                * remove the word from wordBank
                * run a function to select a new word 
                * increment the winCount by 1
                * re-set some of the UI messages
                
## Function definitions:

### function checkGuess

    * check if current word contains letter
    * if yes,
        * add letter to correctGuesses 
        * call render
    * if no,
        * add letter to wrongGuesses
        * call render

### function chooseWord 
    * select difficulty rating by using winCount
    * filter wordBank by the rating
    * select random word from what's left
    * set the current word variable
    * call render function

### function resetGame
    * clear wrongGuesses
    * clear wordBank ->
    * set wordBank to inital wordBank
    * clear correctGuesses
    * clear currentWord
    * set winCount to Zero
    * call render function

### function render
    * ALLLLLLLLLLLL the elements ******************* double check
    * the form for useer input
    * reset button
    * game character illustration
    * the message telling the user how many letters in the word
    * the message telling the user how many guesses they have left
    * the wrong guesses list (message)
    * call animateCharacter

### function looseGame
    * call reset game
    * present loosing message

### function animateCharacter
    * animate the character up according to the wrongGuesses array

### function winGame
    * call reset game
    * present winning message

### function completeWord
    * remove currentWord from wordBank
    * check if the wordBank is empty
        * if empty,
            * call winGame
        else, 
            * clear wrongGuesses
            * clear correctGuesses
            * clear correctWord
            * call chooseWord

