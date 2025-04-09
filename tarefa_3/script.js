function mostrarMensagem() {
swal("Hello World!");
}

function mostrarNome() {
    nome = null;
    while(nome == null){
        nome = prompt("Qual seu nome?");
        swal("Digite algo, por favor...");
    }
    swal("Seu nome é: " + nome);
}

function mostrarSoma() {
    num1 = parseInt(prompt("Digite um número", 0));
    num2 = parseInt(prompt("Digite outro número", 0));
    soma = num1 + num2;
    swal("A soma entre " + num1 + " e " + num2 + " é: " + soma);
}

function verificarIdade() {
    idade = parseInt(prompt("Qual sua idade?", 0));
    if(idade >= 18){
        swal("Você é maior de idade")
    } else {
        swal("Você é menor de idade")
    }
}

function saudacaoHorario() {
    data = new Date();
    if(data.getHours >= 12 & data.getHours <= 18){
        swal("Boa tarde!")
    }
    else if(data.getHours >= 18 & data.getHours <= 5){
        swal("Boa noite!")
    } else {
        swal("Bom dia!")
    }
}