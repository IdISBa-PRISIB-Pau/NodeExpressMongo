var rect = require('./rectangle');

function solveRect(l, b) {
	console.log("Resolent el rectangle l = " + l + " i b = " + b);
	rect(l, b, (err, rectangle) => {
		if(err){
			console.log("Error: ", err.message);
		}else{
			console.log("Area = " + rectangle.area());
			console.log("Perimetre = " + rectangle.perimeter());
		}
	});
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,4);
solveRect(-1,9);
