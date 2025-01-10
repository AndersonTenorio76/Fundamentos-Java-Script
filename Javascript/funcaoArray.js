let numeros = [1, 2, 3, 4]

//Map() criar um novo Array transformando os elementos

let numerosDobro = numeros.map(num => num * 2)

console.log(numerosDobro)

// Find() Retornar o primeiro elemento que satisfaz a condição

let primeiro = numeros.find(num => num > 2)

console.log(primeiro)

let nomes = ["Andre", "Angelica", "Natalia", "Matheus"]

let primeiroComT = nomes.find(nome => nome.includes("t"))
console.log(primeiroComT)


// Filter() Cria um novo array com elementos que satisfazem a 
let maioresQue3 = numeros.filter(n => n>1)
console.log(maioresQue3)

//Includes() Verifica se o numero existe no Array 
let existeONumero5 = numeros.includes(5)
console.log(existeONumero5)

//Some() Verifica se um elemento satisfaz a condição
let existeAlgumPar = numeros.some(n => n % 2 == 0)
console.log(existeAlgumPar)

// ForEach () Igual a um For normal
// let listarNomes = nomes.forEach((nome) => console.log(nome))

let listarNomes = nomes.forEach((nome, index) => console.log(nome, index))

// Every()

let numeros2 = [1, 2, 3, 4, 5]
let todosMaioresQue2 = numeros2.every(n => n > 2)
console.log(todosMaioresQue2)


