const  nome = ['Lucas', 'Medeiros', 'Costa'];


// For classico - geralmente com itraveis ( array ou strings)
//For in - Retorna o indice ou chave ( string , array ou obejtos)(
// For of - Retorna o valor em si ( iteraveis , arrays ou strings)


for ( let i = 0; i < nome.length ; i++) { 
  console.log(nome[i]);
 }


for (let i in nome) {
    console.log(nome[i]);
}

for ( let valor of nome) {
   console.log(valor);
 }

nome.forEach(function(valor,indice,array) {
      console.log(valor, indice, array)
});


const pessoa = {
   nome: 'valentin',
   sobrenome: 'andrade'
};

for(let chave in pessoa) {
   console.log(chave, pessoa[chave]);
}
