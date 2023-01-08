song="";
song2="";
leftWristX =0;
leftWristY =0;
rightWristX =0;
rightWristY =0;
scoreLeftWrist=0;
scorerightWrist=0;
function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("pose net is intiallized finally bruh");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist"+scoreLeftWrist);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristX + ","+ leftWristY);

        rightWristX = results[0].pose.righttWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(rightWristX + ","+ rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
}
function play(){
    if(scorerightWrist>1){
        song.play();
        song.setVolume(1);
        song.rate(1);
        if (song2.play()= true){
        song2.stop();}
     
    }
    if(scorelegtWrist>1){
        song2.play();
        song2.setVolume(1);
        song2.rate(1);
        if (song.play()= true){
        song.stop();}
     
    }
}
}