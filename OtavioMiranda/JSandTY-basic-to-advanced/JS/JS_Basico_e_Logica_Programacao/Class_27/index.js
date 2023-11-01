
// ? :

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'uSUARIO VIP' : 'Usuario normal';
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('usuario vip');
// } else {
//     console.log('usuario nao e vip');
// }

const corUsuario = null;

const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);