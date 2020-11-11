//DICE OF PLAYER 1
function player1Score() {
  //Create a Random Number 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  //Change the <img1> to a Random Dice image
  var imgSource1 = ("dice" + randomNumber1 + ".png");
  var randomImage1 = document.querySelector(".img1");
  randomImage1.setAttribute("src", imgSource1);
  return randomNumber1;
}
var score1 = player1Score();

//DICE OF PLAYER 2
function player2Score() {
  //Create a Random Number 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  //Change <img2> to a Random Dice image
  var imgSource2 = ("dice" + randomNumber2 + ".png");
  var randomImage2 = document.querySelector(".img2");
  randomImage2.setAttribute("src", imgSource2);
  return randomNumber2;
}
var score2 = player2Score();

//Change the H1 Title to Display a Winner
function draw() {
  if (score1 === score2) {
    var announcement0 = document.querySelector("h1").innerHTML = "It's a tie! Draw again!";
  } else if (score1 > score2) {
    var announcement1 = document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
  } else {
    var announcemen2 = document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  }
}
console.log(draw());
