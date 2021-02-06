// main.js
var slider = document.getElementById("volume-slider");
var num = document.getElementById("volume-number");
var soundimage = document.getElementById("volume-image");
var audiobtn = document.getElementById("honk-btn");
slider.oninput = function() {
  num.value = this.value;
  changespeaker();
}
num.oninput = function () {
  slider.value = this.value;
  changespeaker();
}
function changespeaker() {
  if (slider.value > 66) {
    soundimage.src = "https://nmn009.github.io/wi21-CSE110-lab5/assets/media/icons/volume-level-3.svg";
  } else if (slider.value < 67 && slider.value > 33){
    soundimage.src = "https://nmn009.github.io/wi21-CSE110-lab5/assets/media/icons/volume-level-2.svg";
  } else if (slider.value == 0){
    soundimage.src = "https://nmn009.github.io/wi21-CSE110-lab5/assets/media/icons/volume-level-0.svg";
  } else {
    soundimage.src = "https://nmn009.github.io/wi21-CSE110-lab5/assets/media/icons/volume-level-1.svg";
  }
  if (slider.value == 0){
    audiobtn.disabled = true;
  } else {
    audiobtn.disabled = false;
  }
}
// TODO
