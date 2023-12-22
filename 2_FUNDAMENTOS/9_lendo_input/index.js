// forma de colocar dados pelo terminal no NodeJs


import chalk from 'chalk';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const nota = await rl.question('Qual foi a sua nota? ');


if (nota >= 7){
    console.log(chalk.green(`parabéns! Você passou! Com nota ${nota}` ))

}else {
    console.log(chalk.red.bgBlack(`Sinto muito! Você não passou, pois ficou com nota ${nota}`))
}

rl.close();


