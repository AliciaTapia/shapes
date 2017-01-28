
"use strict";

// requiring our module exported from triangle.js
var Triangle = require("./triangle.js");


// requiring our module exported from triangle.js
var Square = require("./square.js");


// requiring our module exported from triangle.js
var Pentagon = require("./pentagon.js");


//create a Shape constructor as a parent object

function Shape(type) {
	if(!(this instanceof Shape)){
		return new Shape (type);
	}
	this.type = type;
	};

//adding property function to get type in Shape prototype 
//and link between Shape and the child inherited from Shape.
Shape.prototype.get_type = function (){
console.log("you are calling '"  + this.type + " of shape")
		
return;

}
//Triangle is instance object of Shape and inherit property of Shape prototype
Triangle.prototype = new Shape();  // Here's where the inheritance occurs 
Triangle.prototype.constructor = Triangle; // Otherwise instances of Triangle would have a constructor of Shape 

// First reset prototype...
//Square is instance object of Shape and inherit property of Shape prototype
Square.prototype = new Shape(); // Here's where the inheritance occurs 
Square.prototype.constructor = Square; // Otherwise instances of square would have a constructor of Shape

Pentagon.prototype = new Shape(); // Here's where the inheritance occurs 
Pentagon.prototype.constructor = Pentagon; // Otherwise instances of square would have a constructor of Shape

//creating new child objects for each Triangle, Sqaure and Pentagon constructors
var theTriangle = new Triangle(5,7,10);
var theSquare = new Square(8);
var thePentagon = new Pentagon(5,6,7,8,4);

//console log to ensure each child object inherited get_type property from Shape prototype
console.log(theTriangle.get_type());
console.log(theSquare.get_type());
console.log(thePentagon.get_type());

// Ensuring instanceof works as expected.
console.log(theTriangle instanceof Triangle);
console.log(theTriangle instanceof Shape);
console.log(thePentagon instanceof Square);
console.log(thePentagon instanceof Shape);
console.log(theSquare instanceof Pentagon);
console.log(theSquare instanceof Shape);
 