//Variaveis do ator.
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let diametroAtor = 15

//Variaveis do placar.
let meusPontos = 0

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
 }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
 }
}

function verificaColisao () {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, diametroAtor)
    if (colisao) {
      voltaAtor();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtor() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 60)
  text(meusPontos, width/5, 27)
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}

function podeSeMover() {
  return yAtor < 366;
}








