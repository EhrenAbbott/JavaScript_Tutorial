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

// 24.  Create an input field and a corresponding button to submit the input.
//      Next, in the JS document, make the submit button push the input text to an array

// ------index.html------
//<input type="text" id="input-el"></input>
//<button id="input-btn">SAVE INPUT</button>

// ------index.js------
// const savedItems = []

// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() { 
//     savedItems.push(inputEl.value)
// })

// NOTE: The way to use the text that the user types into an input field 
// is to use .value after the JS input element variable

// ########################################################################################

// 25. From the following array, render each item as list items in a unordered list.

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

//NOTE: .innerHTML reads html tag in quotes as actual html elements, as opposed to other like
// .textContent or .innerText, which would have literally rendered the characers <li> onto the page
// instead of creating the desired elements with the correspodning content

// ########################################################################################

// 26. Assuming a div with the id "container", in the JS document, add a button in the div 
//      and, when clicked, render the text "Thank you!" under the button

// const container = document.getElementById("container")

// container.innerHTML = "<button onlick='buy()'>Buy!</button>"

// function buy() { 
//     container.innerHTML = "<p>Thank you!</p>"
// }

// ########################################################################################

// 27. Do number 25, but using a different JS method instead of .innerHTML. 
//      This will involve making a brand new element in JS.

// for (let i = 0; i < myLeads.length; i++) { 
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }

// NOTE: When using .createElement, you are not using the HTML brackets as tags, but rather 
// you are enclosing the contents of the <> inside quotation marks instead

// ########################################################################################

// 28. Do The above, but manipualte the DOM *as little* as possible

// let listItems = ""

// for (let i = 0; i < myLeads.length; i++){ 
//     listItems += "<li>" + myLeads[i] + "</li>"
// }

// ulEl.innerHTML = listItems

//NOTE: Remember the guiding principle, "DOM manipulation comes at a cost".
// With this in mind, it is good practice to see which of the possible strategies
// manipulates the DOM the fewest number of instances, and this will typically be the 
// optimal way fo doing things. In the above example, the DOM manipulation comes *outside* 
// the for loop, which is better than doing it multiple individual times for each item in the array.

// ########################################################################################

// 29. Assuming a JS button element called inputBtn and a corresponding input element called inputEl, 
//       write a function to clear the text that the user has entered in the input field

// inputBtn.addEventListener("click", function(){ 
//     inputEl.value = ""
// })

// ########################################################################################

// 30. Write a template string  for a HTML link that opens in a new page and uses a JS variable 
//      to indicate the web address.

// listItems = ` 
//     <a target='_blank' href='${myVar}'>
//         Click here! 
//     </a>
// ` 
// myDiv.innerHTML = listItems

// ########################################################################################

// 31. Add an a data pair to local storage.
//      Then, retrieve the value. 
//      Lastly, clear the item.

// localStorage.setItem("myLeads", "www.myleads.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

// NOTE: Notice that both the item and the value have the be strings. 
// Also, if you add something with .setItem and then delete that code, 
// that item will still be in localStorage. .clear() woudl have to be used 
// to get rid of it.
// 
// Values added to localStorage can *ONLY* be added as strings; to store another
// data type, such as an array, you would have to use JSON.stringify(var) on the array 
// you want stored.

// ########################################################################################

// 32. Assume the template string let myLeads = `["www.awesomeleads.com"]`
//  You want to push another website to this variable, but push can only be 
// used with arrays. How would you circumvent this and successfully add another 
// value to the variable as if it were an array and not a string? 
// NOTE: this is a situation that may arise when working with local storage, 
// as it only accepts strings and cannot be given an array.

// let myLeads = `["www.awesomelead.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

//NOTE: Now, the console.log for myLeads would yield the array ["www.awesomelead.com", "www.epiclead.com"]
// Where thr backticks escape an special charatcers such as quotes or brackets, 
// JSON.parse() sort fo tdoes the opposite and interprets the data 
// as if nothing had been escaped. After that point, the .push method can be used since 
// myLeads has become an array.

// ########################################################################################

// 33. Check the data type of a variable and display it in the console, all in one line. 
// let myLeads = `["www.awesomelead.com"]`

// console.log(typeof myLeads)

// ########################################################################################

// 34. Use a method to concert the following array into a string:

// let myLeads = ["www.awesomelead.com"]

