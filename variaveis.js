// //Strings
// let nome = "Maria"
// let sobrenome = 'Carvalho'
// let nome_completo = nome + " "+sobrenome

// let profissao = `Programador`
// let ano_nascimento = 1995
// let saudacao = "A " +nome + " é " + profissao
// console.log(nome)
// console.log(saudacao)
// console.log(`Bem vinda, ${nome} ${sobrenome}`)
// console.log(nome_completo)
// console.log(`Bem vindo(a), ${nome_completo}`)
// // Number
// let idade = 29
// console.log(idade)
// let aniversario = "8"
// let temperatura = 36.5
// console.log(temperatura)
// let soma = 29 + 1
// console.log(soma)
// let subtracao = 2-1
// console.log(subtracao)
// let multiplicacao = 5*3
// console.log(multiplicacao)
// let divisao = 50/10
// console.log(divisao)
// // Boolean
// let estaChovendo = false
// let estaSol = true
// console.log(estaChovendo)
// console.log(estaSol)
// // Array

// //Para criar um array []
// let frutas = ["Abacaxi","Laranja","Melancia","Maça"]

// //Adicionar no final da array
// frutas.push("Uva")

// //Remover o primeiro elemento
// frutas.shift()

// // Remover o último elemento
// frutas.pop()




// console.log(frutas[2])
// let numeros =[1, 2, 3, 4, 5, 6]
// // index      0  1  2  3  4  5
// numeros.pop()
// numeros.pop()
// numeros.push(6)
// numeros.push(7) //numeros.push(6, 7)
// numeros.shift()
// numeros.shift()




// console.log(frutas.length)
// console.log(numeros)

// // [3, 4, 6, 7]

// Objeto
// let pessoa = {
//     nome: "João",
//     sobrenome: "Duarte",
//     idade: 28,
//     estrangeiro: false,
//     linguagens: ["Java", "Go", "Python", "Cobol", "C#"]
// }
// console.log(`Nome: ${pessoa.nome}`)
// console.log(`Sobrenome: ${pessoa.sobrenome}`)
// console.log(`Idade: ${pessoa.idade}`)

// //Adicionando uma nova propriedade
// pessoa.profissao = "Desenvolvedor"

// //Alterar a propriedade
// pessoa.idade = 27

// //Excluir uma propriedade
// delete pessoa.linguagens
// console.log(pessoa)

// let carro = {
//     marca: "Fiat",
//     modelo: "Toro",
//     ano: 2023,
//     cor: "azul"
// }
// console.log(carro)
// console.log(`Marca: ${carro.marca}`)
// console.log(`Modelo: ${carro.modelo}`)
// console.log(`Ano: ${carro.ano}`)
// console.log(`Cor: ${carro.cor}`)

let carros = [
    {marca: "Toyota", modelo: "Corolla"}, //0
    {marca: "Honda", modelo: "Civic"}, //1
    {marca: "Fiat", modelo: "Uno"} //2
]
console.log(carros[1].modelo)
console.log(carros[2].modelo)
