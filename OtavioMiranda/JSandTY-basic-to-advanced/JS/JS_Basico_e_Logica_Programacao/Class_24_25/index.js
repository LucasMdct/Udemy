const hora = 25;

// if (hora <= 12) {
//     console.log('bom dias');
// } 

// if pode ser usado sozinho
// sempre que utilizo else
// eu posso ter varios else ifs na checagem.
// so posso ter um else na checagem
// podemos usar condicoes sem else if 

if ( hora >= 0 && hora <= 11 ) {
    console.log('bom dia meu querido esta é a hora :', hora, 'horas da manha');
}else if( hora >= 12 && hora <= 17) {
    console.log('bom tarde meu querido esta é a hora :', hora, 'horas da tarde');
}else if(hora >= 18 && hora <= 24) {
    console.log('bom noite meu querido esta é a hora :', hora, 'horas da noite');
}else {
    console.log('esta hora é invalida :', hora, 'horas');
}

const tenhoGrana = true;

if(tenhoGrana) {
    console.log('vou sair de casa e vou gastar');
}else {
    console.log('nao vou gastar e ficar em casa');
}