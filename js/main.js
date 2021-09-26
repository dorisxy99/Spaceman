/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

const form  = document.getElementById('guessForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = event.target.elements['guess'].value
    $( ".letters-cont" ).append( "<div class='letter-box'> <p>"+guess +"</p></div>" );
    // handle the form data
});