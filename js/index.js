//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

function createElms() {
  var elm = document.createElement('div');
  elm.innerHTML = 'Helloooo';
  elm.style.background = '#f9f9f9';
  document.body.appendChild(elm);
  elm.style.textAlign = 'center';
  
  var par = document.createElement('p');
  elm.appendChild(par);
  par.innerHTML = 'This is a test paragraph';
  par.style.textAlign = 'left';
  
  var ulst = document.createElement('ul');
  elm.appendChild(ulst);
  ulst.style.textAlign = 'left';
  
  let litem;
  for (let i=1; i<10; i++) {
    litem = document.createElement('li');
    ulst.appendChild(litem);
    litem.innerHTML = `an amazing 1 digit number: ${i}`;
  }
}

function removeElms() {
  document.querySelector('ul').removeChild(document.querySelector('ul').querySelector('li:nth-child(7'));
  document.querySelectorAll('li')[3].remove();       // the index is 0-based, will remove 'xxx-4'
}

createElms();
removeElms();