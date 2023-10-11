let draw = 0;
let wins = 0;
let lose = 0;
let condition = 5;
let i = 0;

function getComputerChoice() {
  const rspArray = ["rock", "paper", "scissor"];
  let choice = rspArray[Math.floor(Math.random() * rspArray.length)];

  return choice;
}

function getuserChoice() {
  const hMsg = `Boi, choose between rock, paper or scissor to save your planet`;
  let choice = prompt(hMsg);

  return choice.toLowerCase();
}

function introduction() {
  const introMsg = `Welcome my Boi, You have come to play this Rock-Paper-Scissor with me to prevent the doomsday!`;
  console.log(introMsg);
}

function playRound() {
  introduction();

  // FIX: Need to fix this condition and not use sketchy if else statement
  while (i < 25) {
    let hAnswer = getuserChoice();
    let cAnswer = getComputerChoice();

    if (hAnswer !== "rock" && hAnswer !== "paper" && hAnswer !== "scissor") {
      const eMsg = `Please choice between rock, paper or scissor my Boi`;
      console.log(eMsg);
      break;
    }

    if (hAnswer === cAnswer) {
      draw++;

      const tMsg = `It's a draw my Boi, You save this time`;
      console.log(tMsg);
    } else if (
      (hAnswer == "rock" && cAnswer == "scissor") ||
      (hAnswer == "paper" && cAnswer == "rock") ||
      (hAnswer == "scissor" && cAnswer == "paper")
    ) {
      wins++;

      const wMsg = `You win ${wins} times Boi, but not for long`;
      console.log(wMsg);
    } else {
      lose++;

      const lMsg = `Muahahaha, You lost ${lose} times Boi. The doom is near`;
      console.log(lMsg);
    }

    if (wins === 5) {
      const winMsg = `You have some luck Boi, you wins. I will be back`;
      console.log(winMsg);
      break;
    } else if (lose === 5) {
      const lossMsg = `MUAHAHAHAHAHA, I wins. Your planet is GONE`;
      console.log(lossMsg);
      break;
    }
    i++;
  }

  let finalMsg = `You wins ${wins} times, lose ${lose} times and draws ${draw} times.`;
  console.log(finalMsg);
}

playRound();
