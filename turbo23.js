// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const variable = "Am I learning JavaScript?"
variable.indexOf('?') ? alert(variable) : alert("Not a question")
// using the indexOf method, we are checking for the character or word within the string nestled in the parentheses
// created a ternary operator to determine if the statement was true, it would alert the sentence if not, it would say "not a question"

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let hireMe = "I am a jr. dev! Hire me as your next jr. dev!!!"
console.log(hireMe.replace("jr. dev", "software engineer"));
// using the replace method, we insert the characters / words we are removing
// secondly, separated by a coma, is what we are replacing the characters / words with

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.random();
    if(random < .33){
        return "rock";      
    }else if(random < .66){
        return "paper";
    }else{
        return "scissors";
    }
};
// commenting out the function call below since the function is now called within the "player" function below within var "botChoice"
// uncomment out if you're using this function separately

// rockPaperScissors();


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function player(playerChoice){
    let botChoice = rockPaperScissors();
    if ( (playerChoice == "rock" &&  botChoice == "scissors") ||
    (playerChoice == "paper" &&  botChoice == "rock") || 
    (playerChoice == "scissors" &&  botChoice == "paper") ){
        return "You wins! Slay!";
    }else if ( playerChoice == botChoice ){
        return "Draw!!!";
    }else{
        return "Computer Wins! BooOoOoo!";
    }
};

player("//inset rock, paper or scissors here//")


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multipleGames(arrayOfChoices){
    for (let i = 0; i < arrayOfChoices.length; i++)
        return arrayOfChoices[i]
};

multipleGames([ "rock", "paper", "scissors" ]);
