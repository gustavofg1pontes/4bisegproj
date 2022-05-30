var musicafundo = document.getElementById("musicatema");
var mscfundo = 0;
var musicadiv = document.querySelector(".musicadiv");
function musica() {
    if(mscfundo == 0){
        mscfundo = 1;
        musicadiv.style.backgroundImage = 'url("musicaligada.jpg")';
        musicafundo.play();
    }
    else if(mscfundo == 1){
        mscfundo = 0;
        musicadiv.style.backgroundImage = 'url("xbranco.png")';
        musicafundo.pause();
    }
}

function volmusica(){
var volumemusica = document.querySelector(".volumemusica");
musicafundo.volume = volumemusica.value / 100;
}

function iniciarjogo(){
    var menu = document.querySelector(".telamenu");
    var jogo = document.querySelector(".jogo");
    menu.style.display = 'none';
    jogo.style.display = 'block';
}


function opcoes(){
    var menu = document.querySelector(".telamenu");
    var telaopcoes = document.querySelector(".opcoes");
    menu.style.display = 'none';
    telaopcoes.style.display = 'block';
}


function creditos(){
    var menu = document.querySelector(".telamenu");
    var telacreditos = document.querySelector(".creditos");
    menu.style.display = 'none';
    telacreditos.style.display = 'block';
}









function sair(){
    window.close();
}