try {
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo');
    console.log('Fechei um arquivo');

    try{
        console.log(b);
    }catch {
        console.log('deu erro');
    } finally {
        console.log('tambem sou finally');
    }
} catch (e) {
    console.log('Tratando o erro');
} finally {
    //sempre 
    console.log('Eu sempre sou executado');
}