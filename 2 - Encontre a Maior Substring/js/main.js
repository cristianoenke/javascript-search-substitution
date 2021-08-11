/*
Desafio
Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').

Entrada
A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

Saída
O tamanho da maior subsequência comum entre as duas Strings.

 */

var Char = []
var Char1 = []
var Char2 = []
var count = 0
var max_count = 0
var valid_string = true
while (valid_string == true) {
    Char = prompt();
    Char1 = Char.toString();
    Char = prompt();
    Char2 = Char.toString();
    if (Char1 == "" || Char2 == ""){
        valid_string = false
        break
    }
    for (var i = 0; i < Char1.length; i++) {
        for (var j = 0; j < Char1.length; j++) {
            if ( Char1[i] == Char2[j]) {
                count = count+1
                i = i+1
            }    
        }
        if (count>max_count) {
            max_count = count
        }
        count = 0
    }
    if (valid_string == true){
        console.log(max_count)
    }
    max_count = 0
}