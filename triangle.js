
"use strict";



// constructor function for creating triangle objects
function Triangle(sOne, sTwo, sThree) {

  if(!(this instanceof Triangle)){
    return new Triangle(sOne, sTwo, sThree);
  }

  this.type= "Triangle";

  this.sOne = sOne;
  this.sTwo = sTwo;
  this.sThree = sThree;
  
  };


module.exports = Triangle;


