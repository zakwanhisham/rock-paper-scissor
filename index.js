let draw = 0;
let wins = 0;
let lose = 0;
let condition = 5;
let i = 0;

// Base div
let message = document.querySelector("#message");

function getComputerChoice() {
  const rspArray = ["rock", "paper", "scissor"];
  let choice = rspArray[Math.floor(Math.random() * rspArray.length)];

  return choice;
}

function getUserChoice(value) {
  return value.toLowerCase();
}

// Intro message
let intro = document.createElement("div");
intro.style.paddingBottom = "15px";
intro.style.fontSize = "20px";
intro.style.fontWeight = "bold";
const introMsg = `Welcome my Boi, You have come to play this Rock-Paper-Scissor with me to prevent the doomsday!`;
intro.textContent = introMsg;
message.appendChild(intro);

// Show user choice
let userChoice = document.createElement("p");
userChoice.style.marginTop = "0px";
userChoice.style.marginBottom = "10px";
userChoice.style.fontSize = "15px";
message.appendChild(userChoice);

// Show final result
let result = document.createElement("p");

// User choice button
const rpsArray = ["Rock", "Paper", "Scissor"];
for (i = 0; i < rpsArray.length; i++) {
  let button = document.createElement("input");
  button.setAttribute("id", rpsArray[i]);
  button.setAttribute("type", "button");
  button.setAttribute("name", rpsArray[i]);
  button.setAttribute("value", rpsArray[i]);
  button.style.marginRight = "5px";
  button.style.marginLeft = "5px";
  button.textContent = rpsArray[i];
  button.addEventListener("click", () => {
    let hAnswer = getUserChoice(button.value);
    let cAnswer = getComputerChoice();

    if (hAnswer === cAnswer) {
      draw++;
      const tMsg = `It's a draw my Boi, You save this time`;
      userChoice.textContent = tMsg;
    } else if (
      (hAnswer == "rock" && cAnswer == "scissor") ||
      (hAnswer == "paper" && cAnswer == "rock") ||
      (hAnswer == "scissor" && cAnswer == "paper")
    ) {
      wins++;
      const wMsg = `You win ${wins} times Boi, but not for long`;
      userChoice.textContent = wMsg;
    } else {
      lose++;
      const lMsg = `Muahahaha, You lost ${lose} times Boi. The doom is near`;
      userChoice.textContent = lMsg;
    }

    if (wins === 5) {
      const winMsg = `You have some luck Boi, you wins. I will be back`;
      result.textContent = winMsg;
    } else if (lose === 5) {
      const lossMsg = `MUAHAHAHAHAHA, I wins. Your planet is GONE`;
      result.textContent = lossMsg;
    } else if (wins === 6 || lose === 6) {
      let finale = document.createElement("div");
      const finaleMsg = `Thank you for playing Rock Paper Scissor. I'll see you again`;
      finale.textContent = finaleMsg;
      message.appendChild(finale);
    }

    // let score = document.createElement("p");
    // const scoreMsg = `Wins: ${wins} | Lose: ${lose} | Draw: ${draw}`;
    // score.textContent = scoreMsg;
    // message.appendChild(score);
  });
  message.appendChild(button);

  message.appendChild(result);
}
