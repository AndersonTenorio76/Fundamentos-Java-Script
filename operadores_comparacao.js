let x = 10
let y = 20

// Maior que
console.log(x > y) //false

// Menor que
console.log(x < y) //true

// Maior ou igual
console.log(x >= y) //false

// Menor que
console.log(x <= y) //true

// Igual
console.log(10 == "10") //true

// Igualdade estrita
console.log(10 === "10") //false, pois tem de ser estritamente igual, inclusive no tipo de variavel

// Diferente de
console.log(10 !== "20") //true

// Se o sinal for verde, exiba "Pode passar"
// Se for amarelo, exiba "Atenção"
// Se for vermelho, exiba "Não pode passar"

let corSemaforo = "yubruirui" // verde, vermelho ou amarelo

if(corSemaforo == "verde") {
    console.log("Pode passar")
} else if (corSemaforo == "amarelo") {
    console.log("Atenção")
} else if (corSemaforo == "vermelho"){
    console.log ("Não pode passar")
} else {
    console.log ("Cor inválida")
}

//verificar se um numero é positivo, negativo ou zero
//retorna "o número é positivo" ou "negativo" ou "zero"

let numero = 30
if(numero > 0) {
    console.log ("O número é positivo")
} else if (numero < 0) {
    console.log ("O número é negativo")
} else {
    console.log (" O número é 0 (zero)")
}

// Exibir a faixa etária
// se a pessoa nasceu entre 1946 e 1964: Baby boomer
// se a pessoa nasceu entre 1965 e 1980: Geração X
// se a pessoa nasceu entre 1981 e 1996: Miillenial
// se a pessoa nasceu entre 1997 e 2021: Geração Z
// se a pessoa nasceu em 2013: Geração Alpha

let ano_nascimento = 2013
if (ano_nascimento == 2013) {
    console.log ("Geraçao Alpha")
} else if ((ano_nascimento >= 1946) && (ano_nascimento <= 1964 )) {
    console.log ("Baby boomer")
} else if ((ano_nascimento >= 1965) && (ano_nascimento <= 1980 )) {
    console.log ("Geração X")
} else if ((ano_nascimento >= 1981) && (ano_nascimento <= 1996 )) {
    console.log ("Millenial")
} else {
    console.log ("Geração Z")
}