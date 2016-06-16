// setTimeout(function(){
//   console.log("i waited for one second");
// }, 1000);

// var add = function(firstNumber){
//   return function(secondNumber){
//     return firstNumber + secondNumber;
//   }
// }

// var addFiveFunction = add(5);
// console.log (addFiveFunction(3));
//so here the addfivefunction is referring to line 6 and 7 where it represents the first number + (something in this case the second number)
//a function returning a function. 

//pass a function to a function CALL BACK

// var logRed = function(){
//   console.log("its red!");
// }

// var logNotRed = function(){
//   console.log("its not red!");
// }

// //these are first class objects

// var redChecker = function(colour, logRed, logNotRed){
//   if(colour === "red"){
//     logRed();
//   }
//   else{
//     logNotRed();
//   }
// }



// redChecker("blue", logRed, logNotRed);


//now lets pass in an argument
var logRed = function(message){
  console.log(message);
}

var logNotRed = function(){
  console.log("its not red!");
}

//these are first class objects

var redChecker = function(message, colour, func1, func2){
  if(colour === "red"){
    func1(message);
  }
  else{
    func2();
  }
}


redChecker("my message", "blue", logRed, logNotRed); //this order has to be the same as var redChecker


Write a function, functionCaller, that takes a function (myCallback) and a number as parameters. The functionCaller returns myCallback called with the number (as an argument).

var niceGreeting = function(message1){
  console.log(message) //
};

var uglyGreeting = function(message2){
  console.log(message)
};
  


var functionCaller = function(func1, func2, message1, message2){
 if ()
}
functionCaller(niceGreeting, uglyGreeting, "hello beautiful", "hello ugly")





//question1 
var callback = function(number){
  console.log(number);
}

var functionCaller = function(myCallback, arg){
return myCallback("my number is" + arg);
}

functionCaller(callback, 5);


//question2
// You give a friend 50p to get you something form the shop.

// Write a function getSomethingFromTheShop, that takes in budget (as a string) and a callback function.

// Invoke the callback function inside getSomethingFromTheShop and pass it two arguments (what you wanted from the shop and what you actually got).

// Finally, invoke the getSomethingFromTheShop function by passing it a string for the budget and an anonymous function as the callback.

// The anonymous callback function should have two parameters - req and res. (standing for request and response).

// In the getSomethingFromTheShop function include console.log("I have " + budget + " to go to the shop"); In the anonymous function include console.log("I wanted a " + req + " but all I got was a " + res);





//question3
// Maths Fun: Write two functions increment and square. increment should take in a number and return the number plus 1. square should take in a number and return it multiplied by itself.

// Write another function called doSomeMathsForMe that takes in a number (n) and a function (a callback) and executes the callback, passing in n as an argument.

// Invoke doSomeMathsForMe by passing it a number and the increment and/or square function.
