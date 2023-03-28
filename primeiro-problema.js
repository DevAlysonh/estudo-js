const precoLivros = [25, 15, 30, 50, 45, 20];

let menorPreco = 0;

for(let actual = 0; actual < precoLivros.length; actual++){
    if(precoLivros[actual] < precoLivros[menorPreco]){
        menorPreco = actual;
    }
}
console.log(`O livro mais barato custa: ${precoLivros[menorPreco]}`);