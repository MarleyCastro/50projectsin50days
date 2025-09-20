        function Fclick() {
            console.log('está funcionando');
            // serve para converter uma string em um número inteiro
            let num1 = Number(document.getElementById('num1').value);
            let num2 = Number(document.getElementById('num2').value);
            let result = num1 + num2;

            document.getElementById('result').innerHTML = ` ${num1} + ${num2} =  <strong>${result}</strong>`;


        }
