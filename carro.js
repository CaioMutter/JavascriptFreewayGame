//Listas dos carros (0,1,2).
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.5, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 500;
    }
  } 
}

function passouTodaTela(xCarro) {
  return xCarro < -40;
}