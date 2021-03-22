const hello = document.createElement('div');
document.body.appendChild(hello);
hello.innerHTML = 'Hello DOM!';
hello.style.textAlign = 'center';
hello.style.color = 'cornsilk';
hello.style.backgroundColor = 'rgb(150,150,256)';
hello.style.height = '100px';
hello.style.fontSize = '85px';
hello.style.marginLeft = '30px';
hello.style.marginRight = '30px';

const ul = document.createElement('ul');
document.body.appendChild(ul);

for(let i = 0; i < 3; i++) {
      let li = document.createElement('li');
      li.innerHTML = (i + 1).toString();
      ul.appendChild(li);
}

ul.style.color = "rgb(0, 45, 25)";
ul.style.fontSize = '4em';
