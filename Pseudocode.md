# No Man Space Game
1. Define required constants

    *const_wrongGuessLimit (No. of total wrong guesses before you lose the game, 6 or 7)


2. Define required variables used to track the state of the game

    * let _currentWord (selected from the bank randomly)
    * let_correctGuesses (correct guessed letter)
    * let_wrongGuesses (wrong gusseed letter)
    * let_wordBank (I decided to use the word bank as a varible becuase it is mutable. We can remove the words that are already use, so that the player doesn't get the same word twice. And will eventually finish the whole game!!!!)
    * let_winCount (a number of how many words the player guesses correctly)



3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant

    * the form for useer input
    * reset button
    * game character illustration
    * the message telling the user how many letters in the word
    * the message telling the user how many guesses they have left
    * the wrong guesses list (message)


4. Upon loading the app should

    * initialize all the variables
    * initialize the event handlers
    * select the required elements on the page and store them in JS
    * render inital messages to the page
    * * select the word from wordBank based on the difficulty rating (3 + winCount)
    * render total letter slots on the page 

5. User submits their guess using the form submit event handler

    * search the current word for the submitted guessed letter (use js to include)

    * if the letter is not include in the word, add letter to wrongGuesses array
        > check the length of the wrongGuessLimit vs length of the wrongGuess array
            > animate the astronut to go up one level
            > re-render all the messages to the page
            > if the limit is reached, present a game over message 
            
    * else the letter is included in the word, add the letter to correctGuesses array
        > figure out the position of the letter of the correct guess 
        > re-render the letter in the UI that fills the space out
            > check if the word is completed
                > if the word is completed, 
                * remove the word from wordBank
                * run a function to select a new word 
                * increment the winCount by 1
                * re-set some of the UI messages



# Function definitions:

