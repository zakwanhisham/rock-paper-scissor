let draw = 0;
let wins = 0;
let lose = 0;
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

  // TODO: Make this loop to first to 5 and not 5 games
  while (i < 5) {
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

      const wMsg = `You win this time Boi, but not for long`;
      console.log(wMsg);
    } else {
      lose++;

      const lMsg = `Muahahaha, You lost Boi. The doom is near`;
      console.log(lMsg);
    }
    i++;
  }

  if (lose < wins) {
    const winMsg = `You have some luck Boi, you wins ${wins} times. I will be back`;
    console.log(winMsg);
  } else if (wins < lose) {
    const lossMsg = `MUAHAHAHAHAHA, I wins ${lose} times. Your planet is GONE`;
    console.log(lossMsg);
  } else if (wins < draw && lose < draw) {
    const drawMsg = `It's a draw my BOI, press the refresh button to continue`;
    console.log(drawMsg);
  }
}

playRound();
