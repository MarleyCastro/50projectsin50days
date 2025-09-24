const myButton = document.getElementById('myButton');
const myLabel1 = document.getElementById('myLabel1');
const myLabel2 = document.getElementById('myLabel2');
const myLabel3 = document.getElementById('myLabel3');
const min = 1;
const max = 10;

myButton.onclick = function () {
    const radomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const radomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const radomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;

    myLabel1.textContent = radomNum1;
    myLabel2.textContent = radomNum2;
    myLabel3.textContent = radomNum3;
}