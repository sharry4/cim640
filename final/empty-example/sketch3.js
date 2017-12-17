var bgImage;
var posX = 400;
var posY = 300;

var keywaspressed = false;
//var body, buttons, buttons1, eyes, face, glasses, hat, nose, ribbon;
//var imgX = -50;
//var imgY = -50;



var gameObjects = [];

var numberBubbles = 30;

var b = [];

var collected = 0;


var soundFiles = [];

var bgMusic;

// hat, head, eyes, glasses, neck, body, buttons

//

var snowman = {
//    "body": [],
//    "button":[],
//    "head":[],
//    "eyes":[],
//    "glasses":[],
//    "hat": [],
//    "nose": [],
//    "neck":[]
};

//snowman["hat"] = {};
//snowman["head"] = {};
//snowman["eyes"] = {};
//snowman["glasses"] = {};
//snowman["neck"] = {};
//snowman["body"] = {};
//snowman["buttons"] = {};
//snowman["nose"] = {};



//var multiBubble = [];

function preload() {
    bgImage = loadImage("assets/background.jpg");
    bgMusic = loadSound("assets/snow.mp3");

    //    
    //        image(body, 675, 520, 136, 138);
    //        image(buttons, 675, 540, 8, 76);
    //        image(face, 675, 420, 132, 135);
    //        image(eyes, 675, 420, 83, 26);
    //        image(glasses, 675, 430, 134, 55);
    //        image(hat, 700, 370, 190, 98);
    //        image(nose, 675, 445, 21, 32);
    //        image(ribbon, 675, 495, 79, 52);
    //   

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
        pickedUp: false,
        img: loadImage("assets/body.png"),
        sound: loadSound("assets/body.mp3"),
        playSound: false,
        type: "body"

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
        pickedUp: false,
        img: loadImage("assets/buttons.png"),
        sound: loadSound("assets/buttons.mp3"),
        playSound: false,
        type: "button"

    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 350,
        offsetY: 750,
        showX: 675,
        showY: 410,
        sizeW: 132,
        sizeH: 135,
        distance: 0,
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/face.png"),
        sound: loadSound("assets/face.mp3"),
        playSound: false,
        type: "head"

    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 950,
        offsetY: 800,
        showX: 675,
        showY: 410,
        sizeW: 83,
        sizeH: 26,
        distance: 0,
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/eyes.png"),
        sound: loadSound("assets/eyes.mp3"),
        playSound: false,
        type: "eyes"

    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 870,
        offsetY: -10,
        showX: 675,
        showY: 420,
        sizeW: 134,
        sizeH: 55,
        distance: 0,
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/glasses.png"),
        sound: loadSound("assets/glasses.mp3"),
        playSound: false,
        type: "glasses"

    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 0,
        offsetY: 0,
        showX: 700,
        showY: 360,
        sizeW: 190,
        sizeH: 98,
        distance: 0,
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/hat.png"),
        sound: loadSound("assets/hat.mp3"),
        playSound: false,
        type: "hat"

    });

    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 450,
        offsetY: -50,
        showX: 675,
        showY: 435,
        sizeW: 21,
        sizeH: 32,
        distance: 0,
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/nose.png"),
        sound: loadSound("assets/nose.mp3"),
        playSound: false,
        type: "nose"
        

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
        type: "neck",
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/ribbon.png"),
        sound: loadSound("assets/ribbon.mp3"),
        playSound: false
    });


    gameObjects.push({
        x: -50,
        y: -50,
        offsetX: 900,
        offsetY: -200,
        showX: 665,
        showY: 519,
        sizeW: 127,
        sizeH: 127,
        distance: 0,
        type: "neck",
        overlay: false,
        pickedUp: false,
        img: loadImage("assets/scarf.png")
        
        
        //        sound: loadSound("assets/scarf.mp3"),
        //        playSound: false
    });


    //    soundFiles.push({
    //        sound: loadSound("assets/goodJob.mp3"),
    //        pSound: false
    //
    //    });
    //    
    //    soundFiles.push({
    //        sound: loadSound("assets/congrats.mp3"),
    //        pSound: false
    //
    //    });

}

