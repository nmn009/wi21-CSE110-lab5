// main.js
var slider = document.getElementById("volume-slider");
var num = document.getElementById("volume-number");
var soundimage = document.getElementById("volume-image");
slider.oninput = function() {
  num.value = this.value;
  speaker();
}
num.oninput = function () {
  slider.value = this.value;
  speaker();
}
function speaker(){
  if (num.value > 66){
    soundimage.src = "./assets/media/icons/volume-level-3.svg";
  } else if (num.value > 33 && num.value < 67){
    soundimage.src = "./assets/media/icons/volume-level-2.svg";
    else if (num.value > 0 && num.value < 34){
      soundimage.src = "./assets/media/icons/volume-level-1.svg";
    } else {
      soundimage.src = "./assets/media/icons/volume-level-0.svg";
    }
}
// TODO
