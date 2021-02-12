class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.2,
          'density':0.2

          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
 if(this.body.speed < 3){
       
      
     
         push();
         translate(pos.x,pos.y)
         rotate(angle)
         rectMode(CENTER);
         //stroke("green")
         //strokeWeight(4)
         //fill(255);
         rect(0,0, this.width, this.height);
         pop();
      
       }
       else{
        World.remove(world, this.body);
            push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity)
         pop();
       }
       
    }
  };
  