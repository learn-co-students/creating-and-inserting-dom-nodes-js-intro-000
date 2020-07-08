var element = document.createElement('div');
var ul = document.createElement('ul');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#F9F9F9';

document.body.appendChild(element);
element.style.textAlign = 'center';

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

ul.style.textAlign = 'left';
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();
