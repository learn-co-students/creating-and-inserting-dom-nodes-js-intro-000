//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
undefined
element.innerHTML = 'Hello, DOM!';
"Hello, DOM!"
element.style.backgroundColor = '#555555';
"#555555"
element.style.color = '#FBBF29';
"#FBBF29"
document.body.appendChild(element);
<div style=​"background-color:​ rgb(85, 85, 85)​;​ color:​ rgb(251, 191, 41)​;​">​Hello, DOM!​</div>​
element.style.textAlign = 'center';
"center"
var ul = document.createElement('ul');
undefined
for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}
<li>​3​</li>​
element.appendChild(ul);
<ul>​…​</ul>​
ul.style.textAlign = 'left';
"left"
ul.removeChild(ul.querySelector('li:nth-child(2)'));
<li>​2​</li>​
ul.remove();
