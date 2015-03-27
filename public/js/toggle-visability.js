

function toggle_visability(id){
	//retrieves element from DOM that matches id.
	var toggle = document.getElementById(id);
	// tertiary operator that will toggle between  visable and invisable depending on the current state on the DOM.
	toggle.style.display == 'block' ? toggle.style.display = 'none': toggle.style.display = 'block';
	
}