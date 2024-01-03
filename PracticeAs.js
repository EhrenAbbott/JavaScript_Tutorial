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

let countEl = document.getElementById("count-el")

let count = 0;

function increment() { 
    count =  count + 1
    countEl.innerText = count

}

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
    //