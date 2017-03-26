function foo(x) {
	y = x * 2;
	z = x * 3;

}

var y = 2, z = 3;

foo(5);



foo(5);

console.log(z);



// Wait it's this

for (var i = 0; i<= 9; i= i + 1) {
console.log(i);
}

var totalnumbertests = 3;
var testsigotright = 1;

// And now, of course, this
if (testsigotright <= totalnumbertests) {
	console.log("Give me a job");
}

//function wrapped up
function bar(x,y,z) {
	foo(x);
	return [y,z];

	function foo(x) {
		y = y * x;
		z = y * x;
   
    console.log(y);
	
	}
	
	console.log(y);
}


bar(5,2,3);
bar(5,10,15);