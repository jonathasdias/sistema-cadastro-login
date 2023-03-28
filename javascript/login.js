// Login Dos Usuários.
let usuarioLogin = document.getElementById('usuarioLogin')
let senhaLogin = document.getElementById('senhaLogin')

document.getElementById('formularioLogin').addEventListener('submit', (e)=>{
    e.preventDefault()

    let iguais = false

    let usuariosCadastrados = JSON.parse(localStorage.getItem('cadastros'))
    console.log(usuariosCadastrados);

    if(usuariosCadastrados.length >= 1){
        for (let i = 0; i < usuariosCadastrados.length; i++) {
            if((usuariosCadastrados[i].usuario === usuarioLogin.value) && (usuariosCadastrados[i].senha === senhaLogin.value)){
                iguais = true
                break
            }
        }
        if(iguais){
            window.location.href = 'http://127.0.0.1:5500/Projetos%20para%20github%20em%20andamento/site%20cadastro%20e%20login%20usuario/index.html'
        } else {
            alert('Usuário Ou Senha Incorretos.')
        }
    }
});
// Fim Do Login Dos Usuários.