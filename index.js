function buttonClicked() {
  alert("Clicked");
}
var numberOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", soundMaker);
}
function soundMaker() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  console.log(buttonInnerHTML);
}
function makeSound(keyPressed) {
  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    default:
  }
}
document.addEventListener("keypress", function (event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
});
