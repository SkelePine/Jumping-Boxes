var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound('music.mp3')
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
   ball.velocityX= random(5,8)
   ball.velocityY = random(5,8)

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    
   
    if(ball.isTouching(block1)){
        ball.shapeColor = "blue"
        ball.bounceOff(block1)
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop()
    }
 
    if(ball.isTouching(block3)){
        ball.shapeColor = "yellow"
        ball.bounceOff(block3)
    }

     
    if(ball.isTouching(block4)){
        ball.shapeColor = "green"
        ball.bounceOff(block4)
    }

    drawSprites();
}
