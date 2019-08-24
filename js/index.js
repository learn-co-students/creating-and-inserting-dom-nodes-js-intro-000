var element = document.createElement('div');
//undefined
element.innerHTML = 'Hello, DOM!';
//"Hello, DOM!"
element.style.backgroundColor = '#f9f9f9';
//"#f9f9f9"
element.innerText = 'This is a test!';
//"This is a test!"
element.align = 'center';
//"center"
document.body.appendChild(element);
//<div align=​"center" style=​"background-color:​ rgb(249, 249, 249)​;​">​This is a test!​</div>​
element.innerText = 'I am almost done with this course!';
//"I am almost done with this course!"
element.innerText = 'Hello, World!';
//"Hello, World!"
document.body.appendChild(element);
//<div align=​"center" style=​"background-color:​ rgb(249, 249, 249)​;​">​Hello, World!​</div>​
var myElement = document.createElement('h1');
//undefined
myElement.innerText = 'This is h1';
//"This is h1"
document.body.appendChild(myElement);
//<h1>​This is h1​</h1>​
element.style.textAlign = 'center';
//"center"
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
//<ul>​…​</ul>​
ul.style.textAlign = 'left';
//"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'));
//<li>​2​</li>​
ul.remove();
//undefined


//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
