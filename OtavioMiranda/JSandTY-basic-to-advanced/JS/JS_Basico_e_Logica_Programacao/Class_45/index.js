// try {
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei um arquivo');
//     console.log('Fechei um arquivo');

//     try{
//         console.log(b);
//     }catch {
//         console.log('deu erro');
//     } finally {
//         console.log('tambem sou finally');
//     }
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     //sempre 
//     console.log('Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de DATE.');
    }

    if(!data) {
        data = new Date();
    }
    
    return data.toLocaleTimestring('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

try {
    const data = new Date('01-01-1970 12:57:12');
const hora = retornaHora();
console.log(hora);
} catch(e) {

} finally {
    console.log('Tenha um boom dia ');
}


