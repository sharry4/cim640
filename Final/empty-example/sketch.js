var bgImage;
var posX = 400;
var posY = 300;
//var body, buttons, buttons1, eyes, face, glasses, hat, nose, ribbon;
//var imgX = -50;
//var imgY = -50;

//
//var bodyOverlay = false;
//var buttonsOverlay = false;
//var eyesOverlay = false;
//var faceOverlay = false;
//var glassesOverlay = false;
//var hatOverlay = false;
//var noseOverlay = false;
//var ribbonOverlay = false;


var gameObjects = [];

var numberBubbles = 30;

var b = [];

var soundFile;


//var multiBubble = [];

function preload() {
    bgImage = loadImage("assets/background.jpg");
    //    body = loadImage("assets/body.png");
    //    buttons = loadImage("assets/buttons.png");
    //    buttons1 = loadImage("assets/buttons1.png");
    //    eyes = loadImage("assets/eyes.png");
    //    face = loadImage("assets/face.png");
    //    glasses = loadImage("assets/glasses.png");
    //    hat = loadImage("assets/hat.png");
    //    nose = loadImage("assets/nose.png");
    //    ribbon = loadImage("assets/ribbon.png");

    //    
    //    image(body, 675, 520, 136, 138);
    //    image(buttons, 675, 540, 8, 76);
    //    image(face, 675, 420, 132, 135);
    //    image(eyes, 675, 420, 83, 26);
    //    image(glasses, 675, 430, 134, 55);
    //    image(hat, 700, 370, 190, 98);
    //    image(nose, 675, 445, 21, 32);
    //    image(ribbon, 675, 495, 79, 52);
    //   
    
    soundFile = loadSound('assets/CowMoo.mp3');

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: -100,
        offsetY: 250,
        showX: 675,
        showY: 520,
        sizeW: 136,
        sizeH: 138,
        distance: 0,
        overlay: false,
        img: loadImage("assets/body.png"),
        sound: loadSound("assets/body.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: -150,
        offsetY: 750,
        showX: 675,
        showY: 540,
        sizeW: 8,
        sizeH: 76,
        distance: 0,
        overlay: false,
        img: loadImage("assets/buttons.png"),
        sound: loadSound("assets/buttons.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 350,
        offsetY: 750,
        showX: 675,
        showY: 420,
        sizeW: 132,
        sizeH: 135,
        distance: 0,
        overlay: false,
        img: loadImage("assets/face.png"),
        sound: loadSound("assets/face.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 950,
        offsetY: 800,
        showX: 675,
        showY: 420,
        sizeW: 83,
        sizeH: 26,
        distance: 0,
        overlay: false,
        img: loadImage("assets/eyes.png"),
        sound: loadSound("assets/eyes.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 870,
        offsetY: -10,
        showX: 675,
        showY: 430,
        sizeW: 134,
        sizeH: 55,
        distance: 0,
        overlay: false,
        img: loadImage("assets/glasses.png"),
        sound: loadSound("assets/glasses.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 0,
        offsetY: 0,
        showX: 700,
        showY: 370,
        sizeW: 190,
        sizeH: 98,
        distance: 0,
        overlay: false,
        img: loadImage("assets/hat.png"),
        sound: loadSound("assets/hat.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 450,
        offsetY: -50,
        showX: 675,
        showY: 445,
        sizeW: 21,
        sizeH: 32,
        distance: 0,
        overlay: false,
        img: loadImage("assets/nose.png"),
        sound: loadSound("assets/nose.m4a")
    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 900,
        offsetY: 300,
        showX: 675,
        showY: 495,
        sizeW: 79,
        sizeH: 52,
        distance: 0,
        overlay: false,
        img: loadImage("assets/ribbon.png"),
        sound: loadSound("assets/ribbon.m4a")
    });

}

function setup() {
    createCanvas(800, 600);

    //        for (var i = 0; i < 20; i++) {
    //            var bubbleC = color(255);
    //            multiBubble.push(new bubble(random(0, width), 0, random(1, 10)));
    //        }

    for (var g = 0; g < numberBubbles; g++) {
        b.push(new Bubble());

    }




}

function draw() {
    background(0);
    imageMode(CENTER);
    image(bgImage, posX, posY, 2700, 1800);

    for (var g = 0; g < b.length; g++) {
        b[g].move();
        b[g].draw();

    }

    noStroke();

    //    textSize(30);
    //    text("You are part of a snowman. Press arrow", 100, 200);
    //    text("key on your key board to collect your body parts", 100, 230);
    //    


    fill(127, 100);
    rect(550, 300, 300, 700);
    
    
    soundFile.setVolume(1);
    soundFile.play();


    for (var i = 0; i < gameObjects.length; i++) {
        image(gameObjects[i].img, gameObjects[i].x + gameObjects[i].offsetX, gameObjects[i].y + gameObjects[i].offsetY, gameObjects[i].sizeW, gameObjects[i].sizeH);

        var curDist = dist(gameObjects[i].x + gameObjects[i].offsetX, gameObjects[i].y + gameObjects[i].offsetY, 400, 300);

        if (curDist <= 20) {
            gameObjects[i].overlay = true;
        }

        if (gameObjects[i].overlay == true) {
            image(gameObjects[i].img, gameObjects[i].showX, gameObjects[i].showY, gameObjects[i].sizeW, gameObjects[i].sizeH);
            gameObjects[i].sound.play();
        }
    }

    fill(240);
    ellipse(400, 300, 20, 20);



    //    image(hat, gameObjects[0].x, gameObjects[0].y, gameObjects[0].sizeW, gameObjects[0].sizeY);
    //    image(body, imgX - 100, imgY + 250, 136, 138);
    //    image(buttons, imgX - 150, imgY + 750, 88, 76);
    //    image(face, imgX + 350, imgY + 750, 132, 135);
    //    image(eyes, imgX + 950, imgY + 800, 83, 26);
    //    image(ribbon, imgX + 900, imgY + 300, 79, 52);
    //    image(glasses, imgX + 870, imgY - 10, 134, 55);
    //    image(nose, imgX + 450, imgY - 50, 21, 32);


    //    image(body, 675, 520, 136, 138);
    //    image(buttons, 675, 540, 8, 76);
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
    if (keyCode === LEFT_ARROW) {
        posX = posX + 20;
        //        imgX = imgX + 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].x = gameObjects[i].x + 20;
        }


    } else if (keyCode === RIGHT_ARROW) {
        posX = posX - 20;
        //        imgX = imgX - 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].x = gameObjects[i].x - 20;
        }

    } else if (keyCode === UP_ARROW) {
        posY = posY + 20;
        //        imgY = imgY + 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].y = gameObjects[i].y + 20;
        }

    } else if (keyCode === DOWN_ARROW) {
        posY = posY - 20;
        //        imgY = imgY - 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].y = gameObjects[i].y - 20;
        }
    }

}


function Bubble() {
    this.x = random(0, width);
    this.size = random(3, 8);
    this.y = random(this.size * 2, this.size * 20);
    this.speed = 2;

}

Bubble.prototype.constructor = Bubble;
Bubble.prototype.move = function () {
    this.y += this.speed;
    if (this.y > height + this.size * 2) {
        this.y = random(this.size * 2, this.size * 20);
    }
};

Bubble.prototype.draw = function () {
    fill(255, 255, 255, 150);
    noStroke();
    ellipse(this.x, this.y, this.size * 0.8, this.size * 1.2);

};


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
//
//}
