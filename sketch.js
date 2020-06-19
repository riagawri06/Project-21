var wall, thickness;
var bullet, speed, weight;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 30, 100);
  thickness = random(22, 83);
  wall = createSprite(1200,200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);
  weight = random(223, 321);
  speed = random(30, 52);
  bullet.velocityX = speed;
  bullet.collide(wall);
}

function draw() {
  background(0);  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

     
   if(damage > 10)
   {
     wall.shapeColor = color(255, 0, 0);
   }

   if(damage < 10)
   {
     wall.shapeColor = color(0, 255, 0);
   }
   
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
      return true;
  }
  return false;
}