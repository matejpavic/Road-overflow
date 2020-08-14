let nr = document.getElementById("north-right");
let nf = document.getElementById("north-forward"); 
let nl = document.getElementById("north-left");
let wr = document.getElementById("west-right");
let wf = document.getElementById("west-forward");
let wl = document.getElementById("west-left");
let sr = document.getElementById("south-right");
let sf = document.getElementById("south-forward");
let sl = document.getElementById("south-left");
let er = document.getElementById("east-right");
let ef = document.getElementById("east-forward");
let el = document.getElementById("east-left");

let result = document.getElementById("result"); 

// Deleting the lane

const deleteLane = (el) => {
	let element = el;
	element.parentNode.remove();
};

// Main function that does all the work
const myFunc = () => {
	//---------loading------------
	document.getElementById("solution").innerHTML = "Loading solution";
	res = String(Number(nr.value) - Number(nf.value));
	//Checking if there is need for a thir phase?
	if ((nl.value > 200) || ((nl.value * sf.value) > 50000)) {
		document.getElementById("solution").style.backgroundColor = "red";
		document.getElementById("solution").innerHTML = "Third fase NEEDED for NORTH-SOUTH!";
	} else if ((sl.value > 200) || ((sl.value * nf.value) > 50000)) {
		document.getElementById("solution").style.backgroundColor = "red";
		document.getElementById("solution").innerHTML = "Third fase NEEDED for NORTH-SOUTH!";
	} else if ((el.value > 200) || ((el.value * wf.value) > 50000)) {
		document.getElementById("solution").style.backgroundColor = "red";
		document.getElementById("solution").innerHTML = "Third fase NEEDED for EAST-WEST!";
	} else if ((wl.value > 200) || ((wl.value * ef.value) > 50000)) {
		document.getElementById("solution").style.backgroundColor = "red";
		document.getElementById("solution").innerHTML = "Third fase NEEDED for EAST-WEST!";
	} else {
			document.getElementById("solution").style.backgroundColor = "green";
			document.getElementById("solution").innerHTML = "Third fase NOT needed!";
	}
		// ------------------------------------------------SOLUTION-------------------------------------------------------------------------
	if (nf.value !=0 || nr.value != 0) {
		document.getElementById("solutionText").style.backgroundColor = "#5371f9";
		document.getElementById("solutionText").innerHTML = `The interval last ${res} seconds`;
	} else {
		alert("input vehicle numbers")
}
}


result.addEventListener("click", myFunc);