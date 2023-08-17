var numberOfDrum = document.querySelectorAll(".drum").length;
// function Audio(fileLoction){
//     this.fileLoction = fileLoction;
//     this.play = function(){

//     }
// }


// Detecting Button Pressed!!
function music() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
  //   switch (buttonInnerHtml) {
  //    case "w":
    //   var s0 = new Audio("sounds/crash.mp3");
    //   s0.play();
    //   break;
    // case "a":
    //   var s1 = new Audio("sounds/kick-bass.mp3");
    //   s1.play();
    //   break;
    // case "s":
    //   var s2 = new Audio("sounds/snare.mp3");
    //   s2.play();
    //   break;
    // case "d":
    //   var s3 = new Audio("sounds/tom-1.mp3");
    //   s3.play();
    //   break;
    // case "j":
    //   var s4 = new Audio("sounds/tom-2.mp3");
    //   s4.play();
    //   break;
    // case "k":
    //   var s5 = new Audio("sounds/tom-3.mp3");
    //   s5.play();
    //   break;
    // case "l":
    //   var s6 = new Audio("sounds/tom-4.mp3");
    //   s6.play();
    //   break;

    // default:
    //   console.log(buttonInnerHtml);
    //   break;
  //   }
}


// Detecting Keyboard Pressed!!
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener( "click", music // Named Function
    //   document.querySelectorAll(".drum")[i].addEventListener("click", function(){ line 9-43 write} - Anonymous Function

    // Constructor Function
    // s0.play();
    // s1.play();
    // s2.play();
    // s3.play();
    // s4.play();
    // s5.play();
    // s6.play();
  );
}
// Sounds come
function makeSound(key) {
  switch (key) {
    case "w":
      var s0 = new Audio("sounds/crash.mp3");
      s0.play();
      break;
    case "a":
      var s1 = new Audio("sounds/kick-bass.mp3");
      s1.play();
      break;
    case "s":
      var s2 = new Audio("sounds/snare.mp3");
      s2.play();
      break;
    case "d":
      var s3 = new Audio("sounds/tom-1.mp3");
      s3.play();
      break;
    case "j":
      var s4 = new Audio("sounds/tom-2.mp3");
      s4.play();
      break;
    case "k":
      var s5 = new Audio("sounds/tom-3.mp3");
      s5.play();
      break;
    case "l":
      var s6 = new Audio("sounds/tom-4.mp3");
      s6.play();
      break;

    default:
      console.log(buttonInnerHtml);
      break;
  }
}

function buttonAnimation(currentkey){
  var activeKey = document.querySelector("." + currentkey);
  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);
}
