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