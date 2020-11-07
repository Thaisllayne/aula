document.querySelector('#btnpar').addEventListener('click', () =>{
    /* arrow function */
    /* declarar variável e atribuir */
    let num=parseInt(document.getElementById('num').value)
    
    /* dividir o númerlo por 2 e verificar o resto */
    resto = num%2;
    if(resto==0)
        alert('O número é par!');
    else
        alert('O número é ímpar')
    })
    
    /* outra função::::::::: */
    document.querySelector('#btnano').addEventListener('click', ()=>{
    let ano=parseInt(document.getElementById('ano').value);
    let resto;
    /* 
    = atribuição
    == comparação de valor
    === comparação de valor e tipo (string,int...) */   
    resto = ano%4;
    if(resto==0){
        alert('O ano é bissexto!');
    }
    else {
        alert('O ano não é bissexto!')
    }
    })