//Global Scope Vars Available//

//Words available to guess
var words = ['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool', 'Tottenham', 'Leicester', 'Everton', 'West Ham', 'Sunderland', 'Crysal Palace', 'Swansea City', 'Southampton', 'Stoke City', 'West Bromich', 'Bournemouth', 'Newcastle United', 'Watford', 'Hull City', 'Middesbrough', 'Burnley', 'Huddersfield Town', 'Norwich City', 'Fulham', 'Cardiff City', 'Brighton Hove Albion'];

//Scoreboard//
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedLetters = [];
var userGuess = null;
var team = Math.floor(Math.random() * words.length);

//Let's the Computer Select Random Words//
compGuess = words[team];

//redeclare the variable to lowercase//
compGuess = compGuess.toLowerCase();
console.log(compGuess);

//Change compGuess so adds spaces between each word//
compGuess = compGuess.split('').join(' ');
console.log(compGuess);
//Replaces word with spaces to hide the word//
var hangman =compGuess.replace(/[a-z]/gi, "_");
console.log(hangman);
document.getElementById("currentWord").innerHTML="Current Word " +hangman;

//Listens for event
document.onkeyup = function(event) {
	userGuess=event.key


//Create for loop to list all the characters within the word within the word. 	
	 for (i = 0; i < compGuess.length; i++) {
        console.log(compGuess[i]);
        if(userGuess===compGuess[i]) {
//Updating hangman by setting i to zero once the userGuess presses the event key
//it runs through the loop replaces the letter then runs loop again increasing i
//by 1 and running through again until all the letters are replaced.
        hangman = hangman.substr(0, i) + userGuess + hangman.substr(i + 1);
            
        }
        
    }
//If the user guess is within the compGuess word then it will not decrease
//guesses left it will only decrease if guesses a letter outside the word     
        if ((!compGuess.includes(userGuess)) && (-1===guessedLetters.indexOf(userGuess))) {
            
            //Records user guess key
            
                guessedLetters.push(userGuess);
                var soFar = document.getElementById("soFar");
                soFar.innerHTML = "Your guesses so far: " + guessedLetters;
                //Make guesses go down by 1
                 guessesLeft = guessesLeft - 1;

                //Make guesses left appear in HTML
                 document.getElementById("guessLeft").innerHTML ="Guesses Left: " +guessesLeft;
                console.log(userGuess);
        }

//Win conditions - when user identifies the word correctly. User guess wins should
//increase by 1.
        if (compGuess===hangman){
            wins = wins +1;
            document.getElementById("wins").innerHTML ="Wins: " +wins;
        }

//Reset game if user guesses left go to zero or guesses words correctly
        if (guessesLeft === 0) {
            team = Math.floor(Math.random() * words.length);
            compGuess = words[team];
            guessesLeft = 5;
            document.getElementById("guessLeft").innerHTML ="Guesses Left: " +guessesLeft;
                
        }
      
document.getElementById("currentWord").innerHTML="Current Word " +hangman;

}






