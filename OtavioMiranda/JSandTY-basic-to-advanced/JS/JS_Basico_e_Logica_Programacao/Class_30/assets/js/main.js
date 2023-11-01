// const h1 = document.querySelector('.container h1');

// const data = new Date();
// h1.innerHTML = data.toString();

// function getDiaSemanaTexto(diaSemana) {
//   let diaSemanaTexto;
//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = 'Domingo';
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = 'Segunda-feira';
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = 'Terca-feira';
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = 'Quarta-feira';
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = 'Quinta-feira';
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = 'Sexta-feira';
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = 'Sabádo-feira';
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = '';
//       return diaSemanaTexto;
//   }
// }

// function getNomeMes(numeroMes) {
//   let nomeMesTexto;
//   switch (numeroMes) {
//     case 0:
//       nomeMesTexto = 'janeiro';
//       return nomeMesTexto;
//     case 1:
//       nomeMesTexto = 'fevereiro';
//       return nomeMesTexto;
//     case 2:
//       nomeMesTexto = 'marco';
//       return nomeMesTexto;
//     case 3:
//       nomeMesTexto = 'abril';
//       return nomeMesTexto;
//     case 4:
//       nomeMesTexto = 'maio';
//       return nomeMesTexto;
//     case 5:
//       nomeMesTexto = 'junho';
//       return diaSemanaTexto;
//     case 6:
//       nomeMesTexto = 'julho';
//       return nomeMesTexto;
//     case 7:
//       nomeMesTexto = 'agosto';
//       return nomeMesTexto;
//     case 8:
//       nomeMesTexto = 'setembro';
//       return nomeMesTexto;
//     case 9:
//       nomeMesTexto = 'outubro';
//       return nomeMesTexto;
//     case 10:
//       nomeMesTexto = 'novembro';
//       return nomeMesTexto;
//     case 11:
//       nomeMesTexto = 'dezembro';
//       return nomeMesTexto;
//     default:
//       nomeMesTexto = '';
//       return nomeMesTexto;
//   }
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`
// }

// function criaDate(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
//     `de ${data.getFullYear()} `+ 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaDate(data)



// SEGUNDA MANEIRA
// Select the h1 element
const h1 = document.querySelector('.container h1');

// Create a new Date object
const data = new Date();

// Define the formatting options
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};

// Set the formatted date and time to the h1 element
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);


// terceira maneiras

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['domingo', 'segunda-feira', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
   return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[numeroMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function criaDate(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
    `de ${data.getFullYear()} `+ 
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = criaDate(data);
