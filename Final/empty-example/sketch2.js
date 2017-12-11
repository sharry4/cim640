var bgImage;
var posX = 400;
var posY = 300;
var body, buttons, buttons1, eyes, face, glasses, hat, nose, ribbon;
var imgX = -50;
var imgY = -50;


var bodyOverlay = false;
var buttonsOverlay = false;
var eyesOverlay = false;
var faceOverlay = false;
var glassesOverlay = false;
var hatOverlay = false;
var noseOverlay = false;
var ribbonOverlay = false;

var keywaspressed = false;

var numberBubbles = 20;

var b = [];







//var multiBubble = [];

function preload() {
    bgImage = loadImage("assets/background.jpg");
    body = loadImage("assets/body.png");
    buttons = loadImage("assets/buttons.png");
    buttons1 = loadImage("assets/buttons1.png");
    eyes = loadImage("assets/eyes.png");
    face = loadImage("assets/face.png");
    glasses = loadImage("assets/glasses.png");
    hat = loadImage("assets/hat.png");
    nose = loadImage("assets/nose.png");
    ribbon = loadImage("assets/ribbon.png");
}

function setup() {
    createCanvas(800, 600);

//        for (var i = 0; i < 20; i++) {
//            var bubbleC = color(255);
//            multiBubble.push(new bubble(random(0, width), 0, random(1, 10)));
//        }
    
      //adds 20 bubbles to the array
  for(var g=0; g<numberBubbles; g++){
       b.push(new Bubble()); 
    
  }
}

function draw() {
    background(0);
    imageMode(CENTER);
    image(bgImage, posX, posY, 2700, 1800);
    
      for (var g=0; g<b.length; g++){
       b[g].move();
       b[g].draw();
   
}

    image(hat, imgX, imgY, 190, 98);
    image(body, imgX - 50, imgY + 250, 136, 138);
    image(buttons, imgX - 150, imgY + 750, 44, 38);
    image(face, imgX + 350, imgY + 700, 132, 135);
    image(eyes, imgX + 950, imgY + 800, 83, 26);
    image(ribbon, imgX + 900, imgY + 300, 79, 52);
    image(glasses, imgX + 870, imgY - 10, 134, 55);
    image(nose, imgX + 450, imgY - 50, 21, 32);



    fill(240);
    ellipse(400, 300, 20, 20);
    if(keywaspressed == false){
         textSize(30);
    text("You are part of a snowman. Press arrow", 100, 200);
    text("key on your key board to collect your body parts", 100, 230);
       }
  
    
    

    fill(127,100);
    rect(550, 300, 300, 700);
    
    
    
   


    var dBody = dist(imgX - 50, imgY + 250, 400, 300);
    var dButtons = dist(imgX - 150, imgY + 750, 400, 300);
    var dEyes = dist(imgX + 950, imgY + 800, 400, 300);
    var dFace = dist(imgX + 350, imgY + 700, 400, 300);
    var dGlasses = dist(imgX + 870, imgY - 10, 400, 300);
    var dHat = dist(imgX, imgY, 400, 300);
    var dNose = dist(imgX + 450, imgY - 50, 400, 300);
    var dRibbon = dist(imgX + 900, imgY + 300, 400, 300);
    
    
    
    if (bodyOverlay == true) {
        image(body, 675, 520, 136, 138);
    } 
    
    if (buttonsOverlay == true) {
        image(buttons, 675, 540, 8, 76);
    }
    
    if (faceOverlay == true) {
        image(face, 675, 420, 132, 135);
    } 
    
    if (eyesOverlay == true) {
        image(eyes, 675, 420, 83, 26);
    } 
    
    if (glassesOverlay == true) {
        image(glasses, 675, 430, 134, 55);
    } 
    
    if (hatOverlay == true) {
        image(hat, 700, 370, 190, 98);
    } 
    
    if (noseOverlay == true) {
        image(nose, 675, 445, 21, 32);
    } 
    
    if (ribbonOverlay == true) {
        image(ribbon, 675, 495, 79, 52);
    }
    
    if (dBody <= 20) {
        bodyOverlay = true;
        return true;
    } 
    
    if (dButtons <= 20) {
        buttonsOverlay = true;
        return true;
    } 
    
    if (dEyes <= 20) {
        eyesOverlay = true;
        return true;
    } 
    
    if (dFace <= 20) {
        faceOverlay = true;
        return true;
    } 
    
    if (dGlasses <= 20) {
        glassesOverlay = true;
        return true;
    } 
    
    if (dHat <= 20) {
        hatOverlay = true;
        return true;
    } 
    
    if (dNose <= 20) {
        noseOverlay = true;
        return true;
    } 
    
    if (dRibbon <= 20) {
        ribbonOverlay = true;
        return true;
    }
    
    
    
//    image(body, 675, 520, 136, 138);
//    image(buttons1, 675, 540, 8, 76);
//    image(face, 675, 420, 132, 135);
//    image(eyes, 675, 420, 83, 26);
//    image(glasses, 675, 430, 134, 55);
//    image(hat, 700, 370, 190, 98);
//    image(nose, 675, 445, 21, 32);
//    image(ribbon, 675, 495, 79, 52);






//        for (var i = 0; i < multiBubble.length; i++) {
//            multiBubble[i].display();
//            multiBubble[i].moveY();
//        }

}