function setup() {
    createCanvas(800, 600);


    for (var g = 0; g < numberBubbles; g++) {
        b.push(new Bubble());

    }

    bgMusic.setVolume(0.1);
    bgMusic.play();


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


    fill(127, 100);
    rect(550, 300, 300, 700);


    for (var i = 0; i < gameObjects.length; i++) {

        if (gameObjects[i].pickedUp == false) {
            image(gameObjects[i].img, gameObjects[i].x + gameObjects[i].offsetX, gameObjects[i].y + gameObjects[i].offsetY, gameObjects[i].sizeW, gameObjects[i].sizeH);
        }


        var curDist = dist(gameObjects[i].x + gameObjects[i].offsetX, gameObjects[i].y + gameObjects[i].offsetY, 400, 300);

        if (curDist <= 20 && gameObjects[i].overlay == false) {
            
            //looks for type in snowman array   
            for (var a in snowman){
              if(a == gameObjects[i].type){
                  for (var c = 0; c < gameObjects.length; c++) {
                   if(gameObjects[c].overlay == true && gameObjects[c].pickedUp == true){
                                  gameObjects[c].overlay = false;
                      
                                gameObjects[c].pickedUp = false;
                       gameObjects[c].playSound = false;
                      }   
                  }
                 }  
            }
            
            gameObjects[i].overlay = true;
//            collected++;
            gameObjects[i].pickedUp = true;
            
            //
            
            
            
            snowman[gameObjects[i].type] = gameObjects[i];

        }


    }




//    for (var i = 0; i < gameObjects.length; i++) {
//
//        if (gameObjects[i].overlay == true) {
//            image(gameObjects[i].img, gameObjects[i].showX, gameObjects[i].showY, gameObjects[i].sizeW, gameObjects[i].sizeH);
//
//            if (gameObjects[i].playSound == false) {
//                gameObjects[i].sound.play();
//                gameObjects[i].playSound = true;
//            }
//        }
//    }
    
    for (var i in snowman){
         if (snowman[i].overlay == true) {
            image(snowman[i].img, snowman[i].showX, snowman[i].showY, snowman[i].sizeW, snowman[i].sizeH);

            if (snowman[i].playSound == false) {
                snowman[i].sound.play();
                snowman[i].playSound = true;
            }
        }
    }





    fill(230);
    ellipse(400, 300, 20, 20);

    if (keywaspressed == false) {
        textSize(30);
        textFont("Arial");
        text("You are part of a snowman. Press arrow", 90, 200);
        text("key on your key board to collect your body parts", 90, 230);
    }



    //    for (var i = 0; i < gameObjects.length; i++) {
    //            image(gameObjects[i].img, gameObjects[i].showX, gameObjects[i].showY, gameObjects[i].sizeW, gameObjects[i].sizeH);
    //        }




    //    image(hat, gameObjects[0].x, gameObjects[0].y, gameObjects[0].sizeW, gameObjects[0].sizeY);
    //    image(body, imgX - 100, imgY + 250, 136, 138);
    //    image(buttons, imgX - 150, imgY + 750, 88, 76);
    //    image(face, imgX + 350, imgY + 750, 132, 135);
    //    image(eyes, imgX + 950, imgY + 800, 83, 26);
    //    image(ribbon, imgX + 900, imgY + 300, 79, 52);
    //    image(glasses, imgX + 870, imgY - 10, 134, 55);
    //    image(nose, imgX + 450, imgY - 50, 21, 32);


    //        image(body, 675, 520, 136, 138);
    //        image(buttons, 675, 540, 8, 76);
    //        image(face, 675, 420, 132, 135);
    //        image(eyes, 675, 420, 83, 26);
    //        image(glasses, 675, 430, 134, 55);
    //        image(hat, 700, 370, 190, 98);
    //        image(nose, 675, 445, 21, 32);
    //        image(ribbon, 675, 495, 79, 52);




    for (var i = 0; i < soundFiles.length; i++) {

        if (collected == 4) {
            soundFiles[0].pSound = true;
        }

        if (collected == 8) {
            soundFiles[1].pSound = true;
        }

        if (soundFiles[i].playSound == true) {
            gameObjects[i].sound.play();
            gameObjects[i].pSound = false;
        }
    }


    console.log("collected: " + collected);

    //    
    //    if(collected == 8){
    //        text("happy holidays!!!!", 200,200);
    //    }


}

function keyPressed() {
    keywaspressed = true;
    if (keyCode === LEFT_ARROW) {

        if (posX < 1340) {
            posX = posX + 20;

        } else {
            posX = posX;
        }
        //        imgX = imgX + 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].x = gameObjects[i].x + 20;
        }


    } else if (keyCode === RIGHT_ARROW) {

        if (posX > -540) {
            posX = posX - 20;
        } else {
            posX = posX;
        }

        //        imgX = imgX - 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].x = gameObjects[i].x - 20;
        }

    } else if (keyCode === UP_ARROW) {

        if (posY < 900) {
            posY = posY + 20;

        } else {
            posY = posY;
        }


        //        imgY = imgY + 10;

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].y = gameObjects[i].y + 20;

        }

    } else if (keyCode === DOWN_ARROW) {

        if (posY > -300) {
            posY = posY - 20;

        } else {
            posY = posY;
        }


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
