let birdImage = [];
let birds = [];
let saveBirds = [];
let pipes = [];
let hscore = [];
let population = 200;
let gen = 0;

/*
function preload() {
  birdImage[0] = loadImage('bird/bird0.png');
  birdImage[1] = loadImage('bird/bird1.png');
  birdImage[2] = loadImage('bird/bird2.png');
  birdImage[3] = loadImage('bird/bird3.png');
  birdImage[4] = loadImage('bird/bird4.png');
  birdImage[5] = loadImage('bird/bird5.png');
  birdImage[6] = loadImage('bird/bird6.png');
  birdImage[7] = loadImage('bird/bird7.png');
  birdImage[8] = loadImage('bird/bird8.png');
  birdImage[9] = loadImage('bird/bird9.png');
  birdImage[10] = loadImage('bird/bird10.png');
  birdImage[11] = loadImage('bird/bird11.png');
  birdImage[12] = loadImage('bird/bird12.png');
  birdImage[13] = loadImage('bird/bird13.png');
  birdImage[14] = loadImage('bird/bird14.png');
  birdImage[15] = loadImage('bird/bird15.png');
  birdImage[16] = loadImage('bird/bird16.png');
  birdImage[17] = loadImage('bird/bird17.png');
  birdImage[18] = loadImage('bird/bird18.png');
  birdImage[19] = loadImage('bird/bird19.png');
  birdImage[20] = loadImage('bird/bird20.png');
  birdImage[21] = loadImage('bird/bird21.png');
  birdImage[22] = loadImage('bird/bird22.png');
  birdImage[23] = loadImage('bird/bird23.png');
  birdImage[24] = loadImage('bird/bird24.png');
}
*/

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < population; i++){
    birds[i] = new Bird();
  }
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  fill(255);
  for (var i = birds.length - 1; i >= 0; i--){
    birds[i].think(pipes);
    birds[i].show();
    birds[i].update();
    if (birds[i].death == true){
      saveBirds.push(birds.splice(i,1)[0]);
    }
  }
  for (var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show();
    pipes[i].move();
    for (var j = birds.length - 1; j >= 0; j--){
      pipes[i].hit(birds[j]);
    }
    if(pipes[i].destroy){
      pipes.splice(i,1);
    }
  }// pipes
  if (birds.length == 0){
    nextGeneration();
  }
  fill(255);
  text("P: " + birds.length, 10, 32);
  text("G: " + gen, 10, 64);
  text("BS: " + birds[0].score, 10, 96);
}