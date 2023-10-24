function Pipe() {
    this.x = width + 50;
    this.space = 200;
    this.top = random(5,height - this.space);
    this.bottom = height - (this.space + this.top);
    this.w = 50;
    this.speed = 2;
    this.destroy = false;
    
    this.show = function() {
      fill(255);
      rect(this.x,0,this.w,this.top);
      rect(this.x,height - this.bottom,this.w,this.bottom);
    }
    
    this.move = function() {
      this.x -= this.speed;
      if (this.x < -50){
        this.destroy = true;
        pipes.push(new Pipe());
      }
    }
    
    this.hit = function(bird) {
      if (bird.x + bird.w > this.x && bird.x + bird.w < this.x + this.w){
        if (bird.y - bird.w < this.top || bird.y + bird.w > height - this.bottom){
          bird.death = true;
        }
      }
    }
  }