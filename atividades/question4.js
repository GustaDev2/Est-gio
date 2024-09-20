/*
4 -  Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

// Faturamento mensal por estado

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

// Cálculo do faturamento total
let faturamento = sp + rj + mg + es + outros;

// Cálculo do percentual de representação para cada estado

let percentualSP = (sp / faturamentoTotal) * 100;
let percentualRJ = (rj / faturamentoTotal) * 100;
let percentualMG = (mg / faturamentoTotal) * 100;
let percentualES = (es / faturamentoTotal) * 100;
let percentualOutros = (outros / faturamentoTotal) * 100;

// Exibindo os resultados 

console.log("Percentual de representação por estado:")
console.log("SP: " + percentualSP.toFixed(2) + "%");
console.log("RJ: " + percentualRJ.toFixed(2) + "%");
console.log("MG: " + percentualMG.toFixed(2) + "%");
console.log("ES: " + percentualES.toFixed(2) + "%");
console.log("Outros: " + percentualOutros.toFixed(2) + "%");
