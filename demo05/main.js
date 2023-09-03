import small from './small.png'
import big from './big.png'

var img1 = document.createElement("img");
img1.src = small;
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = big;
document.body.appendChild(img2);
console.log('this is main.js')
