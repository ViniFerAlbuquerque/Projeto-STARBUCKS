let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}

var teste = 0;
setInterval(piscar, 800);
function piscar() {
    if (teste < 1) {
        teste++;
        document.getElementById('piscando').style.opacity = '1';
    } else {
        teste = 0;
        document.getElementById('piscando').style.opacity = '0';
    }
};

