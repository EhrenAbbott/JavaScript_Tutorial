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

// #48. Import the firebase method that allows you to fetch data stored in your linked firebase project. 
//      Next, fetch the object values and add them to a new array.
//      Assume the variable shoppinListInDB.

// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// onValue(shoppingListInDB, function(snapshot){ 
//     let itemsArray = Object.values(snapshot.val())
// })

// NOTE: Just due to the nature of how onValue works, you have to add .val() after the argument in Object.values in order 
// to correctly retrieve the values. 
// IMPORTANT: whenenever the database is changed, onValue runs every time. 

// ########################################################################################

// # 49. Assuming an unordered list assignd to the const shoppingListEl, and multiple arrays (corresponding to each list item)
// that consist of a key (unique ID)  and value (item name), write a function that makes a new element for each item and 
// adds it to into the ul.

// function addShoppingItem(item){ 
//     let itemVal = item[1] 

//     let newEl = document.createElement("li")

//     newEl.textContent = itemVal

//     shoppingListEl.append(newEl)
// }

//NOTE: There are three basic steps for using createElement: 
// 1. createElement needs to be applied to the document object, so it starts with document.createElement. Then you decide
// which element you want to make. 
// 2. Then you have to give the new item some text content. 
// 3. Lastly, the newly created element has to be placed in its parent element. 
// ########################################################################################

// 50. Assume a button representing an item in a Firebase database. 
// When clicked, make the button console log that specific item's location in the database. 
// and make it so that that item gets deleted from the database. 

// The field/category in the database is called "shoppingList"
// There is already a variable caled itemID that represents the unique key. 
// The button element is assigned the the variable "newEl"

// import { ref, remove } from '...'

// newEl.addEventListener("click", function() { 
//     let itemsExactLocationInDB = ref(database, `shoppingList/${itemID}`)

//     remove(itemsExactLocationInDB)
// })

//NOTE: Rememeber to locate an item in Firebase you have to import the ref method, which will always 
// take "database" as its first argument. 
// The second argument here will be the category/field name, in this case 'shoppingList' *PLUS*
// a foreward slash followed by the items ID. 
// Once that is specified, you simply have to import the remove method, which takes the db location as its only 
// argument.

// ########################################################################################

// 51. Use a method to see if there are any items in the firebase db. 
//      If there are items, console log "yes", if not, log "no"

// onValue(shoppingListinDB, function(snapshot){ 
//     if (snapshot.exists()){ 
//         console.log("yes")
//     } else { 
//         console.log("no")
//     }
// })

//NOTE: snapshot.exists() is a method that comes with the imported firebase objects. 
// Remember that onValue() is the initial line that connects our project to the database, 
// so after that has been established, we can check to see if there are any items in it with snapshot.exists()

// ########################################################################################

// 52. Add an event listener to a button element that can only run once

// let btn = document.getElementById("btn")
// btn.addEventListener("click", function(){ 
//     //function details
// }, {once: true});

// ########################################################################################

// 53. What method would you use to execute the delay of a particular piece of code? 
// What arguments does this method take?

//setTimeout()
// The first argument is a function, and the second is the specified 
// delay duration in milliseconds.

// ########################################################################################

// 54. Assume you have the HTML elements to create a button and a modal. 
//  Make it so that, when clicked, the bottom will make the modal appear (that is otherwise
// not visible)

// const revealBtn = document.getElementById('reveal-btn')
// const answer = document.getElementById('answer')

// revealBtn.addEventListener("click", function(){ 
//     answer.style.display = 'block'
// })

// NOTE: The important syntax that we are using here is ELEMENT.style.PROPERTY = 'VALUE'
// Remember that the property that allows a modal to not be visible is the display 
// property, which gets set to 'none.' Here the event listener is simply 
// targeting the button and the function argument is interacting with the CSS 
// property with .style in order to change it into block so that it become visible. 
// - Hyphenated CSS properties cannot remain hyphenated in the JS, so instead 
// they will usually be written in camel case. For example, background-color in CSS, 
// becomes backgroundColor in JS.

// ########################################################################################

// 55. The default behavior of an HTML form is to take all of the information that the user
// entered an add it into the URL; this is obviously not good, so how do we prevent this from 
// happening?
// Assume a form element with the id of 'login-form'

// const loginForm = document.getElementById("login-form")

// loginForm.addEventListener("submit", function(e){ 
//     e.preventDefault()
// })

// NOTE: Here, the event that is being listened for is not a click but rather a submission; 
// the 'e' in the function can also be written as 'event' and this represents the event that caused this
// event listener to trigger, in this case the submit button.
// - preventDefault() is a built-in JS function.
// - Notice that the event listener is on the form itself and not on the 
// submit button

