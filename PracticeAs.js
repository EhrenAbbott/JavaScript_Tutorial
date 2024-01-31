// ########################################################################################

// 1. 

//  a)Within the HTML code, link the javascript file 
//  b) Have the JS code modify th contents of an <h2> tag int the HTML file 

// ------------------index.html------------------------------------------

// <html>
//     <head>
//         <link rel="stylesheet" href="index.css">
//     </head>
//     <body>
//         <h2 id="count">0</h2>
//         <script src="index.js"></script>
//     </body>
// </html>

// ------------------doc.js------------------------------------------

// document.getElementById("count").innerText = 5

// ########################################################################################

// 2. Create a button that adds one to a value when clicked. 
//      a. Call the created function "increment" 

// ------------------index.html------------------------------------------

//      <h2 id="count-el">0</h2>
//      <button onclick="increment()">INCREMENT</button>


// ------------------doc.js------------------------------------------

// let countEl = document.getElementById("count-el")

// let count = 0;

// function increment() { 
//     count =  count + 1
//     countEl.innerText = count

// }

// NOTE: .innerText doesn't return things that are not human readable, such as
// spaces. Instead, .textContent can be used to return spaces or other "hidden" characters. 

// ########################################################################################

// 3. Concatenate the following two strings: 

// let firstname = "John"
// let lastname = "Doe" 

// console.log(firstname + lastname)

// NOTE: In JS the string will trump a number if you are concatenating them; 
// So, 5 (with a datatype of number) = "42" (with a data type of string) will equal "542" (data type string)

// ########################################################################################

// 4. Create a condition that console logs "more", "less" or same when a number is compared to 50.

// let number = 7; 

// if (number > 50) { 
//     console.log("more")
// } else if (number === 50){ 
//     console.log("same")
// } else { 
//     console.log("less")
// }

// NOTE: the triple equals sign, ===, is strict; it differentiates between strings and numbers, so "50" === 50 
// would not evaluate to true; however, the double equals allows strings to be compared to numbers so the same thing
// but with == instead of === would be a true statement. 

// ########################################################################################

// 5. Set a variable using a query selector to select an element by its ID.

// let myVar = document.querySelector("#sum-el")

// NOTE: .querySelector is broader, more dynamic so we have to be more specific with what we pass into it; 
// the hashtag lets it know that we are referring to an element with the CSS id of "sum-el" TO refer to a
// CSS class we would replace the hashtag with a period.
// Without anything in front of it (no period or hashtag), it would refer to the entire element (all child 
// elements contained within)

// ########################################################################################

// 6. Refer to the first item in an array called myArr

// myArr[0]

//NOTE: Arrays are zero-indexed, meaning that they start counting their number of
// items they contain from zero

// ########################################################################################

// 7. Find the length of an array

// myArr.length

//NOTE: the lengths of arrays are NOT zero indexed; an array with three 
// items has a length of three.

// ########################################################################################







// !VOCAB! 

// to declare (a function, variable): 
        // to write out or create a function or variable without neccessarily using it (function) or 
        // giving it a value (variable) yet

// to assign (a variable): 
        // to give a value to an already-declared variable

// to reassign (a variable): 
        // to change the value of a variable that has already been previously declared and given a value

//  to invoke, or, to call, or to run (a function):
        // to implement a function after it has been declared

// global scope (for variables): 
        // the outer-most scope of a variable; not declared inside a function
        // these are accessible both inside and outside a function 

//  block-scoped (for variables):
        // variables that have been declared inside a block (the main part; the body) of a function; 
        // block-scoped variables only live inside the block in which they were created; 
        // they cannot be accessed outside of this function

//  camel case: 
    // the convention of writing variables in JS with the first word starting with a lowercase letter
    // and all subsequent words starting with an uppercase letter. Ex: camelCase  

// to pass in an arugument: 
    // this refers to giving a function some sort of data to work with

// DOM: 
    // Stands for Document Object Model. On the most basic level this represents how you 
    // use JS to modify a website. 
    // Document - refers to the HTML document 
    // Object - the "document" keyword in JS is of the data type object. Essentially they've taken the HTML document and inserted it into a jS object
    // Model - a representation; In this case you have the real HTML element/file, and then you have the JS model representation, which is the "document" keyword

// string: 
    // a data type that essentially just refers to text. HTML only 
    // knows about/handles strings and has no awareness of other data types. 


// mdn: 
    // short for 'mozilla developer networks'; a great resource that contain extensive documentation
    // on a wide range of topics 

// font stack: 
    // a series of values for the CSS 'font' property; a font stack is a list of font names in quotes separated
    // by commas, the point of which is to act as a series of fallbacks for the operating system in case it does not allow the 
    //  browser to display the first, it will go down the list until on of the fonts can be displayed
    
// array: 
    // an ordered list of items. Ex: let myArr = ["hello", "there"];
    // any data type can go into an array, which makes it a composite data type AKA complex data type

// zero-indexing: 
    // the practice of starting to count elements in a sequence from 0 instead of one; so, the 
    // initial item in array woudl have an index of 0, and the second item would have an index of 1 

// composite data type (AKA: complex data type): 
    // a data type made of of multiple items that can each have different data types 
    // Arrays and objects are complex.

// primitive data type: 
    // A data type that is not composed of multiple different data types
    // Examples include: strings, numbers, and Booleans


