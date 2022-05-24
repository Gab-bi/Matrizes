var matriz = new Array();
var colunas = new Array();
var resposta; 

// i representa o número de linhas 
// x representa o número de colunas

var nrlinhas = parseInt(prompt("Digite o número de linhas: "));
var nrcolunas = parseInt(prompt("Digite o número de colunas: "));
var escalar = parseInt(prompt("Digite o escalar que multiplicará a matriz: "));

for(x = 0; x < nrcolunas; x++){
    colunas[x] = 0;
}

console.table(colunas);

for (i = 0; i < nrlinhas; i++) {
  matriz.push([colunas]);
  for (x = 0; x < nrcolunas; x++) {
    matriz[i][x] = parseInt(prompt("Digite os valores da matriz na linha: " + i + " e coluna" + x));
  }
}

document.write("<h1 class='quebrarl'>" + escalar + " </h1>");
document.write("<h1 class='quebrarl'> x </h1>");

document.write("<table border=1 class='quebrarl'>");
for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<h1 class='quebrarl'> = </h1>");

document.write("<table border=1 class='quebrarl'>");
for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        resposta = 0;
        resposta = matriz[i][x] * escalar;
        linha = linha + "<td>" + resposta + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");