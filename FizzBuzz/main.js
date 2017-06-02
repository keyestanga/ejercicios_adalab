'use strict';
for(var i=1; i<=100; i++){
  var multiploTres= i%3===0;
  var multiploCinco= i%5===0;

  if(multiploTres && multiploCinco){
    console.log("FizzBuzz");
  }else if(multiploTres){
    console.log("Fizz");
  } else if(multiploCinco){
    console.log("Buzz");
  }else {
    console.log(i);
  }
}
