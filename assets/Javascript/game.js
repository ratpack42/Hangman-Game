//Global Scope Vars Available//

//Words available to guess
var words = ['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool', 'Tottenham', 'Leicester', 'Everton', 'West Ham', 'Sunderland', 'Crysal Palace', 'Swansea City', 'Southampton', 'Stoke City', 'West Bromich', 'Bournemouth', 'Newcastle united', 'Watford', 'Hull City', 'Middesbrough', 'Burnley', 'Huddersfield Town', 'Norwich City', 'Fulham', 'Cardiff City', 'Brighton Hove Albion'];


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
//Let's the Computer Select Random Letters//



//Listens for event
	document.onkeyup = function(event) {
		compGuess = words[team];
		console.log(words);
//Change userGuess to Event.key	
		userGuess = event.key;
		console.log(userGuess);
//Make guesses go down by 1
		guessesLeft = guessesLeft - 1;
	


	//Lose Condition is when userGuesses equals 9
		guessedLetters.push(userGuess);
		if (guessesLeft === 0) {
			guessesLeft = 9;
			guessedLetters = [];
			losses = losses +1;
			document.getElementById("losses").innerHTML ="Losses: " +losses;
	//Resets picks random letter again
			team = Math.floor(Math.random() * words.length);
			// var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];	
		}


	// When user presses a key, it records it and saves to userGuess
		var soFar = document.getElementById("soFar");
		soFar.innerHTML = "Your guesses so far: " + guessedLetters;

	//Make Guesses Left appear in HTML
		document.getElementById("guessLeft").innerHTML ="Guesses Left: " +guessesLeft;

	//Win Coditions - When computer choice equals user condition
		if (compGuess === userGuess) {
			//("YOU WIN");
			wins = wins + 1;
			document.getElementById("wins").innerHTML ="Wins: " + wins;
			guessesLeft= 9;
			guessedLetters = [];
	//Resets picks random letter
			team = Math.floor(Math.random() * words.length);

		}

}










