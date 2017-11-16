var interfaceItems = [];
var brushSize = 10;
var rColor = 0;
var gColor = 0;
var bColor = 0;
var bShape = false;


function setup() {
    createCanvas(400, 400);
    
    interfaceItems.push(new interface(25, 350, 50, color(121, 128, 158)));
    interfaceItems.push(new interface(125, 350, 50, color(118, 143, 192)));
    interfaceItems.push(new interface(225, 350, 50, color(209, 141, 153)));
    interfaceItems.push(new interface(325, 350, 50, color(246, 199, 187)));
}

function draw() {
    
    
    
    noStroke();
    fill(rColor, gColor, bColor);
    
    if(bShape == false ){
        ellipse(mouseX, mouseY, brushSize, brushSize);
        }
    
    if(bShape == true){
       triangle(mouseX, mouseY, mouseX + brushSize, mouseY, mouseX + brushSize/2, mouseY - brushSize);
       }

    fill(50);
    text("Brush size +", 18, 390);
    text("Brush size -", 118, 390);
    text("Random color", 218, 390);
    text("Change shape", 318, 390);
    
    interfaceItems[0].check();
    interfaceItems[0].display();
    
    interfaceItems[1].check();
    interfaceItems[1].display();
    
    interfaceItems[2].check();
    interfaceItems[2].display();
    
    interfaceItems[3].check();
    interfaceItems[3].display();
    
//    console.log(interfaceItems[0].check());
}

function mousePressed() {
    if (interfaceItems[0].check() == true) {
        console.log("pressed purple button");
        brushSize++;

    }
    
    if (interfaceItems[1].check() == true) {
        console.log("pressed blue button");
        brushSize--;

    }
    
    if (interfaceItems[2].check() == true) {
        console.log("pressed pink button");
        rColor = random(255);
        gColor = random(255);
        bColor = random(255);
        

    }
    
    if (interfaceItems[3].check() == true) {
        console.log("pressed beige button");
        bShape = true;
//        rColor = 0;
//        gColor = 0;
//        bColor = 0;
    }
    
}

function interface(tempX, tempY, tempBoxSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = tempColor;
    this.overlay = false;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize/2);
        
        if(this.overlay == true){
        fill(127,200); //50% grey color with 200 opacity
        rect(this.x, this.y, this.boxSize, this.boxSize/2);
        }
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize/2)) {
            this.overlay = true;
            return true;
        } else {
            this.overlay = false;
            return false;
        }
    }
}

