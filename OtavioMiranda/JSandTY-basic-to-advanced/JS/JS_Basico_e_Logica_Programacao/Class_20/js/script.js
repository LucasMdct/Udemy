

// IIFE uma funcao auto invocada 
function meuEscopo() {
    const form = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('1');
    //     console.log('foi enviado');
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const alturaCalculda = altura / 100;

        const calcularImc = peso / (alturaCalculda * alturaCalculda);

        const enviarDados = [nome, sobrenome, peso, altura, calcularImc];

        const pessoa = {
            nome,
            sobrenome,
            peso,
            altura,
            calcularImc
        };

        pessoas.push(pessoa);

        console.log(pessoas);

        // Limpe os campos do formulário
        form.querySelector('.nome').value = '';
        form.querySelector('.sobrenome').value = '';
        form.querySelector('.peso').value = '';
        form.querySelector('.altura').value = '';

        exibirPessoas();
    };

    function exibirPessoas() {
        resultado.innerHTML = ''; // Limpe o conteúdo anterior

        pessoas.forEach(pessoa => {
            resultado.innerHTML += `<p>Nome: ${pessoa.nome} ${pessoa.sobrenome}, Peso: ${pessoa.peso}, Altura: ${pessoa.altura}, IMC: ${pessoa.calcularImc.toFixed(2)}</p>`;
        });
    }

    form.addEventListener('submit', recebeEventoForm);



}

meuEscopo();