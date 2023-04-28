document.write("Vamos contar: ");
for (i = 1; i <=10; i++){
    document.write("Contando "+ i + "<br>");
}

const populacoes = {
    "São Paulo" : 10000000,
    "Guarulhos" : 700000,
    "Santo Andre" : 1300000,
};

for (const cidade in populacoes) {
    console.log(`${cidade} tem ${populacoes[cidade]} habitantes.<br>`);
}

function somaDois(x, y) {
    return x + y;
}

let resultado = somaDois(2, 2);
console.log(resultado);

var somaDois = function(x , y) {
    return x + y;
}

