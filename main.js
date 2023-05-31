var speedOpacity=30;
var greenOpacity=0;
function fadeInOpacity(){
	document.getElementById('green-square').style.opacity=greenOpacity/100;
	if (greenOpacity==100){
		return;
	}
	greenOpacity++;
	setTimeout(function(){fadeInOpacity()},speedOpacity);
}
window.addEventListener?
window.addEventListener('load',fadeInOpacity,false):
window.attachEvent('onload',fadeInOpacity);