// ########################################################################################

// 56. When you have two buttons in a form- even if they are not both 
// submit buttons- the default behavior of the buttons is to submit, and 
// and event listeners triggered by a submit will act on either of them.
// What do you add to a button to prevent this default befault (submitting)?

{/* <button type="button">Decline</button> */}

// ########################################################################################

// 57. Access an HTML element with its id and set its text in *ONE* line.

// document.getElementById('description-text').innerText = "TEXT HERE!"

// NOTE: Establishing a a const for and HTML isn't actually always necessary, and it is
// possible to combine that with the innerText property (or other properties/methods) in the same line.

// ########################################################################################

// 58. Assign the data a user submits in a form to  const.
//      Assume the form has the ID of login-form.

// const loginForm = document.getElementById('login-form')

// loginForm.addEventListener('submit', function(event){ 
//     event.preventDefault()

//     const loginDataForm = new FormData(loginForm)
// })

// NOTE: FormData() is a special type function that returns an object with all of the form data.
// - The keyword 'new' is required bc FormData() is a constructor function, which are slightly different 
// than normal functions.
// - At this point, the loginDataForm will not display when console logged as a normal object 
// would. 

// ########################################################################################

// 59. Building off of 58, how would you console.log a specific data field from the form?

// const loginForm = document.getElementById('login-form')

// loginForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const loginFormData = new FormData(loginForm)
    
//     const name = loginFormData.get('astronautName')
//     console.log(name) 

// })

// NOTE: The arugment of the .get() method has to be the *NAME* attribute of the HTML input element. 

// ########################################################################################

// 60. What attribute to do you to a HTML button to make it unusable will still visible? 
//      This attribute will make the button appear greyed out and have no funcitonality.

{/* <button disabled>DISABLED BUTTON :(</button> */}

// ########################################################################################

// 61. Imagine a ecommerce site where you can add a certain number of product to your cart. 
// How would you make it so the decrement button is greyed out when the number of items is 0? 
// How woudl you make it so that the number cannot go below 0?
// Start off with the following const for the add button, the subtract button, and the number display
// element.

//-----JS-----

// const decrement = document.getElementById('decrement')
// const increment = document.getElementById('increment')
// const quantityDisplay = document.getElementById('quantity-display')

// let quantity = 0

// decrement.addEventListener("click", function() { 
//     quantity --
//     if (quantity === 0){ 
//         decrement.disabled = true
//     }
//     quantityDisplay.innerText = quantity
// })

// increment.addEventListener("click", function(){ 
//     quantity ++ 
//     decrement.disabled = false
//     quantityDisplay.innerText = quantity
// })

//-----HTML-----

{/* <div class="buttons">
	<button class="quantityBtn" id="decrement" disabled>-</button>
	<span class="quantity-display" id="quantity-display">0</span>
	<button class="quantityBtn" id="increment">+</button>
</div> */}


// NOTE: The disabled attribute is a boolean and can be accessed in JS 
// by ELEMNENT_NAM.disabled and then changing the value to either true or false. 

// ########################################################################################

// 62. Assume a div of multiple vertical child divs of different shades of blue. 
// When hovering the cursor over the parent div, how would you make it so that 
// the vertical divs flip on the horizontal access? 


// //-----CSS-----
// .reverse { 
//     flex-direction: row-reverse;
// }

// //-----HTML-----

// <div class="container" id="container">
// 		<div class="palette-section blue-1"></div>
// 		<div class="palette-section blue-2"></div>
// 		<div class="palette-section blue-3"></div>
// 		<div class="palette-section blue-4"></div>
// 		<div class="palette-section blue-5"></div>
// 	</div>

// //-----JS-----

// const container = document.getElementById('container')

// container.addEventListener("mouseenter", function(){ 
//     container.classList.toggle('reverse')
// })

//NOTE: The classList property is what allows us to access the CSS styling of the 
// equivalent JS variable. Then, the .toggle allows us to turn a particular 
// CSS attribute on or off, and this particular attribute is names in quotes
// as the argument.

// ########################################################################################

// #63. Given the follow array, which contains objects, that each have an array as
// one of their key values, iterate over the parent array to console log each object. 
// Next, iterate over the powers key to console log each indivdual power from that array.
// NOTE: do not use the "for (let x = 0; x < ARR.length; x++)" way of iterating.

// const characters = [
//     {
//         title: 'Ninja',
//         emoji: '🥷',
//         powers: ['agility', 'stealth', 'aggression'],
//     },
//     {
//         title: 'Sorcerer',
//         emoji: '🧙',
//         powers: ['magic', 'invisibility', 'necromancy'],
//     } 
// ]

// for (let character of characters){ 
//     console.log(character) 
//     for (let power of character.powers){ 
//         console.log(power)
//     }
// }

