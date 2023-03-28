const livros = require('./lista-livros');

let menorPreco = 0;

for(let actual = 0; actual < livros.length; actual++){
    if(livros[actual].preco < livros[menorPreco].preco){
        menorPreco = actual;
    }
}
console.log(`O livro mais barato é o de ${livros[menorPreco].titulo}, ele custa: R$${livros[menorPreco].preco}`);