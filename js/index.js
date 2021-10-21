function mostrar() {
    let n5 = parseInt(document.querySelector('#n5').value);
    let tabuada = '';

    if (isNaN(n5)) {

        document.querySelector('#hmedia4').innerHTML = 'Digite um número - ' + '<span>' + ' V A L I D O ! ' + '</span>';
    } else {
        document.querySelector('#hmedia4').innerHTML = 'Tabuada do ' + ' ' + ' <span> ' + n5 + ' </span> ';
    }

    if (!isNaN(n5)) {


        for (let i = 1; i <= 10; i++) {
            tabuada += n5 + ' x ' + i + ' = ' + '<p>' + n5 * i + '</p>' + '<br>';
        }
    }

    document.querySelector('#resTabuada').innerHTML = tabuada;

}

function calcular() {
    let n1 = parseInt(document.querySelector('#n1').value);
    let n2 = parseInt(document.querySelector('#n2').value);
    if (isNaN(n1) || isNaN(n2)) {
        alert('Digite um número VALIDO!');
    } else {
        document.querySelector('#res').innerHTML = n1 + n2;
    }
}
//calculaMedia
function calculaMedia() {
    let nota1 = parseFloat(document.querySelector('#nota1').value);
    let nota2 = parseFloat(document.querySelector('#nota2').value);
    let nota3 = parseFloat(document.querySelector('#nota3').value);
    let nota4 = parseFloat(document.querySelector('#nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
        alert('A nota deve ser entre 0 e 10');
    }else{
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert('Digite um número VALIDO!');
    }
    //else{
    //  document.querySelector('.h2media').innerHTML = 'Digite Nº entre '<span>+'0 e 10'+'</span>';
    // }
    else {
        document.querySelector('.resmedia').innerHTML = media;
    }
    if (media >= 5 || media < 6) {
        document.querySelector('.h2media').innerHTML = 'Aluno de  ' + '<span>' + ' R E C U P E R A Ç Ã O  ! ' + '</span>';
    } if (media >= 6) {
        document.querySelector('.h2media').innerHTML = 'Aluno ' + '<span>' + ' A P R O V A D O  ! ' + '</span>';
    } else if (media < 5) {
        document.querySelector('.h2media').innerHTML = 'Aluno ' + '<span>' + ' R E P R O V A D O  ! ' + '</span>';
    }
}
}