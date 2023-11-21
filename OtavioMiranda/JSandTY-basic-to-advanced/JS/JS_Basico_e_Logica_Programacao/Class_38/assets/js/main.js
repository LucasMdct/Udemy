const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');

// Obter os estilos de fundo do corpo
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

// Aplicar a cor de fundo aos parágrafos
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = 'white';
  p.style.padding = '10px';
}