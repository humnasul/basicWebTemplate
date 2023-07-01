/* NORMALLY I WOULD MAKE EACH BUTTON LEAD TO A SEPARATE PAGE, BUT I WANTED TO INCLUDE THIS STRATEGY AS AN OPTION - THE SEPARATE PAGES WAS DONE WITH THE TRANSITION FROM FIRST TO SECOND PAGE
*/

document.getElementById("option1").style.display = "none";
document.getElementById("option2").style.display = "none";
document.getElementById("option3").style.display = "none";
document.getElementById("option4").style.display = "none";
document.getElementById("option5").style.display = "none";
document.getElementById("option6").style.display = "none";


function onClick1() {
  document.getElementById("option1").style.display = "block";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option4").style.display = "none";
  document.getElementById("option5").style.display = "none";
  document.getElementById("option6").style.display = "none";
}

function onClick2() {
  document.getElementById("option2").style.display = "block";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option4").style.display = "none";
  document.getElementById("option5").style.display = "none";
  document.getElementById("option6").style.display = "none";
}

function onClick3() {
  document.getElementById("option3").style.display = "block";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option4").style.display = "none";
  document.getElementById("option5").style.display = "none";
  document.getElementById("option6").style.display = "none";
}

function onClick4() {
  document.getElementById("option4").style.display = "block";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option5").style.display = "none";
  document.getElementById("option6").style.display = "none";
}

function onClick5() {
  document.getElementById("option5").style.display = "block";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option4").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option6").style.display = "none";
}

function onClick6() {
  document.getElementById("option6").style.display = "block";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option4").style.display = "none";
  document.getElementById("option5").style.display = "none";
}
