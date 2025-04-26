function cadastro(event){
    event.preventDefault();

    var  cpf =  document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email')
    var telefone = document.getElementById('telefone') 
    var novousuario = {cpf, senha, email,telefone}
    
   if(email=="admin01@mais" || cpf=="12345678" || telefone=="098765" && senha=="admin01"){
        Swal.fire({
            title: 'Cadastrado Realizado!',
            text: 'Vamos Logar!',
            icon: 'success',
            confirmButtonText: 'OK'

        }).then(()  => {
            setTimeout(() => {
                location.href = "../index/index.html";
            },100);
        });
    }
    
    else{
        Swal.fire({
            title: 'Erro!',
            text: 'Erro na finalização',
            icon: 'error',
            confirmButtonText: 'Tente Novamente'

        })
    }
    
}