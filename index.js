import chalk from 'chalk';
import fs from 'fs'

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Caminho Invalido'))
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf8'
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro)
    }
    console.log(chalk.green(texto))
  })
}

pegaArquivo('./arquivos/texto1.md')