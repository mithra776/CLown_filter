function preload()
{
   clown_ball_image = loadImage('https://i.postimg.cc/9MXGGKkj/nose-filter.png');
}
noseY = 0;
noseX = 0;

function setup()
{
    canvas = createCanvas(300 , 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is installed");
}

function draw()
{
  image(video , 0 , 0 , 300 , 300);
  // fill(255,0,0);
  // stroke(255,0,0);
  // circle(noseX , noseY , 20);
  image(clown_ball_image , noseX , noseY , 50 , 50);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x - 20;
       noseY = results[0].pose.nose.y - 20;
       console.log("nose X = " + noseX);
       console.log("nose Y = " + noseY);
    }
}