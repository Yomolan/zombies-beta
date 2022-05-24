var shooter;
var edges;
var zombie;

function preload(){
  
  

}

function setup() {

  createCanvas(1800,900);

  zombie = new Zombies();

  shooter = createSprite(400,400,20,20)
  shooter.shapeColor = "black";

}

function draw() {
  background(208,211,207); 
  edges = createEdgeSprites();
  shooter.collide(edges);


  if(keyDown(UP_ARROW)){
    shooter.y = shooter.y -5;
  }

  if(keyDown(DOWN_ARROW)){
    shooter.y = shooter.y +5;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x = shooter.x +5;
  }

  if(keyDown(LEFT_ARROW)){
    shooter.x = shooter.x -5;
  }
  
  zombie.display();
  zombie.shapeColor = "green"

  drawSprites();

}