// myLeads = JSON.stringify(myLeads)

// ########################################################################################

// 35. Assuming a button assigned to the JS variable myBtn, make the button 
// add a string to local storage. then console.log it

// myString = "hello"
// myBtn.addEventListener("click", function() { 
//     localStorage.setItem("my_string", JSON.stringify(myString))
//     console.log(localStorage.getItem("my_string"))
// })

// ########################################################################################

// 36. Retrieve the value for "myItem" from local storage (assume it has already be added) and set it as a variable 
// that can be used as an array 

// let myItem = `["www.site.com"]`

// let retrievedItem = JSON.parse(localStorage.getItem("myItem"))

// ########################################################################################

// 37. Check to see if a value is truthy or falsey
// console.log(Boolean("hello"))

// ########################################################################################

// 38. Assuming an html button with the id of "delete-btn", 
//      make the button delete the contents of a list (const ulEl), 
//      as well as localStorage when double clicked

// const deleteBtn = document.getElementById("delete-btn")

// deleteBtn.addEventListener("dblclick", function() { 
//     localStorage.clear()
//     ulEl = ""

// })

// ########################################################################################

// 39. Create a functions that takes multiple parameters. 
//      Have the function console log the arguments into a sentence. 

// function greetUser(greeting, name) { 
//     console.log(`${greeting}, ${name}!`)
// }

// ########################################################################################

// 40. Console log a object value nested inside an array.

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// console.log(tabs[0].url)

// ########################################################################################

// 41. Assume a button named myBtn. When clicked, use the Chrome API 
//      to console log the current browser tab the user is on.

// myBtn.addEventListener("click", function(){ 
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ 
//         console.log(tabs)
//     })
// })

// NOTE: chrome is an object that contains a key named 'tabs'. This key is also an object and contains 
// a method called query(). To specifiy which particular tab we need,we use an object with the key fo active
// to indicate the page we are currently one. We also indicate currentWindow to distinguish in the event that 
// there is a separate window open with other tabs.
// We are then making a function as the second argument 
// that will run once the tab is specified (the job of the first argument in the query method).
// The parameter, tabs, is given to us as a keyword by the Chrome API, and it is constructed 
// as an object inside an array, witht he object having a URL key and corresponding value (see #40)

// ########################################################################################

// 42. Starting with an array of image files, img, and assuming an HTMl div with the 
//      id of container, make a function that dynamically renders all of the 
//      items in the array in the container.

// const imgs = [
//     "images/hip1.jpg",
//     "images/hip2.jpg",
//     "images/hip3.jpg"
// ]

// const container = document.getElementById("container")

// function renderImgs() { 
//     let imgsDOM = ""
//     for (let i = 0; i < imgs.length; i++){ 
//         imgsDOM += `<img src="${imgs[i]}">`
//     }
//     container.innerHTML = imgsDOM
// }

// renderImgs()

// ########################################################################################

// 43. Round the number 430.698789 to two decimals.

// const num = 430.698789
// console.log(num.toFixed(2))

// NOTE: the difference between Math.floor() or Math.ceil() and .toFixed() is that the 
// first two actually just truncate a decimal into a whole number, and .toFixed() actually rounds 
// the number up or down the the decimal place indicated in the parenthses. 
// Math.floor(1.9999) would yield 1, and Math.ceil(1.1111) woudl yield 2, which 
// brings the number up or down to the next whole number regardless of which numbers 
// follow the decimal. However, .toFixed() actually uses the convention of rounding based on if the 
// decimal in question is five or greater. So 3.2229.toFixed(3) would yield 3.2223, and 3.2221.toFixed(3)
// would yield 3.222 .

// ########################################################################################

// 44. Use a method to convert a string of numbers to a number 

// let num = "345546"
// console.log(Number(num))

// ########################################################################################

// 45. Assume a JS document with functions. Add the correct tag to the HTML so that the JS functions may 
//      be exorted and imported to other files in the project.

{/* <script src="filename.js" type="module"></script> */}

// ########################################################################################

// 46.  Assume an app with the HTML already correctly formated to take an input with a corresponding submit button.
//      In an index.js file, what would you write to connect the app to your firebase project (assuming it has already been made)

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://grocerylistapp-4e6af-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const moviesInDB = ref(database, "movies")

