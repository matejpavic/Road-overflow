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

const myFunc = () => {
	//---------loading------------
	document.getElementById("solution").innerHTML = "LOading solution";
	res = String(Number(nr.value) - Number(nf.value));
	//Checking if there is need for a thir phase?
	if ((nl.value > 200) || (wl.value > 200) || (sl.value > 200) || (el.value > 200)) {
		document.getElementById("solution").innerHTML = "Third fase NEEDED!";
		} else {
			document.getElementById("solution").innerHTML = "Third fase NOT needed!";
		}
		// ------------------------------------------------SOLUTION-------------------------------------------------------------------------
	if (nf.value !=0 || nr.value != 0) {
		console.log(nr.value, nf.value, nl.value, wr.value, wf.value, wl.value, sr.value, sf.value, sl.value, er.value, ef.value, el.value);
		document.getElementById("solutionText").innerHTML = `The interval last ${res}`;
	} else {
		alert("input vehicle numbers")
}
}

result.addEventListener("click", myFunc,);