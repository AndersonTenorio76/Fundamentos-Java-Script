// function funcaoBomDia() {
//     console.log("Bom dia")
// }

// funcaoBomDia()

// function funcaoBoasVindas() {
//     console.log("seja Bem Vindo Anderson Tenório Nascimento")
// }

//  funcaoBoasVindas()

// function funcaoBoasVindas(nome) {
//     console.log("seja Bem Vindo,", nome)
// }

// funcaoBoasVindas("Matheus")
// funcaoBoasVindas("João")

// Função Soma
// function soma (num1, num2){
// console.log (num1 + num2)
// }
// soma(2,6)

// Função Multiplicar
// function produto (num1, num2){
//     console.log (num1 * num2)
//     }
//     produto(2,6)

// Função Maior Idade
// function verificarMaiorIdade(idade){
//     if(idade >= 100) {
//         console.log("Nossa, parabéns!!! Como conseguiu?")
//     } else if(idade >= 18) {
//         console.log("Maior de idade")
//     } else {
//         console.log("Menor de idade")
//     }
// }
// verificarMaiorIdade(13)
// verificarMaiorIdade(18)
// verificarMaiorIdade(100)
// verificarMaiorIdade(7)

// Função Divisão
// function divisao(n1, n2) {
//     return n1 / n2
// }
// let resultado = divisao(10,5)
// console.log(resultado) //console.log(divisao(10,5)) equivalente



// let subtracao = function (n1, n2) {
//     if(n1 >10 || n2 >10) {
//         return "Não é possível calcular numeros maiores que 10"
//     }
//     return n1 - n2
// }

// console.log(subtracao(10,5))
// console.log(subtracao(11,5))

//1. Crie uma função chamada "calcularIdade" que receba a idade e retorna o ano do nascimento
function calcularIdade (idade) {

    return 2024 - idade
}
console.log(calcularIdade(48))


//2. Crie uma função chamada "calcularMedia" que recebe tres notas e retorn média
function calcularMedia (n1, n2, n3){
    return (n1 + n2 + n3) / 3
}
console.log(calcularMedia(10, 7, 4))

//3. Crie uma funçao chamada "verificarParImpar" que recebe um numero e retorna
// "Par" seo o número for par, ou "Impar" se o número for ímpar
// function verificarParImpar (n) {
//     if (n % 2 == 0){
//         console.log ("Par")
//     } else {
//         console.log ("Impar")
//     }
// }
// verificarParImpar (5)

// function verificarParImpar (n) {
//     if (n % 2 == 0){
//         return "Par"
//     } else {
//         return "Impar"
//     }
// }
// verificarParImpar (5)

function verificarParImpar (n) {
      return  n % 2 == 0 ? "Par" : "Impar"
    }

console.log (verificarParImpar (5))

let dobro = (numero) => numero * 2
/*
function dobro(){
return numero * 2
}*/
console.log(dobro(4))
