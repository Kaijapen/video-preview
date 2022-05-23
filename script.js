console.log("page loaded...");

function over(video) {
    video.play();

}

function out(video) {
    video.pause()
    video.load();
}

function videoPlay(video){
    if (video.muted == true){
        video.muted = false;
        video.play();
    } else {
        video.pause();
        video.muted = true;
    }
    // var play_pause = video.muted = false;
    
    
}