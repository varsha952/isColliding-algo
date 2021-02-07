var car ; 
var wall ;
var speed ;
var weight ;
var deformation ;
function setup() {
  createCanvas(700,400);
  
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  car.shapeColor = "white"
  wall = createSprite(700,200,60,height/2)
  
}

function draw() {
  background("pink");  
  drawSprites();
  car.velocityX = speed;
  deformation = (0.5*weight*speed*speed)/22500
  if(wall.x-car.x < (car.width + wall.width)/2){
 car.velocityX = 0
 var deformation = 0.5*width*speed*speed/22500
 if(deformation>180){
   car.shapeColor = "red"
 }
 if(deformation<100){
  car.shapeColor = "green"
}
if(deformation>100&&deformation<180){
  car.shapeColor = "yellow"
}
 drawSprites();
  }






 
  
  
}