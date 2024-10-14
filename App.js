  // FUNCTIONS 

//   1. Write a function that displays current date & time in your
// browser.

// function Datetime(){

//     var date =  new Date();
//     document.write(`<h1>${date}</h1>`)

// }
// Datetime();

// --------------------------------------------------------------------------------------

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet (name,lastname){

//     if(name =="" || lastname ==""){

//     alert("Enter valid name.");
//      return;
//     }   

//     else{
//     alert(`HI Mr/Ms ${name} ${lastname}`);
// }
// }

// var name ,lastN
// name =prompt("Enter your First name");
// lastN = prompt("Enter your last name:");
// greet(name,lastN);

// ------------------------------------------------------------------------------------------------------------

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function Addition(num1,num2){

// if(num1 == 0 || num2 == 0){

//     alert("Enter valid Number.");
//     return;
// }

// else{

//     alert(`The sum of ${num1} and ${num2} = ${num1+num2}`);
// }

// }

// var num1 = +prompt("Enter Number 1:");
// var num2 = +prompt("Enter Number 2:");

// Addition(num1,num2);


// -------------------------------------------------------------------------------------------------------

// 4. Write a function that computes factorial of a number.

/*function Factorial (number){

    var result = 1 ;

    if(number === 0|| number < 0){

        alert("Number can not be zero or negative");
        return;
    }

    else{

    for(var i =1 ; i<=num; i++ ){

        result = result * i ;

    }
    alert(`The Factorial of the number is: ${result}`);
}
}

var num = +prompt("Enter the number to find its factorial:");
Factorial(num);
*/


// ------------------------------------------------------------------------------------------------------------------

// 5. Write a function that take start and end number as inputs
// & display counting in your browser.

/*
console.log("Counting is:")
function Counting(start , end){

for(var i =start; i<=end;i++){
    console.log(i)
}

}
var start = +prompt("Enter the starting number for table:");
var end = +prompt("Enter the ending number for table:");

Counting(start,end);
*/

// ----------------------------------------------------------------------------------------------------------

// 6. Write a function that calculates the area of a rectangle.

/*function Rectangle (width, height){

var area = width * height;

alert(`The Area of Rectangle is : ${area}`);

}

var width = +prompt("Enter the width of rectangle:");
var height = +prompt("Enter the height of rectangle:");
Rectangle(width,height);

*/


// ------------------------------------------------------------------------------------------

        // EVENTS IN JS

/* 1.Show an alert box on click on a link.

 function Alert(){
                                        "ON CLICK"
 alert("WELCOME TO THE PAGE.")

}*/ 

// -------------------------------------------------------------------

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

/* function Message (){

Swal.fire("Thanks for Purchasing phone.!");


 }*/

// ------------------------------------------------------------------------ 

// 3. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// function onmouse(element){
    
//     console.log(element);

//     element.style.width="600px"


// }

// function mouseout(element){

//     console.log(element);
//     element.style.width="400px"

// }

// ------------------------------------------------------------------------------------


// 4. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

/*
var counter = 0;

function increase(){

    counter++;
    update();
}

function Decrease(){

    counter--;
    update();
}

function update(){

 var total = document.getElementById("Count");

 total = total.innerText = counter;

}
 */

     
        
