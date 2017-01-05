// Lesson 1
/* In this snippet, 
The b variable and the doSomethingElse(..) 
function are likely “private” details of how doSomething */

function doSomething(a) {
b = a + doSomethingElse( a * 2 );
        console.log( b * 3 );
    }
function doSomethingElse(a) { return a - 1;
}
var b;
doSomething( 2 ); // 15


//A more “proper” design would hide these private details inside the scope of doSometh ing(..), such as below:

/*
Now, below, b and doSomethingElse(..) are not accessible to any outside influence,
 instead controlled only by doSomething(..). 
 The func‐ tionality and end result has not been affected, 
 but the design keeps private details private, which is usually considered better software.
 */

function doSomething(a) { 
	function doSomethingElse(a) {
return a - 1; }
var b;
        b = a + doSomethingElse( a * 2 );
        console.log( b * 3 );
    }
doSomething( 2 ); // 15



// Lesson 2  Next lesson, add information here for code below, regarding collision.

//Below is the not so good way, but it works!
var a = 2;
function foo() { // <-- insert this
var a = 3; console.log( a ); // 3
} // <-- and this foo(); // <-- and this
console.log( a ); // 2

// Here! Below is the Better or possibly correct way.
var a = 2;
(function foo(){ // <-- insert this
var a = 3; console.log( a ); // 3
})(); // <-- and this console.log( a ); // 2


// Lesson 3 ! Anonymous Versus Named.

/*This is called an anonymous function expression,
 because function() ... has no name identifier on it. 
 Function expressions can be anony‐ mous, 
 but function declarations cannot omit the name—that would be illegal JS grammar.*/
setTimeout( function(){ 
	console.log("I waited 1 second with an anonymous function!");
}, 1000 );
// Anonymous functions have no useful name to display in stack traces, which can make debugging more difficult.

/*Providing a name for your function expression quite effectively addresses all the draw- backs,
 but has no tangible downsides. 
 The best practice is to always name your function expressions:*/
 setTimeout( function timeoutHandler(){ // <-- Look, I have a // NAME!!!!!!!!!!
        console.log( "I waited 2 seconds and used a named function!" );
    }, 2000 );

// Invoking Function Expressions Immediately.
/* Now that we have a function as an expression by virtue of wrapping it in a ( ) pair,
 So now we can execute that function by adding another () on the end,
 like (function foo(){ .. })(). The first enclosing ( ) pair makes the function an expression, 
 and the second () executes the function.*/
var a = 1; (function foo() {
var a = 3; console.log( a ); // 3
})(); // <-- this last enclosing pair () invokes the function immediately.
console.log( a ); // 1
/*This immediately invoked function pattern is so common,
 a few years ago the community agreed on a term for it: IIFE, 
which stands for immediately invoked function expression.
*/



var k = {
    index: 3
};

// later
console.log( k ); // ??

// even later
k.index++;


for (var i=0; i<9; i++) 
	{ console.log( i );
}











for (let i=0; i<12; i++) 
	{ console.log( i );
}


// Why is below 9, ryan?
{
let j;
for (j=0; j<19; j++) {
let i = j; // re-bound for each iteration! console.log( i );
} }
console.log( i ); // ReferenceError