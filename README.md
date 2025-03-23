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
