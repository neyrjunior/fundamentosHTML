let nome = document.getElementById("nome");
let nomeOk = false;
let email = document.querySelector("#email");
let emailOk = false;
let mensagem = document.querySelector("#texto");
let botao = document.querySelector("#enviar")






function validaNome() {
    if (nome.value.length < 3) {
        nome.style.borderColor = "red";
    } else {
        nome.style.borderColor = "lightgreen";
        nomeOk = true;
    }
}
function validaEmail() {
    if (email.value.indexOf("@") && email.value.indexOf(".") == -1) {
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "lightgreen";
        emailOk = true;
    }
}
function enviar(){
    if ((nomeOk == true) && (emailOk == true)){
        alert("mensagem enviada!");
    }else {
        alert("preencha corretamente todos os campos")
    }
}