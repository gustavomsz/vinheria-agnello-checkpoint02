const anoAtual = 2026;
const limiteEstoqueBaixo = 5;
const cadastroMaximo = 5;

let totalDeCadastros = 0;

let nome1 = "";
let tipo1 = "";
let safra1 = "";
let quantidade1 = 0;

let nome2 = "";
let tipo2 = "";
let safra2 = "";
let quantidade2 = 0;

let nome3 = "";
let tipo3 = "";
let safra3 = "";
let quantidade3 = 0;

let nome4 = "";
let tipo4 = "";
let safra4 = "";
let quantidade4 = 0;

let nome5 = "";
let tipo5 = "";
let safra5 = "";
let quantidade5 = 0;

function textoDeinicio(mensagem) {
  let texto = prompt(mensagem);

  while (texto === null || texto === "") {
    alert("Entrada inválida: Digite algo por gentileza");
    texto = prompt(mensagem);
  }
  return texto;
}

function cadastrarNome() {
  return textoDeinicio("Digite o nome do vinho: ");
}
function cadastrarSafra() {
  return textoDeinicio("Digite a safra do vinho: ");
}
function cadastrarQuantidade() {
  return textoDeinicio("Digite a quantidade do vinho: ");
}
function cadastrarTipo() {
  return textoDeinicio("Digite o tipo do vinho: ");
}

function cadastroDeVinhos() {
  for (let i = 1; i <= cadastroMaximo; i++) {
    switch (i) {
      case 1:
        nome1 = cadastrarNome();
        safra1 = cadastrarSafra();
        quantidade1 = cadastrarQuantidade();
        tipo1 = cadastrarTipo();
        break;
      case 2:
        nome2 = cadastrarNome();
        safra2 = cadastrarSafra();
        quantidade2 = cadastrarQuantidade();
        tipo2 = cadastrarTipo();
        break;
      case 3:
        nome3 = cadastrarNome();
        safra3 = cadastrarSafra();
        quantidade3 = cadastrarQuantidade();
        tipo3 = cadastrarTipo();
        break;
      case 4:
        nome4 = cadastrarNome();
        safra4 = cadastrarSafra();
        quantidade4 = cadastrarQuantidade();
        tipo4 = cadastrarTipo();
        break;
      case 5:
        nome5 = cadastrarNome();
        safra5 = cadastrarSafra();
        quantidade5 = cadastrarQuantidade();
        tipo5 = cadastrarTipo();
        break;

    }
    totalDeCadastros++;
    let opcao = prompt("Deseja cadastrar outro vinho? (S/N)")
    if (opcao == "S" || opcao == "s") {
      continue;
    } else {
      break;
    }
  }
}
function estoqueBaixo(quantidade) {
  return quantidade < limiteEstoqueBaixo;
}
function mostrarVinhos() {

  console.log("Total de vinhos cadastrados: " + totalDeCadastros);

  if (totalDeCadastros >= 1) {
    console.log("Vinho 1:");
    console.log("Nome: " + nome1);
    console.log("Tipo: " + tipo1);
    console.log("Safra: " + safra1);
    console.log("Quantidade: " + quantidade1);
  }

  if (totalDeCadastros >= 2) {
    console.log("Vinho 2:");
    console.log("Nome: " + nome2);
    console.log("Tipo: " + tipo2);
    console.log("Safra: " + safra2);
    console.log("Quantidade: " + quantidade2);
  }

  if (totalDeCadastros >= 3) {
    console.log("Vinho 3:");
    console.log("Nome: " + nome3);
    console.log("Tipo: " + tipo3);
    console.log("Safra: " + safra3);
    console.log("Quantidade: " + quantidade3);
  }

  if (totalDeCadastros >= 4) {
    console.log("Vinho 4:");
    console.log("Nome: " + nome4);
    console.log("Tipo: " + tipo4);
    console.log("Safra: " + safra4);
    console.log("Quantidade: " + quantidade4);
  }

  if (totalDeCadastros >= 5) {
    console.log("Vinho 5:");
    console.log("Nome: " + nome5);
    console.log("Tipo: " + tipo5);
    console.log("Safra: " + safra5);
    console.log("Quantidade: " + quantidade5);
  }

}
function idadeVinho(Safra) {
  let idadeSafra = anoAtual - Safra

  if (idadeSafra <= 30) {
    alert("Safra antiga")
  }
  else if (idadeSafra >= 50) {
    alert("Safra moderna")
  }
  else {
    alert("Safra muito nova")
  }
}



function iniciarSistema() {
  cadastroDeVinhos();
  mostrarVinhos();
}

function ligarBotao(id) {
  let botao = document.getElementById(id);
  if (botao) {
    botao.addEventListener("click", iniciarSistema);
  }
}

ligarBotao("btn-estoque");
ligarBotao("btn-iniciar");

if (document.body.classList.contains("pagina-inicial")) {
  setTimeout(iniciarSistema, 600);
}