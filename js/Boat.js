class Boat {
  constructor(x, y, width, height, boatPos,boatAnimation) {
    
    var options = {
      restitution:0.8,
      friction:1.0,
      density:1.0,
      label:"boat"
    }
    this.animation = boatAnimation
    this.speed = 0.05;

    this.body = Bodies.rectangle(x, y, width, height);

    this.width = width;
    this.height = height;


    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }
  animate(){
    this.speed +=0.05
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed%this.animation.length)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
  remove(index){
    setTimeout(()=>{
      Matter.World.remove(world,boats[index].body)
      delete boats[index]
    },1000)
  }
}
