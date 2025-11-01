const textBox = document.getElementById('textBox');
const toFah = document.getElementById('toFah');
const toCel = document.getElementById('toCel');
const buttonSubmit = document.getElementById('buttonSubmit');
const result = document.getElementById('result');

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let temp;
    if(toFah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.innerText = temp.toFixed(1) + "ºF";
    }else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.innerText = temp.toFixed(1) + "ºC";
    }else{
        result.innerText = "Select a Unit"
    }
})
