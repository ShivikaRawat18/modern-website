
function getComputerChoice(){
const rpsChoices = ['Rock', 'Paper', 'Scissors']
const randomNumber= Math.floor(Math.random()*3)
return rpsChoice[randomNumber]

}




const totalScore= {computerScore: 0, playerScore: 0}



function getComputerChoice(){
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}



function getResult(playerChoice, computerChoice){
 let score;
    
if(playerChoice == computerChoice){
    score=0
}
else if(playerChoice=='Rock' && computerChoice == 'Scissors')
{
    score=1
}
else if(playerChoice=='Paper' && computerChoice == 'Rock')
{
    score=1
}
else if(playerChoice=='Scissors' && computerChoice == 'Paper')
{
    score=1
}

else{
    score= -1
}
return score
}


function showResult(score, playerChoice, computerChoice){
    let result = document.getElementById('result')
    switch (score) {
      case -1:
        result.innerText = `You Lose!`
        break;
      case 0:
        result.innerText = `It's a Draw!`
        break;
      case 1:
        result.innerText = `You Win!`
        break;
    }
  
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
      hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
      
}



function onClickRPS(playerChoice){
    console.log(playerChoice)
    const computerChoice= getComputerChoice()
    console.log({computerChoice})
    const score =getResult(playerChoice,computerChoice)
    totalScore['playerScore'] += score
    console.log({score})
    console.log({totalScore})
    showResult(score,playerChoice, computerChoice)

}


function playGame(){
    const rpsButtons =document.querySelectorAll('.rpsButton')
   rpsButtons[0].onclick=()=> console.log(rpsButtons[0].value)

   rpsButtons.forEach(rpsButton =>{
rpsButton.onclick=()=> onClickRPS(rpsButton.value)

   })

   const endGameButton =document.getElementById('endGameButton')
   ensGameButton.onclick=()=> endGameButton()
}
function endGame(totalScore){
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText=''
    handsDiv.innerText=''
    playerScoreDiv.innerText=''

}
playGame()