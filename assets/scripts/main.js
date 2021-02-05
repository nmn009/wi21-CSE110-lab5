// main.js
var slider = document.getElementById("volume-slider");
		var num = document.getElementById("volume-number");
		document.getElementById("demo").innerHTML = slider.value;
		num.value = slider.value;
		slider.oninput = function() {
  			document.getElementById("demo").innerHTML = this.value;
  			num.value = this.value;
		}
		num.oninput = function (){
			document.getElementById("demo").innerHTML = this.value;
    			slider.value = this.value;
		}
// TODO
