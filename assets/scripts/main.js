// main.js
var slider = document.getElementById("volume-slider");
var num = document.getElementById("volume-number");
slider.oninput = function() {
  num.value = this.value;
}
num.oninput = function (){
   slider.value = this.value;
}
// TODO
