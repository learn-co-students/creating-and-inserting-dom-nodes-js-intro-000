var element = document.createElement('div');
undefined
element
<div>​</div>​
element.innerHTML = 'Hello, DOM!';

element.style.backgroundColor = '#f9f9f9';

document.body.appendChild(element);
<div>​Hello, DOM!​</div>​

element.style.textAlign = 'center';

var ul = document.createElement('ul');

for(let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}
<li>​3​</li>​
element.appendChild(ul);

ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));
<li>​2​</li>​
ul.remove();
