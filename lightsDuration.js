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

/*arrayX = {nr, nf, nl, wr, wf, wl, sr, sf, sl, er, ef, el}*/;

const myFunc = () => {
res = String(Number(nr.value) - Number(nf.value));
if (nf.value !=0 || nr.value != 0) {
	let pokusaj = document.createElement("p");
	let tekst = document.createTextNode(res);
	console.log(nr.value, nf.value, nl.value, wr.value, wf.value, wl.value, sr.value, sf.value, sl.value, er.value, ef.value, el.value);

	result.appendChild(pokusaj);

	pokusaj.appendChild(tekst);
} else {
	alert("input vehicle numbers")
}
}

result.addEventListener("click", myFunc);

