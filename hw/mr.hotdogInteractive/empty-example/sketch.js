
var posX = 0;
var posY = 0;
var arcW = 0;
var arcH = 0;
var eyeW = 0;

var clChange, strokeColor, clChange2;

var hitZoneX=200;
var hitZoneY=250;

var hitZone2X=800;
var hitZone2Y=250;

function setup() {
    createCanvas(1000,500);
    
    
    arcW = 75;
    arcH = 40;
    
    eyeW = 18;
    
    strokeColor = color(255,239,44);
    
    clChange = createButton("ketchup");
    clChange.position(100,500);
    clChange.mousePressed(changeClFunction);
    
    clChange2 = createButton("mustard sauce");
    clChange2.position(200,500);
    clChange2.mouseReleased(changeClFunction2);

}

function draw() {
    
    background(249,214,153);
    
    posX = mouseX;
    posY = mouseY;
    
    
    
    stroke(0);
    strokeWeight(1);
    fill(231,174,0);
    ellipse(posX,posY,300,210);
    fill(231,79,0);
    rect(posX-150, posY-30, 300, 60, 20);
    
    var wiggleX = map(mouseX, 0, width, -20,20);
    var wiggleY = map(mouseY, 0, width, -20,20);
    //eye
    fill("white");
    ellipse(posX -50 + wiggleX,posY -62 + wiggleY,eyeW,60);
    ellipse(posX +50 + wiggleX,posY -62 + wiggleY,18,60);
    fill("black");
    ellipse(posX -50 + wiggleX,posY -62 + wiggleY,eyeW,30);
    ellipse(posX +50 + wiggleX,posY -62 + wiggleY,eyeW,30);
    
    noFill();
    stroke(strokeColor);
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
    
    //hitzone
    var hitZoneDist = dist(hitZoneX,hitZoneY, mouseX, mouseY);
    console.log("hitZoneDist: " + hitZoneDist);
    
    var hitZoneDist2 = dist(hitZone2X,hitZone2Y, mouseX, mouseY);
    console.log("hitZoneDist: " + hitZoneDist);
    
    strokeWeight(1);
    ellipse(hitZoneX,hitZoneY, 20, 20);
    ellipse(hitZone2X,hitZone2Y, 20, 20);
    
    if(hitZoneDist <= 10){
        console.log("We are totally in the Zone");
        fill(231,174,0);
        noStroke();
        ellipse(posX,posY+70,arcW,arcH+20);
     }
    
     if(hitZoneDist2 <= 10){
        console.log("We are totally in the Zone");
        fill("black");
        ellipse(posX-90,posY-40,10,10);
     }
    
    
    
    
}

function changeClFunction() {
     strokeColor = color (161,0,39);
}

function changeClFunction2() {
     strokeColor = color (255,239,44);
}
