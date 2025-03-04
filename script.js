console.log("Ujjwal")
//variable intialisations;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Getting elements to manipulate them in DOM;
const rollBtn = document.getElementById("roll");
const saveBtn = document.getElementById("save");
const resetBtn = document.getElementById("reset");
const rolledNumberText = document.getElementById("rolledNumber");
const winnerText = document.getElementById("winner");

//This is for the roll dice functionality;
rollBtn.addEventListener("click", function() {
    if (playing) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        rolledNumberText.textContent = diceRoll;

        if (diceRoll === 1) {
            currentScore = 0;
            switchTurn();
        } else {
            currentScore += diceRoll;
          document.getElementById(`current${activePlayer + 1}`).textContent = currentScore;
        }
    }
});

//This is for the save score functionality;
saveBtn.addEventListener("click", function() {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer];
        currentScore = 0;
        document.getElementById(`current${activePlayer + 1}`).textContent = currentScore;
        
        if (scores[activePlayer] >= 100) {
            winnerText.textContent = `${document.getElementById(`name${activePlayer + 1}`).value} Wins!`;
            playing = false;
        } else {
            switchTurn();
        }
    }
});

//This is for the event listener functionality;
resetBtn.addEventListener("click", function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    winnerText.textContent = "";
    rolledNumberText.textContent = "-";
    document.getElementById("score1").textContent = "0";
    document.getElementById("score2").textContent = "0";
    document.getElementById("current1").textContent = "0";
    document.getElementById("current2").textContent = "0";
});

//This is used to switch the turn alternately;
function switchTurn() {
    activePlayer = activePlayer === 0 ? 1 : 0;
}