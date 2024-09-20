/* 3 - Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const faturamentoJson = `{
    "faturamento": [
        { "dia": 1, "valor": 1500 },
        { "dia": 2, "valor": 0 },
        { "dia": 3, "valor": 2000 },
        { "dia": 4, "valor": 2500 },
        { "dia": 5, "valor": 0 },
        { "dia": 6, "valor": 3000 },
        { "dia": 7, "valor": 0 },
        { "dia": 8, "valor": 4000 },
        { "dia": 9, "valor": 5000 },
        { "dia": 10, "valor": 0 }
    ]
}`;

// Função para calcular o faturamento 
function calcularFaturamento(faturamentoJson) {
    const dados = JSON.parse(faturamentoJson).faturamento;

    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    for (const dias of dados) {
        const valor = dias.valor;

        if (valor > 0) {
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;

            totalFaturamento += valor;
            diasComFaturamento++;
        }
    }

    const mediaMensal = diasComFaturamento > 0 ? totalFaturamento / diasComFaturamento: 0;

    let diasAcimaMedia = 0;
    for (const dias of dados) {
        if (dias.valor > mediaMensal) {
            diasAcimaMedia++;
        }
    }

    return {
        menorValor: menorValor === Infinity ? 0 : menorValor,
        maiorValor: maiorValor === -Infinity ? 0 : maiorValor,
        diasAcimaMedia: diasAcimaMedia
    };

    //Executando a função e mostrando os resultados
    const resultados = calcularFaturamento(faturamentoJson);
    console.log(`O menor valor de faturamento foi: R$ ${resultados.menorValor}`);
    console.log(`O maior valor de faturamento foi: ${resultados.maiorValor}`);
    console.log(`Total de dias com faturamento acima da média: ${resultados.diasAcimaMedia}`);
}