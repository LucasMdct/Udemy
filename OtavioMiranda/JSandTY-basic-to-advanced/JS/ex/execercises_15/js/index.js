


const seuNumero = parseFloat(prompt('DIGITE UM NUMERO : '));
const raizQuadrada = seuNumero ** 0.5;

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = seuNumero;


texto.InnerHTML += `<p> Raiz quadrada: ${raizQuadrada} </p>`;
texto.innerHTML += `<p>é INTEIRO : ${Number.isInteger(seuNumero)}</p>`;
texto.innerHTML += `<p>É Not A Number ? : ${Number.isNaN(seuNumero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo : ${Math.floor(seuNumero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima : ${Math.ceil(seuNumero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais : ${seuNumero.toFixed(2)}</p>`;
