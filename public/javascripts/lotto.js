
document.getElementById("cruise-button").addEventListener("click", function() {
  lotto = Math.floor(Math.random() * 10) + 1;
  if (lotto == 10) {
    window.alert("YOU WON A FREE CRUISE!!!")
  }
  else {
    window.alert("You lost. Better luck next time.")
  }
});