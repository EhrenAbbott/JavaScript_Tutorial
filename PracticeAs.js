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









// !VOCAB! 

// to declare (a function): 
        // to write out or create a function without neccessarily using it yet

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
