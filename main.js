rightWristX=0;
leftWristX=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
 

    canvas = createCanvas(550,550);
    canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)

}

function modelLoaded() 
{
console.log("poseNet is initialized")
}
function draw()
{
    background("#87CEEB")
    textSize(difference);
    fill("black")
    text("Aryan k",50 , 400);
    document.getElementById("font").innerHTML="font size of the text will be = " + difference + " px";
}

function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);

rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;

difference=floor(leftWristX-rightWristX);

    }
}