// NOTE: for the outer for/of loop, the first variable is ANYTHING you want it to be; 
// the second variable has to be the name of the specific array you want to iterate over. 
// - For the inner for/of loop, the first variable is also ANYTHING you want it to be (as
// long as it isn't what you chose for the out for/of loop). 
// The part that follow the word 'of' has to be the outer for/of loop variable that you chose, 
// combined with dot notation to acces the specific key.

// ########################################################################################

// #64. Create a function that iterates over the following array of dogs 
// and renders then to a div with the id of 'dog-div'

// const dogArray = ["lab", "pitbull", "australian blue heeler", "golden retriever"]

// const dogDiv = document.getElementById("dog-div")

// function renderDogs(dogs) { 
//     let dogWords = ``
//     for (let dog of dogArray){ 
//         dogWords += `<p>${dog}</p>`
//     }
//     dogDiv.innerHTML = dogWords
// }

// renderDogs(dogArray)

// ########################################################################################

// #65. Add whatever is necessary to export dogsArray from the data.js file 
// and import it into index.js. Assume all files are in the same folder.

//-----index.js----- 
// import { dogArray } from '/data.js'

//-----data.js-----

//  export const dogArray = ["lab", "pitbull", "australian blue heeler", "golden retriever"]

//-----index.html-----

{/* <body>
	<script src="index.js" type="module"></script>
</body> */}

//NOTE: This method is not just used for const but for functions and other things as well. 
// -Remember the type attribute in the script tag! This can be easy to forget!
// -Modular code has to be run on a server, so if you take this offline and try to
// run it locally, you will get an error. You can set up a local server on your computer with Live Server.

// ########################################################################################

// #66 HTML DETOUR! 
// Create two clickable circles (the kind that get filled in when you click them)
// Give them the correct attributes to: 
//  -Make them circular 
//  -Allow them to be assigned to a const in the JS file 
//  -Allow access to the information they contain
//  -Make it so that only one of the options can be selected at once
// Also give each option a description with the correct attribute to pair it 
// with the actual circle that it accompanies. 

{/* <div> 
    <input
    type="radio"
    id="apples-radio"
    value="apples-radio"
    name="choice-radios"
    /> 
    <label for="apples-radio">apples</label>
    <input
    type="radio"
    id="oranges-radio"
    value="oranges-radio"
    name="choice-radios"
    />
    <label for="oranges-radio">Oranges</label>
</div> */}

//NOTE: setting *BOTH* options' name to have the same value is what makes it so
// that *ONLY ONE* of the options can be selected.
// -The 'for' attribute in the label must match the input's id; linking these makes it so that
// clicking on the descriptive text also selects the corresponding input.

// ########################################################################################

// #67 Use a JS method to see if the following array contains the item 'hamburger'
// What you console.log'd this out, what would it return?

// const myArr = ["pizza", "hamburger", "ice cream", "cake"]

// myArr.includes("pizza")

// NOTE: Console logging the .includes method in use would yield true or false because
// (aka it is a boolean)

// ########################################################################################

// #68 The the add item button is clicked, add it to the shoppingList array
// if the item entered is not already in the list; if it is, console log "no duplicates"

// const itemInput = document.getElementById('item-input')
// const addItemBtn = document.getElementById('add-item-btn')

// const shoppingList = []

// addItemBtn.addEventListener("click", function(){ 
//     if (shoppingList.includes(itemInput.value)){ 
//         console.log("no duplicates")
//     } else { 
//         shoppingList.push(itemInput.value)
//     }
// })

// ########################################################################################

// #69 Complete #68 but refactor it to use the logical not operator so that it is more concise

// const itemInput = document.getElementById('item-input')
// const addItemBtn = document.getElementById('add-item-btn')

// const shoppingList = []

// addItemBtn.addEventListener("click", function(){ 
//     if (!(shoppingList.includes(itemInput.value))){ 
//         shoppingList.push(itemInput.value)
//     }
// })

// NOTE: Notice that approach of using the not operator is more concise, as it eliminates
// the need to create an explicit 'else' block.

//########################################################################################

// #70 Adding event listeners to every element a user might interact with (such as button)
// might cause problems, so it is best to keep it to a minimum. 
// Assuming a parent div with the id of "container" that contains three buttons, make it so 
// that you only have to add one event lister that responds to each button that could 
// be clicked and console log its unqiue id.

// const container = document.getElementById("container")

// container.addEventListener("click", function(e){ 
//     console.log(e.target.id)
// })


// NOTE: the event that is used as the argument is actual an object that contains a ton of 
// information. You can view it in the dev tool in the browser.
// - One of the items in the event object is the 'target' key. This refers to the 
// target of the event itself, which is a click in this case.
// - The target key itself contains another object which contains the 'id'
// key. Here you can see the id of which element specifically was clicked tin the container div.

