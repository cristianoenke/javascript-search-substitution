/*
Desafio
Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.

Entrada
A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. Os caracteres poderão ser espaços, letras, ou números.

Saída
A saída deve conter o conjunto de palavras da entrada ordenado pelo tamanho das palavras e caso o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.. Um espaço em branco deve ser impresso entre duas palavras.
*/

var TotalItems = prompt();
var FilaOriginal = []
var FilaSorted = []
var FilaDecrescente = []
var Itens = []
for (var i = 0; i < TotalItems; i++) {
    Itens = prompt();
    FilaOriginal = Itens.toString().split(' ');
    FilaOriginalSOrted = FilaOriginal.sort();
    //console.log(FilaOriginal); 
    FilaDecrescente = FilaOriginalSOrted.sort((a,b) => b.length - a.length);
    let resposta = [...FilaDecrescente].join(" ");
    console.log(resposta)
    FilaOriginal = []
    FilaSorted = []
    FilaDecrescente = []
    Itens = []
}