function keyPressed() {
    keywaspressed = true;
    if (keyCode === LEFT_ARROW) {
        posX = posX + 10;
        imgX = imgX + 10;
    } else if (keyCode === RIGHT_ARROW) {
        posX = posX - 10;
        imgX = imgX - 10;
    } else if (keyCode === UP_ARROW) {
        posY = posY + 10;
        imgY = imgY + 10;
    } else if (keyCode === DOWN_ARROW) {
        posY = posY - 10;
        imgY = imgY - 10;
    }

}


//function checkOverlay() {
//    if (dBody <= 20) {
//        bodyOverlay = true;
//        return true;
//    } else if (dButtons <= 20) {
//        buttonsOverlay = true;
//        return true;
//    } else if (dEyes <= 20) {
//        eyesOverlay = true;
//        return true;
//    } else if (dFace <= 20) {
//        faceOverlay = true;
//        return true;
//    } else if (dGlasses <= 20) {
//        glassesOverlay = true;
//        return true;
//    } else if (dHat <= 20) {
//        hatOverlay = true;
//        return true;
//    } else if (dNose <= 20) {
//        noseOverlay = true;
//        return true;
//    } else if (dRibbon <= 20) {
//        ribbonOverlay = true;
//        return true;
//    }
//} 
//
//
//function display() {
//    if (bodyOverlay == true) {
//        image(body, 675, 520, 136, 138);
//    } else if (buttonsOverlay == true) {
//        image(buttons1, 675, 540, 8, 76);
//    } else if (faceOverlay == true) {
//        image(face, 675, 420, 132, 135);
//    } else if (eyesOverlay == true) {
//        image(eyes, 675, 420, 83, 26);
//    } else if (glassesOverlay == true) {
//        image(glasses, 675, 430, 134, 55);
//    } else if (hatOverlay == true) {
//        image(hat, 700, 370, 190, 98);
//    } else if (noseOverlay == true) {
//        image(nose, 675, 445, 21, 32);
//    } else if (ribbonOverlay == true) {
//        image(ribbon, 675, 495, 79, 52);
//    }
//}








//function bubble(tempX, tempY, tempDiameter) {
//    this.x = tempX;
//    this.y = tempY;
//    this.diameter = tempDiameter;
//
//    this.display = function () {
//        fill(255);
//        noStroke();
//        ellipse(this.x, this.y, this.diameter, this.diameter);
//    }
//    
//    this.moveY = function () {
//        this.y++;
//    }
////
////}

function Bubble(){
   this.x=random (0,width);
   this.size= random (3,8);
   this.y=random(this.size*2,this.size*20);
   this.speed= 2;
  
}

Bubble.prototype.constructor=Bubble;
Bubble.prototype.move= function (){
        this.y+=this.speed;
  if (this.y>height + this.size*2){
   this.y=random(this.size*2,this.size*20);
  } 
};

Bubble.prototype.draw=function(){
    fill(255,255,255,150);
    noStroke();
    ellipse(this.x,this.y,this.size*0.8,this.size*1.2);
        
};




