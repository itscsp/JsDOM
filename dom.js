//To get complete DOm Tree//

// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// we can change these things //

// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); //any thing that added to html are added document.all
// document.body.bgColor = "#000";
// console.log(document.forms)


//--------------------------------
// Selectors
//--------------------------------

// 1.document.getElementById()
// 2.document.getElementsByClassName
// 3.document.getElementByTagName()
// 4.document.querySelector();
// 5.document.querySelectorAll()


/************************************/
// GET ELEMENT BY ID
/************************************/

// WE CAN DO LIKE THIS ALSO
// console.log(document.getElementById('header-title'));

// WE CAN ASSIGN INTO A VARIABLE ASLO

let headerTitle = document.getElementById('header-title');

console.log(headerTitle);
// headerTitle.textContent = "Hello";
headerTitle.innerText = 'GoodBbye'