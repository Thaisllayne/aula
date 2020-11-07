document.querySelector('#btn').addEventListener('click', () => {
    let n1, n2,totala,totals,totalm,totald;
    /* todas as vezes que a informação vier de um input ela vem como se fosse uma string '1' */
    n1=parseInt(document.getElementById('n1').value);
    n2=parseInt(document.getElementById('n2').value);
    
    totala= n1+n2;
    totals= n1-n2;
    totalm= n1*n2;
    
    
    if (n2 == 0) {
        totald = 'Impossível dividir por zero!'
    } else{
        totald= n1/n2;
    }
    
    /* lebrar que quebra de linha é '\n' */
    alert('Resultado da adição: '+totala+'\n' +
    'Resultado da subtração: '+totals+'\n'+
    'Resultado da multiplicação: '+totalm+'\n'+
    'Resultado da divisão: '+totald);

    /* NaN - not a number = não é um número */
    /* acrescentar os cálculos de subtração n1 - n2, multiplicação n1*n2 e a divisão, porém tome cuidado pois o usuário pode digitar 0 e eu não posso dividir por 0.
    n1/n2 se n2>0
    Mostrar os resultados no mesmo alert, somente quebrando a linha */
})