// Non-primitive data types -> (The data types that are derived from primitive data types of the JavaScript language 
// are known as non-primitive data types. It is also known as derived data types or reference data types.)
//   1.Arrays
//   2.Objects
//   3.function

// fn define
// When you pass an object as a parameter, if the function changes the object's properties
// that change is visible outside the function, as shown in the following example:
function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; // x gets the value "Honda"
  console.log(x);

  //fun calling
  myFunc(mycar);
  y = mycar.make; // y gets the value "Toyota"
  console.log(y); // (the make property was changed by the function)

// Parameters are essentially passed to functions by value — so if the code within the body of a function assigns
// a completely new value to a parameter that was passed to the function, the change is not reflected globally or 
// in the code which called that function.
  function returnValue(a){
      a = 10;
      return a;
  }
  var b = 2;
  console.log(returnValue(b));
  console.log(b);