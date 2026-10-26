const anoAtual = 2026;
const limiteEstoqueBaixo = 5;
const cadastroMaximo = 5;

let totalDeCadastros = 0;
let totalEstoqueBaixo = 0;
let nomeMaisAntigo = "";
let safraMaisAntiga = 0;

let nome1 = "";
let tipo1 = "";
let safra1 = 0;
let quantidade1 = 0;

let nome2 = "";
let tipo2 = "";
let safra2 = 0;
let quantidade2 = 0;

let nome3 = "";
let tipo3 = "";
let safra3 = 0;
let quantidade3 = 0;

let nome4 = "";
let tipo4 = "";
let safra4 = 0;
let quantidade4 = 0;

let nome5 = "";
let tipo5 = "";
let safra5 = 0;
let quantidade5 = 0;

function textoDeinicio(mensagem) {
  let texto = prompt(mensagem);

  while (texto === null || texto.trim() === "") {
    alert("Entrada inválida: Digite algo por gentileza");
    texto = prompt(mensagem);
  }
  return texto.trim();
}

function numeroValido(mensagem, minimo, maximo) {
  let numero = Number(textoDeinicio(mensagem));

  while (!Number.isInteger(numero) || numero < minimo || numero > maximo) {
    alert(
      "Entrada inválida: Digite um número inteiro entre " +
        minimo +
        " e " +
        maximo,
    );
    numero = Number(textoDeinicio(mensagem));
  }
  return numero;
}

function cadastrarNome() {
  return textoDeinicio("Digite o nome do vinho: ");
}
function cadastrarSafra() {
  return numeroValido(
    "Digite a safra do vinho (1900 a " + anoAtual + "): ",
    1900,
    anoAtual,
  );
}
function cadastrarQuantidade() {
  return numeroValido("Digite a quantidade do vinho: ", 0, 100000);
}
function cadastrarTipo() {
  return textoDeinicio("Digite o tipo do vinho: ");
}

function verificarVinho(nome, safra, quantidade) {
  if (estoqueBaixo(quantidade)) {
    totalEstoqueBaixo++;
  }

  if (totalDeCadastros === 0 || safra < safraMaisAntiga) {
    safraMaisAntiga = safra;
    nomeMaisAntigo = nome;
  }
}

function cadastroDeVinhos() {
  for (let i = 1; i <= cadastroMaximo; i++) {
    switch (i) {
      case 1:
        nome1 = cadastrarNome();
        safra1 = cadastrarSafra();
        quantidade1 = cadastrarQuantidade();
        tipo1 = cadastrarTipo();
        verificarVinho(nome1, safra1, quantidade1);
        break;
      case 2:
        nome2 = cadastrarNome();
        safra2 = cadastrarSafra();
        quantidade2 = cadastrarQuantidade();
        tipo2 = cadastrarTipo();
        verificarVinho(nome2, safra2, quantidade2);
        break;
      case 3:
        nome3 = cadastrarNome();
        safra3 = cadastrarSafra();
        quantidade3 = cadastrarQuantidade();
        tipo3 = cadastrarTipo();
        verificarVinho(nome3, safra3, quantidade3);
        break;
      case 4:
        nome4 = cadastrarNome();
        safra4 = cadastrarSafra();
        quantidade4 = cadastrarQuantidade();
        tipo4 = cadastrarTipo();
        verificarVinho(nome4, safra4, quantidade4);
        break;
      case 5:
        nome5 = cadastrarNome();
        safra5 = cadastrarSafra();
        quantidade5 = cadastrarQuantidade();
        tipo5 = cadastrarTipo();
        verificarVinho(nome5, safra5, quantidade5);
        break;
    }
    totalDeCadastros++;

    if (i === cadastroMaximo) {
      alert("Limite de " + cadastroMaximo + " vinhos atingido.");
      break;
    }

    let opcao = prompt("Deseja cadastrar outro vinho? (S/N)");
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
function idadeVinho(safra) {
  let idadeSafra = anoAtual - safra;
  return idadeSafra;
}
function classificarVinho(safra) {
  let idade = idadeVinho(safra);

  if (idade <= 3) {
    return "Jovem";
  } else if (idade <= 10) {
    return "Amadurecido";
  } else {
    return "Antigo";
  }
}
function mostrarVinho(numero, nome, tipo, safra, quantidade) {
  console.log("Vinho " + numero + ":");
  console.log("Nome: " + nome);
  console.log("Tipo: " + tipo);
  console.log("Safra: " + safra);
  console.log("Quantidade: " + quantidade);
  console.log("Idade da safra: " + idadeVinho(safra) + " anos");
  console.log("Classificação: " + classificarVinho(safra));

  if (estoqueBaixo(quantidade)) {
    console.log("Estoque baixo: SIM");
    alert(
      "Atenção: o vinho " +
        nome +
        " está com estoque baixo (" +
        quantidade +
        " unidades).",
    );
  } else {
    console.log("Estoque baixo: não");
  }
}
function mostrarVinhos() {
  console.log("Total de vinhos cadastrados: " + totalDeCadastros);

  if (totalDeCadastros >= 1) {
    mostrarVinho(1, nome1, tipo1, safra1, quantidade1);
  }

  if (totalDeCadastros >= 2) {
    mostrarVinho(2, nome2, tipo2, safra2, quantidade2);
  }

  if (totalDeCadastros >= 3) {
    mostrarVinho(3, nome3, tipo3, safra3, quantidade3);
  }

  if (totalDeCadastros >= 4) {
    mostrarVinho(4, nome4, tipo4, safra4, quantidade4);
  }

  if (totalDeCadastros >= 5) {
    mostrarVinho(5, nome5, tipo5, safra5, quantidade5);
  }

  console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);
  console.log(
    "Vinho com a safra mais antiga: " +
      nomeMaisAntigo +
      " (" +
      safraMaisAntiga +
      ")",
  );

  alert(
    "Dados exibidos no console!\n\n" +
      "Cadastros feitos: " +
      totalDeCadastros +
      "\n" +
      "Vinhos com estoque baixo: " +
      totalEstoqueBaixo +
      "\n" +
      "Vinho com a safra mais antiga: " +
      nomeMaisAntigo +
      " (" +
      safraMaisAntiga +
      ")",
  );
}

cadastroDeVinhos();
mostrarVinhos();
