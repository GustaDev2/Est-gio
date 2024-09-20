/* 2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function isFibonacci(n) {
    let a = 0;
    let b = 1;

    while (a <= n) {
        if (a === n) {
            return true;
        }
        [a, b] = [b, a + b]; // Atualiza a e b
    }
    return false;
}

// Número a ser verificado 
const num = parseInt(prompt("informe um número: "), 10);

//Verificando se o número pertence á sequência de Fibonacci 
if(isFibonacci(num)) {
    console.log(`o número ${num} pertence á sequência de Fibonacci`);
} else {
    console.log(`O número ${num} não pertence á sequência de Fibonacci`);
}