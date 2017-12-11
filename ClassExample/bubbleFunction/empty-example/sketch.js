//var bubbleX = 200;
//var bubbleY = 200;
//var bubbleSize = 50;


var bubble1, bubble2;

var multiBubble = [];


function setup() {
    createCanvas(400, 400);
    //    bubble1 = new bubble(random(width), random(height), random(100));
    //    bubble2 = new bubble(random(width), random(height), random(100));

    for (var i = 0; i < 100; i++) {
        var bubbleC = color(random(256), random(256), random(256));
        multiBubble.push(new bubble(random(width), random(height), random(100), bubbleC, true, true));
        //push into array
    }

}

function draw() {
    background(255);
    //    multiBubble[49].display();

    for (var i = 0; i < multiBubble.length; i++) {
        multiBubble[i].display();
        multiBubble[i].moveX();
        multiBubble[i].moveY();

        if (multiBubble[i].checkPosX() == 0) {
            multiBubble[i].dirX = false;
        }else if(multiBubble[i].checkPosX() ==1){
            multiBubble[i].dirX = true;
        }

        if (multiBubble[i].checkPosY() == 0) {
            multiBubble[i].dirY = false;
        }else if(multiBubble[i].checkPosY() ==1){
            multiBubble[i].dirY = true;
        }
    }

    //    bubble1.display();
    //    bubble2.display();


    //    display();
    //    move();
    //    console.log(checkPos());
    //    
    //    if(checkPos() == true){
    //        bubbleX = 0;
    //    } 
}

function bubble(tempX, tempY, tempDiameter, c, tempDirX, tempDirY) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.color = c;
    this.dirX = tempDirX;
    this.dirX = tempDirY;

    this.display = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.moveX = function () {
        if(this.dirX == true){
           this.x++;
           }else {
               this.x--;
           }
    }

    this.checkPosX = function () {
        if (this.x > width) {
            return 0;
        } else if (this.x < 0) {
            return 1;
        }else {
            return -1;
        }
    }

    this.moveY = function () {
        if(this.dirY == true){
           this.y++;
           }else {
               this.y--;
           }
    }

    this.checkPosY = function () {
        if (this.y > width) {
            return 0;
        } else if (this.y < 0) {
            return 1;
        }else {
            return -1;
        }
    }


}

//function display() {
//    ellipse(bubbleX, bubbleY, bubbleSize);
//    
//}
//
//function move() {
//    bubbleX++;
//}
//
//function checkPos() {
//    if(bubbleX > width) {
//       return true;
//       }else{
//           return false;
//       }
//}