//########################################################################################

// #71 Add an event listener that responds to a radio input being selected.

// radioButton.addEventListener("change", function(){ 

// })

// NOTE: It might be tempting to have the event listener respond to "click", but this
// doesn't work for radio inputs and instead have to be "change" in order 
// to listen for its selection.

//########################################################################################

// #72 Assuming a parent div with the id of "container" that contains three buttons, each 
// in their own child div, make it so that you only have to add one event lister that 
// responds to each button that could be clicked and change the *PARENT DIV'S* background color; 
// do this all in one line of code!

// container.addEventListener("click", function(e){ 
//     document.getElementById(e.target.id).parentElement.style.backgroundColor = "lightblue"
// })

// NOTE: This works event if the parent element does not have an ID, as it is
// retrieving the entire element without using the ID to access it.
// NOTE: Notice how everythign is chained together starting with the document.getElementById
// to get ahold of the element, then the e.target.id to target the specific clicked element, 
// next concatenating the .parentElement to select the button's div, and finally .style.backgroundColor 
// to access the CSS and change a specific property.

//########################################################################################

// #73 Add an event listener to the entire page that listens for a click on all elements 
// and responds by applying a CSS class called 'read' to that element's parent element. 
// Have it also take away a class called 'unread'

// document.addEventListener("click", function(e){ 
//     document.getElementById(e.target.id).parentElement.classList.add('read')
//     document.getElementById(e.target.id).parentElement.classList.remove('unread')
// })

// NOTE: When multiple CSS classes are applied to the same element and sthe styling conflicts, 
// CSS will prioritize the class that comes *FIRST* in the CSS document. 
// This is why it is better to remove a class when adding another class in somecases, as you 
// don't want to have to overly rely on the order of CSS clases.

//########################################################################################

// #74 Create a click event listener that does not use an anonymous function, but rather 
// a function you have already defined elsewhere. 
// Assume the function console logs the id of the clicked item. 
// What do you have to take into consideration when using a function this way
// in an event listener?

// myContainer.addEventListener("click", logId)

// function logId(e){ 
//     console.log(e.target.id)
// }

// NOTE: Important!  Notice how you do *NOT* use parentheses after putting the 
// named function in the event listener! This is bc the parentheses would make it so
// that the function automatically get invoked *IMMEDIATELY* and does not depend 
// on the click.

//########################################################################################

// #75 Create an event listener on clearBtn that removes a CSS class called 'purchased'
// on all elements with a CSS class of "product".

// clearBtn.addEventListener("click", function(){ 
//     const productsArray = document.getElementsByClassName("product")
//     for (let product in productsArray){ 
//         product.classList.remove("purchased")
//     }
// })

// NOTE: Retrieving the elements with .getElementsByClassName yields what's calld an
// 'HTML Collection', which is technically not an array, but it is an array-like object 
// that can be iterated throguh like a normal array in this case. This is
// why we have to pair this with a for/of loop in order to make the appropriate
// changes to all of the elements of the specified class.

//########################################################################################

// #76 On a submit button, add an event listener that console logs 
// the element tags of selected input that has a type set to "radio".
// What would you add to retrieve its assigned value?

// submitBtn.addEventListener("click", function(){ 
//     document.querySelector('input[type="radio"]:checked')
// })

// .value would be added at the very end to get the value of the value attribute.


// NOTE: querySelector is a more powerful way of grabbing elements bc it allows 
// us to include pseudoelements in our search. This allows to do things like grab 
// and input element whose type is "radio", which would not be possible with .getElementById
// NOTE: the syntx of grabbing this element is: type of element --> in brackets:
// attribute_name="attribute_value" --> :checked     . All of this goes in quotes, 
// so it is important to alternate between single and double quotes for the query selector and
// the attribute value. 

//########################################################################################

// #77 On the previous quesiton, a error would appear if
// no selection has been made but they submit butten has been clicked. 
// How would you solve this?

// function getMatchingCatsArray(){
//     if(document.querySelector('input[type="radio"]:checked')){
//         const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
//         console.log(selectedEmotion)
//     } else { 
//         console.log("no selection has been made")
//     }
// }

//########################################################################################

// #78 Checkbox inputs behave slightly differently because they are boolean. 
// Assumign the following elements, console log "checked" if the box has been 
// checked or "not checked" if the opposite is true. 

// const continueBtn = document.getElementById('continue-btn')
// const acceptTerms = document.getElementById('accept-terms')

// continueBtn.addEventListener("click", function(){ 
//     if (acceptTerms.checked){ 
//         console.log("checked")
//     } else { 
//         console.log("not checked")
//     }
// })

