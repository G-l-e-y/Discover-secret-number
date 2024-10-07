alert('Bem vindo ao jogo do número secreto!');  //'alert' serve para exibir uma mensagem em uma janela, o ponto e vírgula é usado para identificar que o comando está finalizado. 
let numMax = 100;
let secretNum = parseInt(Math.random() * numMax + 1); //usado para criar uma variável e para guardar uma informação
console.log(secretNum);
let chute; //Serve para questionar o usuário para que a página só seja executada quando o prompt for respondido
let tentativas = 1;

//enquanto chute != (diferente de) secretNum
while (chute != secretNum) {
    chute = prompt(`Escolha um número entre 1 e ${numMax}`);
    // if (se) 'chute' for igual 'secretNum' (número secreto)
    if (chute == secretNum) { //se 'variável chute' for igual '==' a 'variável secretNum', deve mandar a mensagem 'Corretíssimo!'
        break;
    } else {
        if (chute > secretNum) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++; //para atribuir mais um, mesma função e execução do comentário acima
    }
}

//operador ternário '?' questiona ao computador para ele fazer a verificação, e as respostas sim ou não são divididas por ':' onde a primeira é 'sim' e a segunda 'não'
let wordTry = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Corretíssimo! ${secretNum} é o número secreto! E você o encontrou em ${tentativas} ${wordTry}`)
//operador de igual - ==
//operador não é igual - !=
//operador de maior - >