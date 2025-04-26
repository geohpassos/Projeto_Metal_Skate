function logar(event){
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
   
    if(usuario === "admin" && senha === "admin"){
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(()  => {
            setTimeout(() => {
                location.href = "../index/home.html";
            },100);
        });
    }
    else{
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha invalidos',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        })
    }
}