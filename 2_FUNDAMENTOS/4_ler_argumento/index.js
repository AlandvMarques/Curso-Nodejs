//nome

//patre 1
console.log(process.argv)

//parte 2
const args = process.argv.slice(2)

console.log(args)

//parte 3
const nome = args[0].split("=")[1]

console.log(nome)

//parte 4

const idade = args[1].split("=")[1]

console.log(idade)

console.log()

//parte 5

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`)