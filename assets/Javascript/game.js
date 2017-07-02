//Global Scope Vars Available//

//Words available to guess
var words = ['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool', 'Tottenham', 'Leicester', 'Everton', 'West Ham', 'Sunderland', 'Crysal Palace', 'Swansea City', 'Southampton', 'Stoke City', 'West Bromich', 'Bournemouth', 'Newcastle United', 'Watford', 'Hull City', 'Middesbrough', 'Burnley', 'Huddersfield Town', 'Norwich City', 'Fulham', 'Cardiff City', 'Brighton Hove Albion'];


//Letter Choices Available//
letters = ['a', 'b', 'c', 'd,', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Scoreboard//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = null;
var team = Math.floor(Math.random() * words.length);
console.log(team);
//Let's the Computer Select Random Words//
compGuess = words[team];
//redeclare the variable to lowercase//
compGuess = compGuess.toLowerCase();
console.log(compGuess);
//Change compGuess so adds spaces between each word//
compGuess = compGuess.split('').join(' ');
console.log(compGuess);
//Replaces word with spaces to hide the word//
var hangman =compGuess.replace(/[a-z]/gi, "_ ");
console.log(hangman);

//Listens for event
document.onkeyup = function(event) {
	userGuess=event.key
	console.log(userGuess);

//Create for loop to list all the characters within the word within the word. 	
	 for (var i = 0; i < compGuess.length; i++) {
        console.log(compGuess[i]);
        if(userGuess===compGuess[i]) {
        	hangman=hangman.replace(hangman[i], compGuess[i]);
        	console.log(hangman);

        }
      }
}

//Show word for now while working on HTML
document.getElementById("currentWord").innerHTML="Current Word " +hangman;


//Replace every character with an underscore account for spaces

	//var i = 0, strLength = str.length;
 
	// for(i; i < strLength; i++) {
 
 // /	str = str.replace(" ", "_");