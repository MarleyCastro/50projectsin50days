<h1>1 - Calculadora</h1>
# Descrição do Código da Calculadora

Este código JavaScript implementa uma calculadora básica com interface web. A calculadora suporta operações matemáticas padrão (adição, subtração, multiplicação e divisão), além de funcionalidades para limpar o visor e apagar caracteres.

## Funcionalidades Principais

O código:
1. Espera pelo carregamento completo do DOM para garantir que todos os elementos HTML estejam disponíveis
2. Seleciona o campo de entrada e todos os botões da calculadora
3. Configura event listeners para cada botão da calculadora
4. Gerencia diferentes ações dependendo do botão pressionado:
   - Números e operadores são adicionados à expressão atual
   - O botão "=" avalia a expressão matemática e exibe o resultado
   - O botão "AC" (All Clear) limpa completamente a expressão
   - O botão "DEL" (Delete) remove o último caractere da expressão

## Detalhes de Implementação

- Usa o método `eval()` para calcular o resultado de expressões matemáticas
- Implementa manipulação de strings para gerenciar a expressão que está sendo construída
- Atualiza o campo de entrada da calculadora para refletir as alterações após cada interação do usuário
- Segue o padrão de event listener para responder aos cliques nos botões
- Organiza a lógica em estruturas condicionais para tratar diferentes tipos de botões

Este código proporciona uma implementação funcional de uma calculadora simples para operações matemáticas básicas em uma página web.

<h1>2 - Gerador de Senhas</h1>
# Descrição do Código do Gerador de Senhas

## Estrutura do Código JavaScript

O código JavaScript do gerador de senhas pode ser dividido em três partes principais:

### 1. Inicialização e Seleção dos Elementos DOM

```javascript
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
```

Esta seção captura todas as referências aos elementos HTML que serão manipulados:
- Controles de entrada (slider e checkboxes)
- Elementos de exibição (campo de senha e valor do slider)
- Botão de geração de senha

### 2. Configuração dos Event Listeners

```javascript
// Inicializa o display do valor do slider
sliderValue.textContent = inputSlider.value;

// Atualiza o display quando o slider é movido
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

// Adiciona o listener para o botão de geração
genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});
```

Esta parte:
- Define o valor inicial exibido para o comprimento da senha
- Configura a atualização dinâmica desse valor quando o usuário move o slider
- Conecta o botão de geração à função que criará a senha

### 3. Algoritmo de Geração de Senha

```javascript
function generatePassword() {
    let genPassword = "";
    let allChars = "";
    
    // Adiciona conjuntos de caracteres com base nas seleções
    if (lowercase.checked) {
        allChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase.checked) {
        allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers.checked) {
        allChars += "0123456789";
    }
    if (symbols.checked) {
        allChars += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
    }
    
    // Define um conjunto padrão se nenhum foi selecionado
    if (allChars === "") {
        allChars = "abcdefghijklmnopqrstuvwxyz";
        lowercase.checked = true;
    }
    
    // Gera a senha com o comprimento especificado
    const passwordLength = inputSlider.value;
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        genPassword += allChars[randomIndex];
    }
    
    return genPassword;
}
```

O algoritmo de geração:
1. Cria um conjunto de caracteres permitidos baseado nas seleções do usuário
2. Implementa um failsafe que usa letras minúsculas se nenhuma opção foi selecionada
3. Gera a senha pelo processo de:
   - Obter o comprimento desejado do slider
   - Selecionar caracteres aleatórios do conjunto permitido
   - Concatenar esses caracteres para formar a senha

## Aspectos Técnicos Notáveis

1. **Aleatoriedade**: Utiliza `Math.random()` para criar seleções imprevisíveis de caracteres.

2. **Concatenação de strings**: Constrói o conjunto de caracteres permitidos de forma dinâmica usando o operador `+=`.

3. **Detecção de caso-limite**: Inclui lógica para lidar com o caso em que nenhum tipo de caractere foi selecionado.

4. **Modelo de listener separado**: Separa a lógica de atualização da interface da lógica de geração de senha.

5. **Acesso direto ao DOM**: Utiliza referências diretas aos elementos HTML para manipulação eficiente.

Este código representa uma implementação simples mas eficaz de um gerador de senhas, equilibrando a complexidade do algoritmo com uma experiência de usuário intuitiva.
