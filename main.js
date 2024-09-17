

let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissor = document.querySelector(".scissor-btn");
let userImg = document.querySelector("#user-img")
let comImg = document.querySelector("#computer-img")
let imgCon = document.querySelector(".image-container")
let Matchwon = document.querySelector("#comparison")


function randomchoice() {
   let choices = ["rock", "paper", "scissors"];
   let computerChoice = choices[Math.floor(Math.random() * choices.length)]
   return computerChoice;
}


rock.addEventListener("click", () => {
   const userchoice = "rock"
   const computerChoice = randomchoice();
   const winningMessage = compare(userchoice, computerChoice)
   userImg.src = `images/rock.png`
   comImg.src = `images/${computerChoice}.png`;
    imgCon.style.display = "none";
   userImg.style.display = "block";
   comImg.style.display = "block";
   Matchwon.textContent = winningMessage

})

paper.addEventListener("click", () => {
   const userchoice = "paper"
   const computerChoice = randomchoice();
   const winningMessage = compare(userchoice, computerChoice)
   userImg.src = `images/paper.png`
   comImg.src = `images/${computerChoice}.png`;
   imgCon.style.display = "none";
   userImg.style.display = "block";
   comImg.style.display = "block";
   Matchwon.textContent = `${winningMessage}`
})

scissor.addEventListener("click", () => {
   const userchoice = "scissors"
   const computerChoice = randomchoice();
   const winningMessage = compare(userchoice, computerChoice)
   userImg.src = `images/scissors.png`
   comImg.src = `images/${computerChoice}.png`;
    imgCon.style.display = "none";
   userImg.style.display = "block";
   comImg.style.display = "block";
   Matchwon.textContent = `${winningMessage}`
})

function compare(userChoice, computerChoice) {
   if (userChoice === computerChoice) {
      return "Match TIE"
   }
   else if (userChoice === "paper" & computerChoice === "rock"
      || userChoice === "scissors" & computerChoice === "paper"
      || userChoice === "rock" & computerChoice === "scissors") {
      return "YOU won"
   }
   else if (userChoice === "rock" & computerChoice === "paper"
      || userChoice === "scissors" & computerChoice === "rock"
      || userChoice === "paper" & computerChoice === "scissors") {
      return "Computer won"
   }

}



//...........................................................
// // let computerChoice;

// rock.addEventlistener("click", () => {
//    //  playerImage.src="newrock.png";
//    console.log("Rock")
// })

// paper.addEventlistener("click", () => {
//    // playerImage.src="newpaper1.jpeg";
//    console.log("Paper")
// })
// scissor.addEventlistener("click", () => {
//    //  playerImage.src="new scisser.png";
//    console.log("Scissor")
// })
// let paper = document.querySelector(".image2")
// let userImage = document.querySelector(".image-container")

// paper.aadEventlistenet("click",(paper)=>{
//    playerImage.src ="newpaper1.jpeg"
// })

// let scissor = document.querySelector(".image3")
// let yourImage = document.querySelector(".image-container")





