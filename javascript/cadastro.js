// Cadastro Dos Usuários.
let emailElement = document.getElementById('email')
let usuarioCadastro = document.getElementById('nomeCadastro')
let senhaCadastro = document.getElementById('senhaCadastro')
let checkTermos = document.getElementById('checkTermos')
let cadastros = []

emailElement.focus()

function cadastrarUsuario() {
    cadastros.push(
        {
            email: emailElement.value,
            usuario: usuarioCadastro.value,
            senha: senhaCadastro.value,
            termos: checkTermos.checked
        }
    )
    localStorage.setItem('cadastros', JSON.stringify(cadastros))
}

document.getElementById('formularioCadastro').addEventListener('submit', (e)=>{
    e.preventDefault()

    let jaExiste = false

    if(cadastros.length < 1){
        cadastrarUsuario()
        emailElement.value = ''
        usuarioCadastro.value = ''
        senhaCadastro.value = ''
        emailElement.focus()
        console.log(cadastros);
    }else if(cadastros.length >= 1){
        let novoUsuario = usuarioCadastro.value

        for (let i = 0; i < cadastros.length; i++) {
            if(cadastros[i].usuario === novoUsuario){
                jaExiste = true
                break
            }
        }

        if(jaExiste){
            alert('Usuário Já Existente. Crie outro nome de usuário')
            console.log('crie outro usuário.');
            usuarioCadastro.value = ''
            usuarioCadastro.focus()
        }else {
            cadastrarUsuario();
            console.log('novo usuário criado.');
            emailElement.value = ''
            usuarioCadastro.value = ''
            senhaCadastro.value = ''
            emailElement.focus()
        }
        
    }

});
// Fim Do Cadastro Dos Usuários.