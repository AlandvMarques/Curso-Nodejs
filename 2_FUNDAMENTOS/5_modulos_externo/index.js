//parte 2
const minimist = require("minimist")

const args = minimist(process.argv.slice(5))

console.log(args)

//parte 2

const nome =args['nome']
const profissao = args['profissao']

console.log(nome, profissao)

//parte 3

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`)