noseX=0;
noseY=0;


function preload(){
mustacheimg= loadImage("https://i.postimg.cc/vH9TbBgD/48ae0d976d68ea9dd71923a5c9054008-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Initialized(GOOD JOB)!!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x - 40;
        noseY= results[0].pose.nose.y;
        console.log("nose x="+ results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustacheimg, noseX, noseY, 85, 37);
}

function takeSnapshot(){
    save("MustacheMe.png");
}