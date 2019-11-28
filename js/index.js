//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var main = document.getElementById('main');
var ul = document.createElement('ul');
for (var i = 0; i < 5; i++) {
  var li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
main.appendChild(ul);
ul.removeChild(document.querySelector('#main ul li:nth-child(2)'));
