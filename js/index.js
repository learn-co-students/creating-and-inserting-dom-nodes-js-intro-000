// CREATE THE ELEMENT

var element = document.createElement("div");
element.innerHTML = " YOOO!, WASSUP DOM!"
element.style.backgroundColor = '#f9f9f9';

// PLACE THE element

document.body.appendChild(element);
// STYLE it again
element.style.textAlign = "center";

// We can append multiple elements to an element,

var ul = document.createElement("ul");
for (let i = 0 ; i < 3 ; i++){
  let li = document.createElement("li");
  li.innerHTML = (i+1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
ul.style.textAlign = 'left';

// To delete one of the li
ul.removeChild(ul.querySelector('li:nth-child(2)'));

// To delete the whole unordered list
ul.remove()
