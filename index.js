// Your Code Here
let userName = window.prompt('please enter your name.')// gets the users name and displays it in console
console.log(userName)
let userScore = 0
let playAgain = true
function playGame()//makes a function for the game so it can be replayed easier
{
    userScore = 0//resets the score each run
    for (let q = 0; q<questions.length; q++)
    {
        let question = questions[q]
        let userAnswer = window.prompt(question.text)

        if(userAnswer.toUpperCase() ===question.correctAnswer)
        {
            console.log('correct')
            userScore += 10
        }
        else{
            console.log('incorect')
        }//askes the questions and checks if they're right or wrong 
    }
    window.alert('Your score is: ' + userScore)
}
while( playAgain === true )
{
playGame()//playes the game the first time
let userChoice = window.prompt('would you like to play again? answer yes or no.')

if( userChoice == "yes")// checks if the player wants to play again and if yes restarts
{
    playAgain=true
}
else if(userChoice=="no")
{
    playAgain=false
    window.alert('Thanks for playing the game')
}
else
{
    playAgain=false
    window.alert("incorrect responce")
}
}