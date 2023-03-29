const livros = require('./lista-livros');

function ordenaLivros(arrProdutos, posicaoAtual)
{
    let menorPreco = posicaoAtual;

    for(let actual = posicaoAtual; actual < arrProdutos.length; actual++){
        if(arrProdutos[actual].preco < arrProdutos[menorPreco].preco){
            menorPreco = actual;
        }
    }
    return menorPreco;
}

module.exports = ordenaLivros;