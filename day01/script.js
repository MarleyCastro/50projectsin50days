    function clique() {
        let  calcular = (operador,num1,num2) =>{
    switch (operador) {
        case '+':
            return num1 + num2

        case '*':
            
            return num1 + num2

        case '/':
            
            return num1 + num2

        case '-':
            
            return num1 + num2
    
        default:
        return alert('Operador inválido')
    }
}

    let operador = prompt("Escolha um desses operadores [+,-,/,*]")
    let num1 = parseFloat(prompt("insira o primeiro"))
    let num2 = parseFloat(prompt("insira o segundo"))

    let resultadoCalculo = calcular(operador,num1,num2)

    document.getElementById("resultado").innerHTML = "Resultado " + resultadoCalculo
    }
    