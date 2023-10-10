let play = ["rock", "paper", "scissor"];
let wins = 0;
let lose = 0;
let draws = 0;
let i = 0;

let introduction =
  "Get Ready - five round of rock, paper, scissor about to start";
console.log(introduction);

function getComputerChoice() {
  return play[Math.floor(Math.random() * play.length)];
}

function getUserChoice() {
  let hAnswer = prompt("Please choose:");
  return hAnswer.toLowerCase();
}

function playRound() {
  while (i < 5) {
    let hAnswer = getUserChoice();
    let cAnswer = getComputerChoice();

    if (hAnswer !== "rock" && hAnswer !== "paper" && hAnswer !== "scissor") {
      console.log(
        "Please choose the correct prompt, you dumdum. Go refresh the page",
      );
      break;
    }

    if (hAnswer == "rock" || hAnswer == "paper" || hAnswer == "scissor") {
      console.log(`Computer has played ${cAnswer}.`);
    }

    if (hAnswer === cAnswer) {
      draws++;
      console.log(`It's a draw, we are keeping tabs... (${draws})`);
    } else if (
      (hAnswer == "rock" && cAnswer == "scissor") ||
      (hAnswer == "paper" && cAnswer == "rock") ||
      (hAnswer == "scissor" && cAnswer == "paper")
    ) {
      wins++;
      console.log(`You win ${wins} times. What a lucky S.O.B`);
    } else {
      lose++;
      console.log(`Haha, LOSER! ${lose} times`);
    }
    i++;
  }
  console.log(
    `You have won ${wins} time(s), lose ${lose} time(s), draw ${draws} times`,
  );
}

playRound();
