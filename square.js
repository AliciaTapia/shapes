
"use strict";

// requiring our module exported from triangle.js
var Shape = require("./shape.js");


function Square(side) {
	if(!(this instanceof Square)){
		return new Square (side);
	}
	this.type= "Square";

	this.side= side;

};


module.exports=Square;