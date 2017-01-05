var numbers = [1, 2, 3, 4]

var newNumbers = []
for (var i = 0; i < numbers.length; i++) {
	newNumbers[i] = numbers[i] * 2
}

numbers.forEach(function(number) {
	console.log(number)
})

numbers.forEach(function(number, i) {
         numbers[i] = number * 2
         console.log(numbers[i])
      })


var newNumbers2 = numbers.map(function(number) {
	return number * 2
})

console.log(newNumbers2)
console.log(numbers)


function meetBonfire(argument) {
	console.log("you can read this in the developer tools")

	return false;
}

meetBonfire("you can do this!")



function awesome() {
    return 7;
}


console.log(awesome)


// Async
function now() {
    return 9;
}

function later() {
    answer = answer * 2;
    console.log( "Meaning of life:", answer );
}

var answer = now();

setTimeout( later, 1000 );

// Async different environment, different outcomes code
var a = {
    index: 1
};

// later
console.log( a ); // ??

// even later in most environments output will be { index: 1 } 
a.index++;
/* but in some it might be { index: 2 } just like if code below were placed right after the a object.
be aware of this possible asynchronicity in I/O in case you ever run into issues in debugging where 
objects have been modified after a console.log(..) statement and yet you see the unexpected modifications show up
If you run into this rare scenario, the best option is to use breakpoints in your JS debugger instead of relying on console output. The next best option would
be to force a "snapshot" of the object in question by serializing it to a string, like with JSON.stringify(..).
 */

 
var numbs  = [1, 2, 3, 4, 6, 9, 7, 8, 10, 5, 3, 12]

var evens = numbs.filter(function(numb) {
	return numb % 2 == 0
})

console.log(evens)

// run to completion
var a = 1;
var b = 2;

function foo() {
    a++;
    b = b * a;
    a = b + 3;
}

function bar() {
    b--;
    a = 8 + b;
    b = a * 2;
}

console.log(foo)
console.log(bar)

// noninteracting
var res = {};

function foo(results) {
    res.foo = results;
}

function bar(results) {
    res.bar = results;
}

// ajax(..) is some arbitrary Ajax function given by a library
console.log(foo)
console.log(bar)



// xhr

var res = [];

function reqListener () {
  console.log(this.responseText);
  res.push( this.responseText );
}

 

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();



// xhr 2
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        console.log(readBody(xhr));
    }
}
xhr.open('GET', 'http://localhost:9100/v1/arcades', true);
xhr.send(null);

// xhr 3
var res = [];

function response(data) {
    if (data.url == "http://www.google.com") {
        res[0] = data;
    }
    else if (data.url == "http://localhost:9100/v1/arcades") {
        res[1] = data;
    }
}

// ajax(..) is some arbitrary Ajax function given by a library
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.google.com");
oReq.send();

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:9100/v1/arcades");
oReq.send();


