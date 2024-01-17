let listaNumSorteado = [];
let numLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Voce acertou');
        let palavraTentativa = tentativas>1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas= `Voce descobriu o numero secreto com ${tentativas} tentativas !`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','O numero secreto e menor');
        }else{
            exibirTextoNaTela('p','O numero secreto e maior');
        }
        tentativas++;  
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() * numLimite + 1);
   let qtdElementList = listaNumSorteado.length;
  
   if(qtdElementList== numLimite){
     listaNumSorteado=[];
   }

   if(listaNumSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaNumSorteado.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)  ; 
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();