let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let users = document.querySelector(".user-score span");
let comps = document.querySelector(".comp-score span")
//console.log(choices);

let userscroe = 0;
let compscrore = 0;
for (let choice of choices) {
  choice.addEventListener("click", () => {

    let userchoice = choice.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
  })
}

const gamedraw = () => {
  msg.innerText = "Game is Draw play Again";
  msg.style.backgroundColor = "blue";
}
const showwinner = (userwin , userchoice, compchoice ) => {
  if (userwin) {
    msg.innerText = `You win the Game ${userchoice} beats ${compchoice}.`;
    msg.style.backgroundColor = "green";
    userscroe++;
    users.innerText = userscroe;
  } else {
    msg.innerText =`You loose ${compchoice} beats ${userchoice}.`;
    msg.style.backgroundColor = "red";
    compscrore++;
    comps.innerText = compscrore;
  }
}

const playgame = (userchoice) => {
  const options = ["rock", "paper", "scissors"];
  let idxid = Math.floor(Math.random() * 3);
  let compchoice = options[idxid];
  console.log(compchoice);
  

  if (userchoice === compchoice) {
    gamedraw();
  } else {
    let userwin = true;
    if (userchoice === "paper") {
    // computer choice will be rock or scissors
    userwin = compchoice === "rock" ? true : false;
  } else if (userchoice === "rock") {
    // computer choice will be paper or scissors
    userwin = compchoice === "scissors" ? true : false;
  } else {
    // computer choice will be rock or paper
    userwin = compchoice === "paper" ? true : false;
  }

  showwinner(userwin , userchoice , compchoice) ;
}
}

