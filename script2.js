document.getElementById("option1").style.display = "none";
document.getElementById("option2").style.display = "none";
document.getElementById("option3").style.display = "none";

function onClick1() {
  document.getElementById("option1").style.display = "block";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option2").style.display = "none";
}

function onClick2() {
  document.getElementById("option2").style.display = "block";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option1").style.display = "none";
}

function onClick3() {
  document.getElementById("option3").style.display = "block";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "none";
}
