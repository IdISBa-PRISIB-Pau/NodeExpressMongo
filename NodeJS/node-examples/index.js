var rect = require('./rectangle');

function solveRect(l, b) {
	console.log("Resolvent el rectangle l = " + l + " i b = " + b);
	if ( l <= 0 || b <= 0){
		console.log("Rectangle dimensions should be greater than 0. l = " + l + " b = " + b)
	}else{
		console.log("L'àrea és " + rect.area(l,b));
		console.log("El perimetre és " + rect.perimeter(l,b));
	}
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,4);
solveRect(-1,9);