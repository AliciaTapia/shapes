"use strict";


// requiring our module exported from triangle.js
var Shape = require("./shape.js");


function Pentagon(s1,s2,s3,s4,s5) {
	if(!(this instanceof Pentagon)){
		return new Pentagon (type);
	}

	this.type = "Pentagon";


	this.s1= s1;
	this.s2=s2;
	this.s3=s3;
	this.s4=s4;
	this.s5=s5;

};

module.exports=Pentagon;