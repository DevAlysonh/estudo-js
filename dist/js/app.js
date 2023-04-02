import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.getVolume);
console.log(negociacao.getData);
console.log(negociacao.getQuantidade);
console.log(negociacao.getVolume);