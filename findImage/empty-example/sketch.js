var pics = [];

//var ball = ["football", "basketball", "soccer"];

var targetPosX = [100, 300, 500];

var targetPosY = 100;

//var overlayArray = [false, false, false];

function setup() {
    createCanvas(600, 400);
    pics[0] = loadImage("assets/football.png");

    pics[1] = loadImage("assets/basketball.png");

    pics[2] = loadImage("assets/soccer.png");
}

function draw() {

    background(255);
    rectMode(CENTER);
    imageMode(CENTER);

    textSize(32);
    text("Find the soccer ball?", 50, 250);




    for (var i = 0; i < targetPosX.length; i++) {
        if (mouseX > targetPosX[i] - 100 && mouseX < targetPosX[i] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
            image(pics[i], targetPosX[i], targetPosY);

        } else {
            rect(targetPosX[i], 100, 200, 200);
        }
    }




    //
    //    if (mouseX > targetPosX[1] - 100 && mouseX < targetPosX[1] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
    //        image(pics[1], targetPosX[1], targetPosY);
    //
    //    } else {
    //        rect(targetPosX[1], 100, 200, 200);
    //    }
    //
    //    if (mouseX > targetPosX[2] - 100 && mouseX < targetPosX[2] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
    //        image(pics[2], targetPosX[2], targetPosY);
    //
    //    } else {
    //        rect(targetPosX[2], 100, 200, 200);
    //    }





}
