
var posX = 0;
var posY = 0;
var arcW = 0;
var arcH = 0;
var eyeW = 0;



function setup() {
    createCanvas(1000,500);
    
    
    posX = width/2;
    posY = height/2;
    
    arcW = 75;
    arcH = 40;
    
    eyeW = 18;
    
    
 

}

function draw() {
    
    background("#999999");
    
    stroke(0);
    strokeWeight(1);
    fill(231,174,0);
    ellipse(posX,posY,300,210);
    fill(231,79,0);
    rect(posX-150, posY-30, 300, 60, 20);
    fill("white");
    ellipse(posX -50,posY -62,eyeW,60);
    ellipse(posX +50,posY -62,18,60);
    fill("black");
    ellipse(posX -50,posY -62,eyeW,30);
    ellipse(posX +50,posY -62,eyeW,30);
    
    noFill();
    stroke(255,239,44);
    strokeWeight(5);
    bezier(posX-150, posY, posX-112.5, posY-90, posX-37.5, posY+90, posX, posY);
    bezier(posX, posY, posX+37.5, posY-90, posX+112.5, posY+90, posX+150, posY);
//    arc(posX-112.5,posY,arcW,arcH, PI, TWO_PI);
//    arc(posX-37.5,posY,arcW,arcH, 0, PI);
//    arc(posX+37.5,posY,arcW,arcH, PI, TWO_PI);
//    arc(posX+112.5,posY,arcW,arcH, 0, PI);
    
    stroke("black");
    arc(posX,posY+50,arcW,arcH+20, 0+QUARTER_PI, PI-QUARTER_PI);
    
    strokeWeight(1);
    arc(posX+40,posY-105,arcW+5,arcH+20, PI, TWO_PI);
    arc(posX-40,posY-105,arcW+5,arcH+20, PI, TWO_PI);
}

