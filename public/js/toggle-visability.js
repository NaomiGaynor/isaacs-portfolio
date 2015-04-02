

function toggle_visability(id){
	//retrieves element from DOM that matches id.
	var toggle = document.getElementById(id);
	// tertiary operator that will toggle between  visable and invisable depending on the current state on the DOM.
	toggle.style.display == 'block' ? toggle.style.display = 'none': toggle.style.display = 'block';
	
}

document.getElementById('title').addEventListener('click', function(){
	document.getElementById('about-wrapper').style.height = "316px";
});

document.getElementById('close-slidedown').addEventListener('click', function(){
	document.getElementById('about-wrapper').style.height = "0px";
})