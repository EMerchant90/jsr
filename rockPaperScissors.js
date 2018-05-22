// Utilize a function that picks a random value for the computer
// Write a control statement to run the game more than once
// Utilize if/else statements
// Take user input via whatever means you'd like (form input if you know HTML or just the standard prompt() function in JS)
// Run at least 3 times
// Evaluate the best of 3 for player vs. computer
// Output the winner


function bestOfThree() {
	for (var i = 1; i <=3; i++) {
		choose();
	}
}

function choose() {
	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
	console.log("Computer: " + computerChoice);
	console.log("User:" + userChoice);
	var message = compare(userChoice, computerChoice);
	console.log(message);
}

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
		} else if (choice1 === "rock") {
      if (choice2 === "scissors") {
        return "rock wins";
			} else {
        return "paper wins"
			}
  	} else if (choice1 === "paper") {
      if (choice2 === "rock") {
        return "paper wins";
			} else {
        return "scissors wins";
			}
    } else if (choice1 === "scissors") {
				if (choice2 === "paper") {
					return "scissors wins";
				} else {
					return "rock wins";
				}
			}
		}

//console.log(compare(userChoice, computerChoice));

// function bestOfThree() {
// 	var games = 0
// 	while (games <= 3) {
// 		console.log(compare(choose(userChoice, computerChoice)));
// 	}
// }
