var musicafundo = document.getElementById("musicatema");
var mscfundo = 0;
function musica() {
    if(mscfundo == 0){
        mscfundo = 1;
        musicafundo.play();
    }
    else if(mscfundo == 1){
        mscfundo = 0;
        musicafundo.pause();
    }
}