// NOTE: To ascertain that a box has been checked, you have to 
// take its element const and use the .checked property, which
// returns a boolean.

//########################################################################################

// #79  Filter through the following array, adding any of the 
// number that are equal to or greeater than 18 to a new array. 
// Do not use a for loop.

// const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

// const adults = ages.filter(function(age){ 
//     return age >= 18
// })

// NOTE: What comes before .filter is the array it being applied to.
// -It takes a function as its argument that sets the filter condition, 
// and this can simply come after the keyword 'return.'
// - The parameter in the function argument represents each individual item 
// in the array to be filtered (one at a time, like in a for loop)
// -Technically you coudl write an if statement as the condition, but this would
// not be as concise and is therefore not preferred.

//########################################################################################

// #80 Filter throguh the following array of objects and return an array of
// the shows that are set in New York. 
// Do the same but for shows that are of the 'thriller' genre

// const series = [
//     {
//         name: 'The Wire',
//         location: 'Baltimore',
//         lengthInHours : 60,
//         genres: ['action', 'thriller', 'detective', 'suspense']
//     },
//     {
//         name: 'Friends',
//         location: 'New York',
//         lengthInHours : 85,
//         genres: ['comedy', 'romance', 'drama']
//     },
//     {
//         name: 'The Walking Dead',
//         location: 'Atlanta',
//         lengthInHours : 131,
//         genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
//     },
// ]

// const newYorkShows = series.filter(function(show){ 
//     return show.location === "New York"
// })

// const thrillers = series.filter(function(show){ 
//     return show.genres.includes("thriller")
// })

//########################################################################################

// #81 HTML detour! 
// What tag do you use to make an input space for the user to write longer 
// chunks of text?
// What CSS property do you give it so the user can change the display size 
// of the input field?

//-----HTML-----
{/* <textarea></textarea> */}

//-----CSS-----
// textarea { 
//     resize: none;
// }

//NOTE: This isn't just an input tag with a modifying attribute, it is its own tag! 
// - If you put the closing tag on another line, it will not display the placeholder correctly, 
// so the closing tag has to at least be on the same line as the ">" from the opening tag.

//########################################################################################

// #82 Iterate through every item in thhis array of objects using something 
// other than a for loop. 
// a) Console.log each object in the array.
// b) console.log the array of powers for every item.
// c) console.log each individual power for every item

// const characters = [
//     { 
//         title: 'Ogre',
//         emoji: '👹',
//         powers: ['power', 'stamina', 'shapeshifting'],
//     },  
//     { 
//         title: 'Unicorn',
//         emoji: '🦄',
//         powers: [ 'flight', 'power', 'purity'],
//     }
// ]

// characters.forEach(function(character){ 
//     console.log(character)
// })

// characters.forEach(function(character){ 
//     console.log(character.powers)
// })

// characters.forEach(function(character){ 
//     character.powers.forEach(function(power){ 
//         console.log(power)
//     })
// })

//########################################################################################

// #83 Using the same array as the quesiton above, iterate through 
// each object in the array and, using two paramter, console log the title AND the index.
// (do not use a for/of loop)

// characters.forEach(function(character, index){
//     console.log(index, character.title)
// })

//NOTE: The 'index' is a special paramter for .forEach

//########################################################################################

// #84 HTML Detour! 
// Create a data attribute for an image element

{/* <img id="image-1"> */}
{/* <i data-share="image-1"></i> */}

//NOTE: every unique data attribute starts with--     data-   --and is followed
// by a unique descriptive name that you give it (with every word separated by a hyphen)
// -This is followed by the equals sign and then quotes enclosing a string with the information
// you want to give it, usually the id of the element it is connected to.
// - Do not use camel case in the HTML (or capital letters at all) when naming multiword the data- attributes, 
// as they will get 'flattened' to lower case in the JS document and cause incongruities; instead 
// use hyphens.
// - When using hyphens for multiword attribute names in HTML, the hyphens cannot be used in
// the JS syntax, so the HTML names must get traslated as camel case in JS. So, the HTML 
// attribure share-icon would have to be shareIcon in JS.

//########################################################################################

// #85 Assuming the attribute from the previous question, 
// console log the element's data attribute value by clicking
// anywhere on the document.

// document.addEventListener("click", function(e){ 
//     console.log(e.target.dataset.share)
// })

//NOTE: The value of the data attribute is stored in a nested object;
// The part that comes after e.target.dataset will be the name of the 
// data attribute that you have chosen

//########################################################################################

// #86 Create an event listener  that only works if the element that gets clicked
// has a data attribute called 'data-like'

// document.addEventListener("click", function(e){ 
//     if (e.target.dataset.like){ 
//         console.log("yes")
//     }
// })


