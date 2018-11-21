var h1 = document.querySelector("h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// Add Dice image

var rand1 = Math.ceil(Math.random() * 6);
var rand2 = Math.ceil(Math.random() * 6);

img1.setAttribute("src", "images/dice"+rand1+".png");
img2.setAttribute("src", "images/dice"+rand2+".png");

//Change Title
if (rand1 > rand2) {
  h1.textContent = "Player 1 won";
} else if ( rand1 === rand2 ){
  h1.textContent = "Draw";
} else {
  h1.textContent = "Player 2 won";
}


