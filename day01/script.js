document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('input-box');
    let buttons = document.querySelectorAll('button');

    let string = ""; // Mudei o nome para minúsculo para evitar conflito
    let arr = Array.from(buttons);
    
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if(e.target.innerHTML == '='){
                string = eval(string);
                input.value = string;
            } else if(e.target.innerHTML == 'AC'){
                string = "";
                input.value = string;
            } else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);
                input.value = string; // Corrigido: adicionei o = string
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
            // REMOVI as duas linhas duplicadas que estavam aqui
        });
    });
});
