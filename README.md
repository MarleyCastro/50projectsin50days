<h1>Projeto número 1</h1>
javascriptCopy// Define a função principal que será chamada quando o botão for clicado
function clique() {
    // Define uma função interna (arrow function) que realiza os cálculos
    // Recebe o operador e dois números como parâmetros
    let calcular = (operador, num1, num2) => {
        // Usa um switch para verificar qual operador foi escolhido
        switch (operador) {
            case '+':
                return num1 + num2  // Soma os dois números

            case '*':
                return num1 * num2  // Multiplica os dois números

            case '/':
                return num1 / num2  // Divide o primeiro número pelo segundo

            case '-':
                return num1 - num2  // Subtrai o segundo número do primeiro
        
            default:
                // Se o operador não for reconhecido, mostra um alerta de erro
                return alert('Operador inválido')
        }
    }

    // Solicita ao usuário que escolha um operador matemático
    let operador = prompt("Escolha um desses operadores [+,-,/,*]")
    
    // Solicita o primeiro número e converte para número decimal
    let num1 = parseFloat(prompt("insira o primeiro"))
    
    // Solicita o segundo número e converte para número decimal
    let num2 = parseFloat(prompt("insira o segundo"))

    // Chama a função calcular com os parâmetros informados pelo usuário
    let resultadoCalculo = calcular(operador, num1, num2)

    // Exibe o resultado no elemento HTML com id "resultado"
    document.getElementById("resultado").innerHTML = "Resultado " + resultadoCalculo
}
