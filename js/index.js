//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded


var element1 = document.createElement('div');

var element2 = document.createElement('p')

element1.innerHTML = 'Hello, DOM!';
element2.innerHTML = "Hey!";
element2.style.backgroundColor = 'red';
element2.style.textAlign = 'center';


// To get an element to appear in the DOM, we have to append it to an existing DOM node.

document.body.appendChild(element1);
document.body.appendChild(element2);

////////////////////////////////////////////////////////////

var element = document.createElement('div');
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
document.body.appendChild(element);
element.style.textAlign = 'center';

var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);


ul.style.textAlign = 'left';


ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();


//  #f9f9f9