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

// 8.  Add an item to the end of an array

// myArray.push("new item")

// ########################################################################################

// 9. Remove the last item from an array

// newArray.pop()

// ########################################################################################

// 10. Write a for loop with the appropriate conditions

// for ( let count = 1; count < 11; count += 1 ) { 
//     console.log(count)
// }

// NOTE: a for loop always begins with the 'for' keyword. The first condition is 
// the starting point of the array, the second condition is the finish condition, or,  
// the number that the loop will not exceed (it may not always include this number depending
// on the third condition). The third condition is the step size, much determines the increment.
// These conditions determine how many times the code (in the curly brackets) runs. 
// The variable "count" is declared here in the for loop but it could be anything; it
// is often just called 'i'

// ########################################################################################

// 11. Write a for loop that logs each item in the following array: 

// let messages = [ 
//     "hi",
//     "how",
//     "are", 
//     "you?"
// ]

// for (let i = 0; i < messages.length; i += 1) { 
//     console.log(messages[i])
// }

//NOTE: i += 1 can be replaced with i++ to make it more succinct

// ########################################################################################

// 12. Loop through the folloing array and display every item in it.
//     Assume a paragraph element with the id of greeting-el

// let sentence = ["Hello ", "my ", "name ", "is ", "..."] 
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++ ){ 
//     greetingEl.textContent += sentence[i]
// }

//NOTE: After .textContent you need to use += in order to maintai the words that were
// previously rendered, or else it would just render the last word 

// ########################################################################################

// 13. Generate a random number and assign it to a variable

// let randomNumber = Math.random() 

// NOTE: This generates a random number between 0 and .999999 (INclusive of zero, but EXclusive of 1)

// ########################################################################################

// 14. Do the above, but expand the upper range range from .999 etc. to 100

// let randomNumber = Math.random() * 100

// NOTE: The lowest number remains 0, but now the upper limit is 99.9 repeater. 
// The upper range will always be the number you multiple by minus .1 repeater

// ########################################################################################

// 15. Used a built in to take a number ending in a decimal, round it down, and assign it to a variable

// let roundedNumber = Math.floor(4.999)

// NOTE: .floor will always round DOWN no matter how many number there are after the decimal
// and regardless of what the numbers are. 1.00000001 and 1.999999 would both 
// become 1

// ########################################################################################

// 16. Generate a random number between 0 and 5.

// let randomNum = Math.floor( Math.random() * 6 )

// NOTE: Remember that because it is rounded down and inclusive of 0, the range will always
// be from 0 to one less than the number being multiplied, in this case, 6.

// ########################################################################################

// 17. Generate a random number from a specific range: from 1 to 6.

// let randomNumber = Math.floor( Math.random() * 6 ) + 1

// NOTE: Since the lower limit naturally 0, we need to add 1 to make that the new lower range. 
// So, the upper limit is determined by the multiplier, and the lower limit is the addend.

// ########################################################################################

// 18. Write an if statement that evaluate to true if two conditions are met

// if (condition1 && condition2) { 
//     console.log("yes")
// } else { 
//     console.log("no")
// }

// NOTE: Just saying if (condition1) etc. would be the same as saying
// if (condition1 === true) etc.. The former is just shorthand for writing out the 
// full Boolean.

// ########################################################################################

// 19. Write an if statment that evaluates to true if one of two conditions are met

// if (condition1 === true || condition2 === true){ 
//     console.log("yes")
// }

// ########################################################################################

// 20. Use dot notation to log data from the  "lessons" key in the following object: 
//      Then do the same but with bracket notation.

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16
// } 

// console.log(course.lessons)
//console.log(course["lessons"])

// NOTE: with bracket notation the key name must be in quotes, but with dot notation 
// it cannot be in quotes.
// Dot notation is usually preferred unless bracket notation is required for specific reasons. 

// ########################################################################################

// 21. Create a method in an object and invoke it. 

// let player = {
//     sayHello: function() {
//         console.log("Hello!")
//     }
// }

// player.sayHello()

// NOTE: The key essentially function as the method name when it comes to invoking it
// and parentheses must go after it.

// ########################################################################################

// 22. Remove the first item of the following array. 
//      Next, add an item to the beginning of an array.

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.shift()
// largeCountries.unshift("China")

// ########################################################################################

// 23. Working with the following button in html,
//      a) assign the element to a JS variable 
//      b) When clicked, make the button console.log something (via a function) 
//      WITHOUT using onclick in the html

//------index.html------
// <button id="input-btn">SAVE INPUT</button>

//-----index.js-----
// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() { 
//     console.log("Clicked!")
// })

// NOTE: The first parameter, "click", is used to define what the 
// specific event is that will trigger the function that follows.
// The advantage of this way of doing things is that it results in a cleaner
// separation of concerns, where the html has no event listeners

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

// method: 
    // a function performed on an object or a property containing 
    // a function definition

// step size: 
    // the third condition of a for loop to specifies the size of the increment

// DRY: 
    // a concept in coding that stands for "don't repeat yourself"; Meaining, don't write 
    // more code than you need to, especially if you are just repeating the same code 
    // in favor of using scalable code 

// hoisting: 
    // when someting, such as a function, is declared further down in the code but
    // is actually accessible in lines previous to its declaration

// function declaration: 
    // a specific way of writing a function that allows it to be hoisted.
    // The general format is: 
    // function myFunc() { 
        // return XYZ
    // }

// intrinsic object: 
    // also called a "built-in", this is something that is naturally supported
    // by the language itself and doesn't require any other imports or packages 
    // to be installed. Examples include: Math, JSON, console, Date, window

// key-value pair: 
    // the sets of data within an object where the key is like a name (which
    //  comes before the colon), and the value is the data (following the colon)
    // that is associated with the key.

// dot notation: 
    // a way of retrieving data stored in a object. Ex: OBJ_NAME.KEY will give us the value, 
    // which could be an integer, string, Boolean or any other data type.
    // Typically preffered over bracket notation. 

// bracket notation: 
    // an alternate way of getting data from an object. Ex: OBJ_NAME["KEY"]

// property (of an object): 
    // a concept representing the keys and values contained within an object. 
    // A property itself doesn't correspond to any concrete JS value, rather it
    // is the association of key: "value" as a pair.

// comparison operator: 
    // refers to the group of symbols like <=, >=, === etc. that are used to 
    // contrast values or quantities

// logical operators: 
    // the symbols such as ||, &&, that check for certain conditions to be true or false

// void / empty / self-closing (tag)
    // a type of tag in HTML that does not requires a closing tag,
    // such as <p></p> and instead exists sole with the opener, such as <input>

// const vs. let (assigning variables)
    // Const is used to make a a variable that cannot be later reassigned, wheras 
    // let is used for variabels that can be reassigned
    // The usage of these two variables also indicates the intentions of the programmer: 
    // when you see let, you know the value will/should be reassigned later in the code.
    // In general: if possible, use const. If not. use let.
