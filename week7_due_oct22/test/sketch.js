function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}

function mousePressed() {
  //add another parameter to this function. It can be color, outline (stroke), 
  //or any other property you want to randomize. Then, use that parameter in the drawRandomCircle function to change the appearance of the circle.
  //drawRandomCircle(mouseX, mouseY, 50);

  let newCircle = new Circle(mouseX, mouseY, 50);
  newCircle.draw();
}

//create a new Shape class that has a draw method. 
// The draw method should use the fill and [shape] functions to draw a shape on the canvas.
//  Then, create an instance of the Shape class in the mousePressed function and call its draw method to draw the shape on the canvas.


class Circle {
  constructor(x, y, r) {
    this.x=x;
    this.y = y;
    this.r = r;
  }

  draw() {
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

function drawRandomCircle(x=random(width),y=random(height),r=random(10, 50)){
  
  fill(random(255), random(255), random(255));
  ellipse(x, y, r*2, r*2);
}