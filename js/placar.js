var pontos1 = 0;
var pontos2 = 0;
var q1 = 0;
var q2 = 0;

var nomePlayer1 = document.querySelector("#jogador1");
var nomePlayer2 = document.querySelector("#jogador2");
var qnt = document.querySelector("#qnt");

var bpqnt1 = document.querySelector("#bpqnt1");
var bmqnt1 = document.querySelector("#bmqnt1");

var bpqnt2 = document.querySelector("#bpqnt2");
var bmqnt2 = document.querySelector("#bmqnt2");

var labelP1 = document.querySelector("#labelJodador1");
var labelP2 = document.querySelector("#labelJodador2");
var labelQ = document.querySelector("#labelQ");

var qnt1 = document.querySelector("#qnt1");
var qnt2 = document.querySelector("#qnt2");

nomePlayer1.addEventListener("keyup", function () {
  labelP1.innerHTML = nomePlayer1.value;
});
nomePlayer2.addEventListener("keyup", function () {
  labelP2.innerHTML = nomePlayer2.value;
});
qnt.addEventListener("change", function () {
  labelQ.innerHTML = qnt.value;
});
bpqnt1.addEventListener("click", function () {
  q1 = q1+1;
  qnt1.innerHTML = q1;
});
bmqnt1.addEventListener("click", function () {
  q1 = q1-1;
  qnt1.innerHTML = q1;
});
bpqnt2.addEventListener("click", function () {
  q2 = q2+1;
  qnt2.innerHTML = q2;
});
bmqnt2.addEventListener("click", function () {
  q2 = q2-1;
  qnt2.innerHTML = q2;
});

var botoes = document.querySelectorAll(".balls");

function AddPoint(p, pontuacao) {

  var bola1 = document.querySelector("#bolas1");
  var bola2 = document.querySelector("#bolas2");

  if(p == "p2"){
    pontos2 += pontuacao;
    document.querySelector("#pontuacaoP2").innerHTML = pontos2;

    if($('#bolas2').html().length){
      bola2.innerHTML += "-" + pontuacao
    }else{
      bola2.innerHTML += pontuacao
    }

  }else{
    pontos1 += pontuacao;
    document.querySelector("#pontuacaoP1").innerHTML = pontos1;

    if($('#bolas1').html().length){
      bola1.innerHTML += "-" + pontuacao
    }else{
      bola1.innerHTML += pontuacao
    }

  }
  Diferenca();

}
function SubPoint(p, pontuacao) {
  if(p == "p2"){
    if(pontos2 > 0){
      pontos2 -= pontuacao;
      document.querySelector("#pontuacaoP2").innerHTML = pontos2;
    }
  }else{
    if(pontos1 > 0){
      pontos1 -= pontuacao;
      document.querySelector("#pontuacaoP1").innerHTML = pontos1;
    }
  }
  Diferenca();
}

function Diferenca(){
  var subs = document.getElementById('subs');
  subs.innerHTML = Math.abs(pontos1 - pontos2);
}

function zerar() {
  pontos1 = 0;
  pontos2 = 0;

  document.querySelector("#pontuacaoP1").innerHTML = pontos1;
  document.querySelector("#pontuacaoP2").innerHTML = pontos2;

  document.querySelector("#bolas1").innerHTML = "";
  document.querySelector("#bolas2").innerHTML = "";

  document.querySelector("#bolas1").innerHTML = "";
  document.querySelector("#bolas2").innerHTML = "";


  document.querySelector("#jogador1").value = "";
  document.querySelector("#jogador2").value = "";

  var subs = document.getElementById('subs');
  subs.innerHTML = 0
  
}


function limp(){

  q1 = 0;
  q2 = 0;

  document.querySelector("#qnt").value = "0";

  document.querySelector("#qnt1").innerHTML = "0";
  document.querySelector("#qnt2").innerHTML = "0";
  document.querySelector("#labelQ").innerHTML = "0";

  document.querySelector("#labelJodador1").innerHTML = "Jogador Um";
  document.querySelector("#labelJodador2").innerHTML = "Jogador Dois";
}

