var bestScore = [0,0,0,0,0];
var bestNum = [0,0,0,0,0];
function nextGeneration(){
  findBest();
  gen += 1;
  pipes[0].x = width + 50;
  for (let i = 0; i < population; i++){
    birds[i] = pickOne();
  }
  for (let i = 0; i < 5; i++){
    birds[i] = new Bird();
  }
  saveBirds = [];
}

function pickOne(){
  let bird = random(saveBirds);
  let child = new Bird(bird.brain);
  return child;
}

function findBest(){
  for (var i = 0; i < saveBirds.length; i++){
    if (saveBirds[i].score > bestScore[0]){
      bestScore[4] = bestScore[3];
      bestScore[3] = bestScore[2];
      bestScore[2] = bestScore[1];
      bestScore[1] = bestScore[0];
      bestScore[0] = saveBirds[i].score;
      bestNum[4] = bestNum[3];
      bestNum[3] = bestNum[2];
      bestNum[2] = bestNum[1];
      bestNum[1] = bestNum[0];
      bestNum[0] = i;
    }
    else if (saveBirds[i].score > bestScore[1]){
      bestScore[4] = bestScore[3];
      bestScore[3] = bestScore[2];
      bestScore[2] = bestScore[1];
      bestScore[1] = saveBirds[i].score;
      bestNum[4] = bestNum[3];
      bestNum[3] = bestNum[2];
      bestNum[2] = bestNum[1];
      bestNum[1] = i;
    }
    else if (saveBirds[i].score > bestScore[2]){
      bestScore[4] = bestScore[3];
      bestScore[3] = bestScore[2];
      bestScore[2] = saveBirds[i].score;
      bestNum[4] = bestNum[3];
      bestNum[3] = bestNum[2];
      bestNum[2] = i;
    }
    else if (saveBirds[i].score > bestScore[3]){
      bestScore[4] = bestScore[3];
      bestScore[3] = saveBirds[i].score;
      bestNum[4] = bestNum[3];
      bestNum[3] = i;
    }
    else if (saveBirds[i].score > bestScore[4]){
      bestScore[4] = saveBirds[i].score;
      bestNum[4] = i;
    }
  }
}