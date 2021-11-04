function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,150,130,220,200);
    fill(255,0,0);
    stroke(255,0,0)
    rect(45,46,20,350);
    rect(50,39,450,20);
    rect(460,46,20,350);
    rect(70,400,410,20);
    fill(0,128,0);
    stroke(0,128,0);
    ellipse(56,46,55,55);
    ellipse(475,46,55,55);
    ellipse(55,400,55,55);
    ellipse(470,400,55,55);
}

function take_snapshot(){
    save('webcam_image.png');
}