// NOTE: Here we are setting the event listener on the whole document, not a specific element, 
// but event listener is only performing the console log if the "data-like" attribute exist 
// on the element that gets clicked. 
// - This strategy can be used to minimize event listener so that you do not have a ton of 
// different event listeners applied to different like buttons (for example) on the same page.

//########################################################################################

// #87 Assuming the following if statement in an event listener, refactor it 
// so that there is only one line responsible for changing the boolean value.

// if (targetTweetObj.isLiked){
//     targetTweetObj.likes--
// }
// else{
//     targetTweetObj.likes++
// }
// targetTweetObj.isLiked = !targetTweetObj.isLiked

// NOTE: using the logical NOT operator before a boolean simply changes it to the 
// opposite value regardless of if it was originally true or originally false.

//########################################################################################

// #88 Given the following code, what would you need to add 
// in order to have some CSS styling conditionally applied to changed
// the color of the like butten if and when it has been clicked?

// let isLiked = false


// document.addEventListener('click', function(e){
//     if(e.target.dataset.heart){
//         isLiked = !isLiked
//         render()
//     }
// })

// function render(){ 
    
//     let heartClass = ''
    
//     if(isLiked){
//         heartClass = 'liked'
//     } 
    
//     let imageHtml = `
// 			<div class="social-icons-container">
// 				<i class="fa-solid fa-heart ${heartClass}" data-heart="image-1"></i>
// 			</div>
//     `
//     galleryContainer.innerHTML = imageHtml
// }

// render()

//########################################################################################

// #89 Import a CDN function from uuidjs that allows you to produce a randomly generate a uuid.

//-----JS-----
// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// console.log(uuidv4())
  
//-----HTML-----    
{/* <body>
    <script src="index.js" type="module"></script>
</body> */}

// NOTE: The function doesn't have to be renamed, but it might avoid confusion, as the default name 
// is so generic and not descriptive enough.

//########################################################################################

// #90 Use object destructuring to more efficiently create variables for all of the object properties:

// const favouriteFilm = {
//     title: "Top Gun",
//     year: "1986",
//     genre: "action",
//     star: "Tom Cruise",
//     director: "Tony Scott"
// } 

// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

// const {title, year, genre, star, director} = favouriteFilm

// NOTE: the first way of creating 5 consts works, but it is not DRY bc
// it invovles so much repetition that can be elimination via object destructuring.

//########################################################################################

//#91 What is the difference between .map and .forEach? 
// Use each one on the following array to compare the syntax: 

// let myArray = ["dogs", "cats", "turtles", "birds" ]

// let mappedArray = myArray.map(function(animal){ 
//     return animal.toUpperCase()
// })

// myArray.forEach(function(animal){ 
//     animal.toUpperCase()
// })

// NOTE: The critical difference is that .forEach *MODIFIES* the original array, 
// whereas .map returns a *NEW* array that contains the results of calling the provided function! 
// If you try to say-- let const newArray = myArray.forEach(function(item){//CODE HERE//})    --it will 
// return undefined!
// - This means that you cannot save the result of .forEach directly to a const; you would 
// instead have to create a new, empty array, and when you call .forEach on the original array, 
// push each item to the new array and then render that new array.
// - If .map is being used inside a function, you will need 2 return statements in order to
// avoid getting undefined; the first return is for the function itself, and the second return 
// is for the .map function, which has to have an function w/ a return as its argument; this will not
// return two different things, just the new, modified array.
// -Because .forEach does not return a new array, you cannot chain another method after the parentheses in
// .forEach()    This is a disadvantage of .forEach, as is the resulting clunkiness of the code after 
// having to work around its defecits.


//########################################################################################

//#92  Turn the following array into a string. 
//      What will it look like when you console log it?

// const guestsArr = ['Amy', 'Clare', 'Keith', 'Dan'] 
// guestsArr.join()
// The console log will show one long string of all the names and it will 
// include the commas but not have any spaces: "Amy,Clare,Keith,Dan"

// NOTE: .join is an inbuilt JS method for creating strings from arrays. 
// - It lets you choose how the elements are separated, and its returns a new string.

//########################################################################################

// #93 Working with the array in 91, how would you make it so that the resulting string 
// doesn't have a comma between each name but has a space instead? 
// What about one long word with no punctuation or spacing at all?


// console.log(guestsArr.join(' '))
// console.log(guestsArr.join(''))

// NOTE: The character that goes in between the parentheses of the join method is call the separator, 
// and it denotes what, if anything, will go between the items in the final string.

//########################################################################################

//# 94 Chain .map and .join together to return a string of elements that does *NOT*
// render with a comma being displayed.
// Store what gets returns in a const called playlistHtml.

