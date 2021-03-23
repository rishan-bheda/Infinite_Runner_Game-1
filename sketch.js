var trex, ground, obstacle, endLine;

function setup(){

    var canvas = createCanvas(1500,400);

    trex = createSprite(750,200,50,50);

    endLine = createSprite(5000,200,20,400);

}

function draw(){
   
    background(0);

    camera.position.x = trex.x;

    if(keyDown(RIGHT_ARROW)){

        trex.velocityX = 5;

    }

    if(keyDown(UP_ARROW)){

        trex.y = trex.y - 5;

    }

    if(keyDown(DOWN_ARROW)){

        trex.y = trex.y + 5;

    }

    createObstacles();

    drawSprites();

}

function createObstacles(){

    if (frameCount%50 === 0){
    
        obstacle = createSprite(random(camera.position.x,trex.x + 750),random(0,400),50,50);
        obstacle.lifetime = 200;
        obstacle.shapeColor = "red";
    
    }
    

}