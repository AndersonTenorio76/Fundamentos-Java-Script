//1. Transforme o array abaixo em um novo array contento o dobro de cada número 
//Entrada [1, 2, 3, 4, 5]
//Resultado [2, 4, 6, 8, 10]

let numeros = [1, 2, 3, 4, 5]

//Map() criar um novo Array transformando os elementos

let numerosDobro = numeros.map(num => num * 2)

console.log(numerosDobro)

//PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js 
//[ 2, 4, 6, 8, 10 ]

//2. Filtre apenes os numeros pares do array abaixo
 //   - Entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 //   - Resultado [2, 4, 6, 8, 10]

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosPares = numeros2.filter(n => n%2 == 0)
console.log(numerosPares)
//PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js
// [ 2, 4, 6, 8, 10 ]
// [ 2, 4, 6, 8, 10 ]
//

//3. Encontre o primeiro maior numero maior que 50 no array abaixo
// - Entrada [10, 25, 47, 58, 62, 79]
// - Resultado: 58

let numeros3 = [10, 25, 47, 58, 62, 79]
let maiorQue50 = numeros3.find(n => n>50)
console.log(maiorQue50)
//PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js
//[ 2, 4, 6, 8, 10 ]
//[ 2, 4, 6, 8, 10 ]
//58


//4. Verifique se existe pelo menos um número negativo
//- Entrada [10, -5, 7, 0, -3]
//- Resultado: true

//Some() Verifica se um elemento satisfaz a condição
let numeros4 = [10, -5, 7, 0, -3]
let existeNegativo = numeros4.some(n => n < 0)
console.log(existeNegativo)
//PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js
//[ 2, 4, 6, 8, 10 ]
//[ 2, 4, 6, 8, 10 ]
//58
//true

//5. Verifique se todos os numeros do array são maiores que 2
//- Entrada [1, 2, 3, 4, 5]
//- Resultado: false
//Includes() Verifica se o numero existe no Array 
let numeros5 = [1, 2, 3, 4, 5]
let todosMaioresQue2 = numeros5.every(n => n > 2)
console.log(todosMaioresQue2)
//PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js
//[ 2, 4, 6, 8, 10 ]
//[ 2, 4, 6, 8, 10 ]
//58
//true
//false


//6. Imprima no terminal a posição (index) de cada elemento no array abaixo
//- Entrada [10, 20, 30, 40, 50]
//- Resultado: 
//    O numero: 
//        O numero 10 está na posição 0
//        O numero 20 está na posição 1
//        O numero 30 está na posição 2
 //       O numero 40 está na posição 3
 //       O numero 50 está na posição 4
 let numeros6 = [10, 20, 30, 40, 50]
 let posicaoIndex = numeros6.forEach((numeros6, index) => console.log("O numero",numeros6,"está na posição" ,index))
 //PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js
 //[ 2, 4, 6, 8, 10 ]
 //[ 2, 4, 6, 8, 10 ]
 //58
// true
 //false
 //O numero 10 está na posição 0
 //O numero 20 está na posição 1
 //O numero 30 está na posição 2
 //O numero 40 está na posição 3
 //O numero 50 está na posição 4
 
 
 //7. Verifique se o numero 7 esta presente no array
 //- Entrada [1, 3, 5, 7, 9, 10]
 //- Resultado: true
let numeros7 = [1, 3, 5, 7, 9, 10]
let existeONumero7 = numeros7.includes(7)
console.log(existeONumero7)
// PS C:\Users\aluno.DSN1381178957\Desktop\Javascript\Fundamentos-Java-Script> node exerciciosArray.js
// [ 2, 4, 6, 8, 10 ]
// [ 2, 4, 6, 8, 10 ]
// 58
// true
// false
// O numero 10 está na posição 0
// O numero 20 está na posição 1
// O numero 30 está na posição 2
// O numero 40 está na posição 3
// O numero 50 está na posição 4
// true
