// xhr 1, vanilla javascript
var res = [];

function reqListener () {
  console.log(this.responseText);
  res.push( this.responseText );
}

 

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:9100/v1/arcades");
oReq.send();

//node file system
var fs = require('fs');
fs.readFile('./resource.json', function (er, data) {
	console.log(data);
})