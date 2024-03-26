// ... your existing code ...
// Inside the if statement when a winner is selected
function selectWinner() {
  if (votes >= 15) {
    let winnerElement = document.querySelector(".omg");
    let foot = document.querySelector("footer");
    let winner = voters[Math.trunc(Math.random() * 15)];
    console.log(winner, "is the Winner");
    // Display the winner in the winner element
    winnerElement.innerHTML = `${winner} is the Winner!`;

    // Add the rainbow-text class to start the animation
    winnerElement.classList.add("rainbow-text");
  }
}
