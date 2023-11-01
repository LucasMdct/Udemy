
// const array = [1,2,3];

// array.push(4);

// array[0] = 'Luiz';
// array = 'outra';
// console.log(array);

// const nom01 = 'Lucas';
// const sobrenome01 = 'Medeiros';
// const idade01 = '24';


// const nom02 = 'Andressa andrade';
// const sobrenome02 = 'de oliveira';
// const idade02 = '28';

// const pessoal = {
//     nome: "Lucas",
//     sobrenome: "Medeiros",
//     idade: 25,
// };

// console(pessoal.nome);
// console(pessoal.sobrenome);

// function criaPessoa( nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     };
// }

// const pessoa1 = criaPessoa('Lucas', 'Medeiros', 24);
// const pessoa2 = criaPessoa('Andressa', 'Andrade', 28);
// const pessoa3 = criaPessoa('Raquel', 'Medeiros', 51);
// const pessoa4 = criaPessoa('Felipe', 'Medeiros', 21);
// const pessoa5 = criaPessoa('ZeZao', 'Valentao', 2);

// console.log(pessoa1.nome, pessoa2.nome);



 const pessoal = {
     nome: "Lucas",
     sobrenome: "Medeiros",
     idade: 25,

     fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando Olá ....`);
        console.log(`A minha idadae atual é ${this.idade} ....`);
     },

     incrementaIdade() {
        this.idade++;
     }

 }; 

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();