// let playlistArr = ["nirvana", "the gogos", "madonna", "blur"]

// const playlistHtml = playlistArr.map(function(band){ 
//     return `
//     <div>
//         <h1>${band}</h1>
//     </div>
//     `
// }).join('')

// document.getElementById('container').innerHTML = playlistHtml

// NOTE: remember to add the separator in parentheses for .join ! 
// - .join() could instead be added in the last line immediately after playlistHtml, 
// but this is a matter of personal preference. 

//########################################################################################

//# 95 Iterate throguh the following object and console log each item, but
// skip over the items that have a negatve amount and stop the for loop when the year 
// changes to 2024.

// const expensesAndRefunds = [
//     { description: 'Groceries', amount: 50, year: 2023 },
//     { description: 'Electronics', amount: -30, year: 2023 },
//     { description: 'Entertainment', amount: 25, year: 2023 },
//     { description: 'Utilities', amount: 100, year: 2024 },
// ]

// for (let i = 0; i < expensesAndRefunds.length; i++){ 
//     const currentItem = expensesAndRefunds[i]
//     if (currentItem.year > 2023){ 
//         break
//     }
//     if (currentItem.amount < 0){ 
//         continue
//     }
//     console.log(currentItem)
// }

// NOTE: The difference between break and continue is that breaka ends the for loop
// altogther, whereas continue just skips the current item. 
// -The ability to use continue and break are advantages of the for loop, as doing something
// equivalent with .forEach or .map would invovle making a more complex work-around.

//########################################################################################

// #96 What is the downside of using innerHTML to render HTML elements? 
//  How can you refactor the following code to do the same thing as innerHTML but 
// avoid the potential downside?

// const filmInput = document.getElementById('film-input')
// const addBtn = document.getElementById('add-btn')
// const filmList = document.getElementById('film-list')

// addBtn.addEventListener('click', function() {
//     const newFilm = document.createElement('div')
//     newFilm.classList.add('film-item')
//     newFilm.textContent = filmInput.value
//     filmList.appendChild(newFilm)
//     filmInput.value = ''
// }) 

// When using innerHTML to render elements derived from user input, malicious code could be introduced
// if a hacker were to include it in the user input field
// The solution to this is to manually build the element, as shown above. 

//########################################################################################

// #97 Write a function declaration (this is official name for what is just the normal way of writing 
// out a function). The a function expression (use the same body of the previous). 

// What is  functional the difference between these two ways of writing functions? 
// Is the difference an advantage or disadvantage?

//function declaration
// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }

//function expression 
// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }

// NOTE: Function declarations are *HOISTED*, so they can be called anywhere in the file 
// and it will work.
// -A function declaration is a named function, whereas a function expression 
// is basically a variable that holds what is similar to an anonymous function. 
// - Critically, a function expression is *NOT* hoisted; this can actually be an
// advantage, as function declarations being hoisted and called anywhere in their scope
// can call confusion and lead to bugs 
// -Some might argue that function expressions are cleaner and easier to read; for this reason
// some dev teams might prefer them

//########################################################################################

// #98 Write the function from the previous question but make it an arrow function. 
//      When can you eliminate the parentheses? 
//      When can you make it an inline function and eliminate the return keyword and curly brackets?

// const getSpendAlert = (amount) => {
//     return `Warning! You just spent £${amount}!`
// } 

// You can delete the parentheses if you have:
//  - only 1 parameter
// You can eliminate the return keyword/curly brackets if: 
//  - the code is short enough to remain on one line

//########################################################################################

// #99 Use the map method but make the function argument an inline arrow function.

// const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const newArr = distanceTraveledMiles.map(distance => distance * 2)

// NOTE: The function here is not only an arrow function, but it is also not assigned 
// to any const, like in #98.

//########################################################################################

// !VOCAB! 

// modularization: 
    // Refers to the seperation of of program functions into independent pieces
    // which act like building blocks and all contribute to the executio of the program

// abstraction: 
    // -A concept that represents the degree of technical understanding required
    // to be able to effectively work on a particular problem. 
    // -For example to have a work to display in the console, you need to know that the 
    // syntax is console.log  followed by parentheses that contain the string to be logged;
    // You *DON"T* need to know what exactly happens under the hood to get from point A to point B
    // -Understanding abstraction will allow you to know when you have to understand 
    // something technical or just how to use it/

// anti-pattern: 
    // An anti-pattern refers to what *NOT* to do when coding; for example,
    // iterating over an array with .map instead of .forEach when you want to modify 
    // the contents of the array but *DON'T* actually use the new array that it returns.

// spaghetti code: 
    // The most well known anti-pattern 
    // This is code with little to no structure, no modularization, and file structures 
    // that don't follow and logic or reason.

