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

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = 'GoodBbye'
// headerTitle.innerHTML = '<h3>Hello</h3>';


// main difference between textContent and innerText//


// header.style.borderBottom = 'solid 2px #000';



/************************************/
// GET ELEMENTS BY CLASS NAME
/************************************/

// let items = document.getElementsByClassName('list-group-item');
// console.log(items)//here we get list of elements
// console.log(typeof items) //herer this object type (array)
// we can access individual element
// items[0].textContent = "Hi"
// items[0].style.fontWeight = 'bold';

// WE CAN NOT ACCESS ALL ELEMNTS ONCE LIKE THIS

// for(i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }


/************************************/
// GET ELEMENTS BY TAG NAME
/************************************/

// let li = document.getElementsByTagName('li');
// console.log(li)//here we get list of elements
// // console.log(typeof items) //herer this object type (array)
// //we can access individual element
// li[0].textContent = "Hi"
// li[0].style.fontWeight = 'bold';

// //WE CAN NOT ACCESS ALL ELEMNTS ONCE LIKE THIS

// for(i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

/************************************/
// OUERY SELECTOR
/************************************/

// //this one is similar to jQuery `$('selector')`

// //ONE SEPECIAL THING ABOUT THIS SELECTOR IS WE CAN GRAB ANY ELEMENTS TAGS, ID, CLASS

// let header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 4px #ccc'

// let input = document.querySelector('input');

// input.value = 'Hello world'

// //we can also grap attributes of the element

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// // WE CON'T LIST OF ITEM IN THIS SELECTOR IT GRAB ONE FIRST ELEMENT
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child')

// lastItem.style.color="blue"

/************************************/
// OUERY SELECTOR ALL
/************************************/

// let title = document.querySelectorAll('.title');
// console.log(title);

// for(let i =0 ; i < title.length; i++){
//     title[i].textContent = "Hello"
// }

// // Selecting Pseduo Selector

// let liOdd = document.querySelectorAll('li:nth-child(odd)');

// for(let i = 0; i < liOdd.length; i++){
//     liOdd[i].style.backgroundColor = '#f4f4f4'
// }