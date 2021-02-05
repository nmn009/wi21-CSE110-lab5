// main.js
var slider = document.getElementById("volume-slider");
var num = document.getElementById("volume-number");
var soundimage = document.getElementById("volume-image");
slider.oninput = function() {
  num.value = this.value;
  changespeaker();
}
num.oninput = function () {
  slider.value = this.value;
  changespeaker();
}
function changespeaker(){
  if (slider.value > 66){
    soundimage.src= "./assets/media/icons/volume-level-3.svg";
  } else if (slider.value > 33 && slider.value < 67){
    soundimage.src= "./assets/media/icons/volume-level-2.svg";
    else if (slider.value == 0){
      soundimage.src= "./assets/media/icons/volume-level-0.svg";
    } else {
      soundimage.src= "./assets/media/icons/volume-level-1.svg";
    }
}
// TODO
