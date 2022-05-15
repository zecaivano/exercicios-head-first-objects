var chevy = {
    marca:  "Chevy",
    modelo: "Bel Air",
    ano:    1957,
    cor:    "vermelho",
    passageiros:    2,
    conversivel:    false,
    kmRodados:      1021
};

var cadi = {
    marca:  "GM",
    modelo: "Cadillac",
    ano: 1955,
    cor:    "marrom",
    passageiros: 5,
    conversivel: false,
    kmRodados: 12892
};

console.log(chevy);
console.log(cadi);

for (var prop in chevy){
    console.log (prop + ": " + chevy[prop]);
}