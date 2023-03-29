const livros = require('./lista-livros');
const menorValor = require('./primeiro-problema');

for(atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    livros[atual] = livros[menor];
    livros[menor] = livroAtual;
}
 console.log(livros);