const body = document.querySelector('body');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div1.style.width = "100px";
div1.style.height = "100px";
div1.style.backgroundColor = "goldenrod";
div2.style.width = "100px";
div2.style.height = "100px";
div2.style.backgroundColor = "goldenrod";
div3.style.width = "100px";
div3.style.height = "100px";
div3.style.backgroundColor = "goldenrod";
let divPut1 = body.appendChild(div1);
let divPut2 = body.appendChild(div2);
let divPut3 = body.appendChild(div3);
console.log(body)