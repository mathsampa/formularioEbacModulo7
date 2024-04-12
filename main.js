const form = document.getElementById('form-tarefa');

form.addEventListener('submit',function(e){
    e.preventDefault();   //feito pra evitar o reset da página após a conclusão do formulário

    //criando as constantes pra receber os números dos inputs
    const campoAInput = document.getElementById('campo-a');
    const campoBInput = document.getElementById('campo-b');

    //transformando as constantes anteriores em constantes inteiras
    const campoA = parseFloat(campoAInput.value);
    const campoB = parseFloat(campoBInput.value);

    //criando as constantes das mensagens de erro.
    const mensagemFalso = `Os números do campo A devem ser menores que os do campo B!`;
    const mensagemVerdade = `Correto! O número ${campoB} é maior que o número ${campoA}`;
    
    //checando para ver se os campos estão preenchidos corretamente ou não!
    if(campoA >= campoB){
        const containerFalso = document.querySelector('.error-message');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.sucess-message').style.display = 'none';
    }
    else{     
        const containerVerdade = document.querySelector('.sucess-message');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    }
});