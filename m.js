video="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    ObjectDetector=ml5.ObjectDetector('cocossd',modelLoaded);
}
status="";
function modelLoaded(){
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}