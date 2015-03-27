var info = document.getElementById("info"), 
	speed = 300, 
	y, 
	supportPageOffset = window.pageXOffset != undefined,
	isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

window.onscroll = function(y){
	y= supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrolTop;

	info.style.opacity = 1-(y/speed);
}