//NOTE: Critically, the databaseURL will be the specific URL given to you by firebase when you set up a new project on their website. 
// The websites and the imports are not specific to your project and will be the same for other projects. 
// The names of the last three variables can be anything, and the second argument of ref will be the name you 
// choose for the database field.  

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(moviesInDB, inputValue)
    
//     console.log(`${inputValue} added to database`)
// })

//The only part in the previous block of code that is particular to firebase would be the push() method with 
// its 2 arguments. The is just to give an idea of a complete set up for connecting firebase and having a 
// button that adds an input to the database. 

// ########################################################################################

// #47. Use a method to turn the values of an object into an array.
//      Then do the same but for the keys.
//      Lastly, do it for both the keys and the values.

// let scrimbaUsers = {
//     "00": "sindre@scrimba.com",
//     "01": "per@scrimba.com",
//     "02": "frode@scrimba.com"
// }

// Object.values(scrimbaUsers)
// Object.keys(scrimbaUsers)
// Object.entries(scrimbaUsers)

// NOTE: Object.entries will yield an array of arrays, with each nested array containing the key and value of the pair

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

// template string (aka template literal): 
    // A way fo writing a string in a JS document that uses backticks instead of quotes to begin 
    // and end the string. The main advantages are that you can break it up onto 
    // multiple lines for legibility and that you can use ${} notation to insert 
    // JS variables inside a template string of HTML tags. This minimizes the alternating usage 
    // of single and double quotes to escape strings, which is easier to both read and write. 

// JSON: 
    // Stands for "JavaScript Object Notation"
    // It is a way of storing and sending data, often from a server to a client
    // It looks similar to a JS object, but it isn't; it is just plain text formatted in a way that is typical 
    // of JS objects. 
    // Notice that the keys in the key-value pairs are in quotes, unlike in an actual JS object.

// persistence: 
    // the concept that certain stored data, for example in local storage, will 
    // remain accross page refreshes.

// local storage: 
    // values in the developer tools section of a webpage that are only available to the user's computer; by default, these values
    // are not shared with other users who visit the same page. The date is listed as keys and values and sort fo functions 
    // as a small local database.
    // Values stored in local storage can *ONLY* be stored as strings.
    // To view these values for a webpage, you would use inspect, then go to the 'application'
    // tab then click on Local storage under "Storage" and then expand the dropdown arrow to pick 
    // the current website. 

// truthy and falsey (values): 
    // There are values that are not strictly, technically true or false, but rather 
    // are interpeted as true or false by JS:
    // if (variable)  -- and the value of the variable has previously been declared as 0, 
        // JS will interpret this as false, so it is considered a falsey.
    // if ("a string") -  this is truthy. 
    // if (var) - and the variable has been *declared* but *not* assigned a value (so just-- let var), 
        // this is falsey 
    // if (var) - and the variable has been declared and there is a value other than zero, this is truthy
    // if (var) - and the variable has been declared as an empty string, this is falsey
    // 
    // *SUMMARY*: The six falsey values in JS are: false, 0, "", null, undefined, NaN 

// null vs. undefined: 
    // These are both falsey values an are both considered primitive data types. 
    // They are also both used to signal emptiness.
    // The critical deference is that null is how the developer indicates emptyness, 
    // and undefined is how JS indicates emptiness.
    // In other words, null is intentionally uses by the developer to indicate that
    // a variable does not have a concrete value, such as let currentViewers = null, 
    // which you might want to use in an if clause to trigger an action if, for example, 
    // currentViewer gets reassigned to ["joey"]. Importantly, if currentViewer is an empty array, 
    // this would evaluate to true, so in order for it to be interpreted as false, it would have to be null. 
    // 
    // If you declare a variable but don't assign it a value, when you go to use it JS will 
    // tell you that it is undefined.

// resusability: 
    // the potential for a section of code to be utilized in the future 
    // using different variables to execute its intended purpose; 
    // For example, functions that use hard coded values instead of dynamic values 
    // have low reusability becuase they can only be used in a limited capacity. 
    // Reusability can be enhanced by allowing functions to take arguments
    // as opposed to writing the function without an argument and referencing a specific 
    // variable in the body of the function. 

// parameters vs arguments: 
    // Both terms are often used interchangably, howover the technical difference is that 
    // a parameter is a variable that you defined when writing a function (in parentheses), 
    // and an argument is a concrete value that you pass in when calling the function.
