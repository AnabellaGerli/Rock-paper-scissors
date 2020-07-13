var userChoice = " "
var userHand = document.getElementById ("user-hand")

var buttonRock = document.getElementById("rock")
var buttonPaper = document.getElementById ("paper")
var buttonScissors = document.getElementById("scissors")

var computerChoice = " "
var computerHand = document.getElementById ("computer-hand")

var userScore = document.getElementById("points-user")
var computerScore = document.getElementById("points-computer")

var userPoints = 0
var computerPoints = 0

var title = document.getElementById("Title")

buttonRock.onclick = () => {
    userChoice="rock";
    userHand.src="Image/piedra_ada.png";
    Option();
    points();
}

buttonPaper.onclick = () => {
    userChoice="paper";
    userHand.src="Image/papel_ada.png";
    Option();
    
    points();
}

buttonScissors.onclick = () => {
    userChoice="scissors";
    userHand.src="Image/tijera_ada.png";
    Option();
    
    points();
}

const Option = () => {
    var number = Math.floor(Math.random()*3);  
    if (number == "0") { 
        computerChoice= "rock";     
        computerHand.src="Image/piedra_computadora.png"}
    else if (number =="1") { 
        computerChoice = "paper"; 
        computerHand.src="Image/papel_computadora.png" }
    else {computerChoice = "scissors";     
        computerHand.src="Image/tijera_computadora.png"}
}

const points = () => {
    if (userChoice=="rock") {
        if(computerChoice=="rock") { 
            title.textContent= "Tie :/" }

        else if(computerChoice=="paper") {
            title.textContent= "You loose :( ";
            computerPoints++;
            computerScore.textContent = computerPoints}

        else {
            title.textContent ="You win :)  ";
            userPoints++;
            userScore.textContent = userPoints}
    }

    else if (userChoice=="paper") {
        if(computerChoice=="rock") { 
            title.textContent= "You win :) "; 
            userPoints++;
            userScore.textContent = userPoints }
        else if (computerChoice=="paper") {
            title.textContent= "Tie :/"}
        else {
            title.textContent ="You loose :(";
            computerPoints++;
            computerScore.textContent = computerPoints}
    }

    else {
        if(computerChoice=="rock") { 
            title.textContent= "You loose :( ";
            computerPoints++;
            computerScore.textContent = computerPoints}
        
        else if(computerChoice=="paper") {
            title.textContent= "You win :) " ;
            userPoints++;
            userScore.textContent = userPoints}
        else {
            title.textContent ="Tie :/"}
    } 
} 