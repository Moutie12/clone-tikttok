let video = document.querySelectorAll("video");
let aime3 = document.getElementById("aime3");
for(const videoo of video)
{
    videoo.onclick = function() {
    if(videoo.paused)
    {
        videoo.play() ;
        aime3.style.animation ="rotate infinite 5s linear" ;
    }else{
        videoo.pause() ;
        aime3.style.animation = "none";
    }
}
}