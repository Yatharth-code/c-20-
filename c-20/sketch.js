function setup() {
  createCanvas(1200,800);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="red"
  mr=createSprite(800,200,50,50)
  mr.shapeColor="green"
  mr.velocityX=-4
  fr.velocityX=4
}

function draw() {
  background(0,0,0); 
 // mr.x=mouseX
  //mr.y=mouseY 
  console.log(mr.x-fr.x)
  if (mr.x-fr.x<fr.width/2+mr.width/2 
    &&fr.x-mr.x<fr.width/2+mr.width/2){
   mr.velocityX=mr.velocityX*-1
   fr.velocityX=fr.velocityX*-1 
  }
  if (fr.y-mr.y<fr.height/2+mr.height/2
    &&mr.y-fr.y<fr.height/2+mr.height/2){
      mr.veloxityY=mr.velocityY*-1
      fr.velocityY=fr.velocityY*-1
    }
    if (mr.x<25||mr.x>1175){
      mr.velocityX=mr.velocityX*-1
    }
    if (fr.x<25||fr.x>1175){
      fr.velocityX=fr.velocityX*-1
    }
    if (mr.y<25||mr.y>775){
      mr.velocityY=mr.velocityY*-1
    }
    if (fr.y<25||fr.y>775){
      fr.velocityY=fr.velocityY*-1
    }
  drawSprites();
}