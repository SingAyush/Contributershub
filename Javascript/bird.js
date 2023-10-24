class Bird {
    constructor(brain) {
      this.y = height/2;
      this.x = 64;
      this.w = 16;
      this.score = 0;
      this.grav = 0.7;
      this.jump = -12;
      this.vel = 0;
      this.type = random(birdImage.length - 1);
      this.type = round(this.type);
      this.death = false;
      if (brain){
        this.brain = brain.copy();
        this.brain.mutate(0.1);
      } else {
        this.brain = new NeuralNetwork(6,42,2);
      }
    }
    
    think(pipes) {
      let inputs = [];
      inputs[0] = this.y/height;
      inputs[1] = this.x/width;
      inputs[2] = this.vel/height;
      inputs[3] = pipes[0].x/width;
      inputs[4] = pipes[0].top/height;
      inputs[5] = (height - pipes[0].bottom)/height;
      let output = this.brain.predict(inputs);
      if (output[0] > output[1]){
        this.up();
      }
    }
  
    up() {
      this.vel += this.jump;
    }
    
    update() {
      this.score += 1;
      this.vel += this.grav;
      this.vel *= 0.9;
      this.y += this.vel;
      if (this.y > height || this.y < 0){
        this.death = true;
      }
    }
    
    show() {
      fill(255,0,0);
      ellipse(this.x,this.y,this.w*2,this.w*2);
    }
  }