// vc tem que colocar o   "type": "module",no chalk
import chalk from 'chalk';


let nota = 1


if (nota >= 7){
    console.log(chalk.green("parabéns! Você passou!"))

}else {
    console.log(chalk.bgRed.black("Sinto muito! Você não passou."))
}