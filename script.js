let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let yourscore = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() *3);
    return options[randomidx];
}
const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoise)=>{
    if(userWin){
        userScore++;
        yourscore.innerText = userScore;
        // console.log("you win!");
        msg.innerText = "user win.";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorepara.innerText = compScore;
        // console.log("You Lost!");
        msg.innerText = "user lost";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoise =genCompChoice();
    console.log("comp choice =",compChoise);

    if(userChoice === compChoise){
        drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoise === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoise === "sicssor" ? false : true;
        }else{
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoise);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        // console.log("choice was clicked");
        let userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
