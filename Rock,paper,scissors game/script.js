let userScore = 0;
let compScore = 0;

const game = document.querySelectorAll(".choices");
const message = document.querySelector("#msg");
const userScorewin = document.querySelector("#user_choice");
const compScorewin = document.querySelector("#comp_choice");


//                             Executing  user and compute choices..

const gaming = (userChoice) => {
    console.log("userChoice  = ", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice  = ", compChoice);

    //                                conditions of the game:----
    if (userChoice === compChoice) {
        draw();
    } else {
        let win = true;
        if (userChoice === "Rock") {
            win = compChoice == "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            win = compChoice == "Scissors" ? false : true;
        } else if (userChoice === "Scissors") {
            win = compChoice == "Rock" ? false : true;
        }
        showWinner(win, userChoice, compChoice);
    }
};
//                            functions acc to conditions printing....
const draw = () => {
    console.log("Game is drawed");
    message.innerText = "Game is drawed *-*";
    message.style.backgroundColor = "skyBlue"
    message.style.color = "Black"
}
const showWinner = (win, userChoice, compChoice) => {
    if (win) {
        userScore++;
        userScorewin.innerText = userScore;
        // console.log("You win :)");
        message.innerText = `You win :) ${userChoice} beats your ${compChoice}`;
        message.style.backgroundColor = "Pink"
        message.style.color = "Black"
    } else {
        compScore++;
        compScorewin.innerText = compScore;
        // console.log("You lost!");
        message.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red"
        message.style.color = "white"
    }
}


//                                 generating computer choice..
const genCompChoice = () => {
    const items = ["Rock", "Paper", "Scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return items[randomidx];
};


//main event 
game.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        gaming(userChoice);
    })

});
