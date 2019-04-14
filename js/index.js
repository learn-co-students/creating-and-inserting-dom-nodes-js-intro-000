//this file is optionalitle>
var element=document.createElement('div');
element.innerHTML="Hello,DOM!";

document.body.appendChild(element);
element.style.textAlign='center';
var ul=document.createElement('ul');
for (let i=0; i<3; i++){
let li=document.createElement('li');
li.innerHTML=(i+1).toString();
}
element.appendChild(ul);
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();</title>
//you can use this to paste in js code and have it run when index.html is loaded