// golden hammer: 
    // An example of a anti-pattern
    // Refers to the expression "if the only tool you have is a hammer, 
    // you treat everything as it if were a nail"
    // In coding this is being over reliant on one pattern or approach 
    // that has worked for other applicables but is not ideal for the current issue 
    // This is doing what's easier bc you are more comfortable with it, not bc it is the best 
    // solution for the current problem at hand.

// boat anchhor: 
    // An example of an anti-pattern
    // This refers to the practice of leaving code in the codebase because you might need it 
    // later, even though you don't need it now. 
    // This causes maintenance issue for the codebase that contains obsolete code; other 
    // developers working on the same project will have a hard time knowing which code ise obsolete 
    // and which code isn't; it also makes build time longer

// dead code: 
    // An example of an anti-pattern
    // This is code is written and implemented but doesn't really do anything to contribute
    // to the overall goal; sometimes you can tell what the code is doing 
    // but the context is just missing, or the code just isn't necessary for
    // the execution of your program.

// proliferation of code: 
    // An example of antipattern
    // This is when you have objects in your codebase that only serve to invoke another, more
    // important object; the object in question only functions as a middleman
    // This creates and unnecessary level of abstraction and creates confusion for others
    // working with the same codebase

// God object (AKA Swiss Army Knife): 
    // An example of an anti-pattern
    // Refers to the overreliance of accessing one particular object in your codebase
    // A God object just does too much, when the code should be seperated out into smaller, 
    // logical units

// chaining: 
    // The concatenation of 2 or more methods in the same line of code
    // Ex: document.getElementById(`container`).classList.toggle('hidden')


// object destructuring: 
    // Refers to the extraction of of properties from objects into distinct 
    // variables.

// shallow copy: 
    // This refers to what is created when you copy an object or array to
    // a new variable. For example if you take usersArray  which contains and array of a single object, 
    // and then say arrayCopy = usersArray[0], this would be a shallow copy. 
    // Whats happening is that usersArray is is created in the memory, and the const holds a reference 
    // to that spot in the memory locaiton. If we copy the origial object and 
    // save it to a new variable the new variable actually does *NOT* create 
    // a new place in memory that it referecnes and instead it simply hold a reference
    // to the original variables spot in memory. Essentially there are now to variables referencing
    // the same spot in memory, so if you alter the data stored in memory referenced by the original variable, 
    // the copy will still be pointing to that altered data as well.
    // - IMPORTANT! This does *NOT* happen with primitive data types like numbers, strings and boolean; 
    // for these, a second place is created in memory that is independent of the original variable's location in memory.

// copy copy: 
    // This is the opposite of a shallow copy, where you are actually making a second
    // spot in memory for a copies object or array.

// data attribute: 
    // This is used to store extra information in HTML elements
    // It provides a way of demonstrating a relationship between
    // elements without relying on the id attirbute, which is supposed 
    // to be unique to only one element. 
    // For example, a data attribute could be used to establish a relationship 
    // between a like button and a share button with the image they correspond to. 
    // This way, you could have what are essentially different, custom made attributes (bc
    // you chose the name) store the same value.
    
// CDN: 
    // stand for "content delivery network"
    // this is a remote service that provides assets to web apps
    // It provides snippes of code that will bring the asset into our application
    // Font Awesome is an example of a CDN, where you can get free icons

// UUID (AKA GUID): 
    // stands for "universally unique identifier" and a common way of 
    // assigning unqiue keys to blocks of data; it is a string of 36 characters that
    // is not just unique to your application but is unqiue worldwide.
    // The currently preffered type of uuid is the Version 4 UUID, which generates
    // characters completely randomly. 

// logical NOT operator: 
    // This is the '!' used to check for something that is NOT present. When
    // using, for example in an if statement, the ! CAN exist in its own layer of 
    // parentheses followed by the condition it is refering to: if (!(2 > 3))
    // This is optional though, and the parentheses just for the NOT operator can be eliminated
    // altogether

// trailing comma: 
    // This is a comma that comes after the last item in an array 
    // or object and is useful when you know you will be adding more items
    // so that you don't have to create extra code later when appending a new item; 
    // the trailing commas makes it so that it is just ready to accept a new one.

// validation attributes: 
    // These are attributes added to HTML input elements that establish certain
    // requirements for the entered information, such as the minimum length (minlength), 
    // maximumlength (maxlength), minium and maximum cardinal numbers (min and max) etc.

// modal: 
        // essentially pop-up windows (except they have an intended 
        // purpose triggered by a user action ad arent just there to annoy you)

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


// snapshot: 
    // The data currently in a database at a specific moment in time.

// favicon: 
    // the small graphic that appears on the tab of a webpage to the left of the site name()