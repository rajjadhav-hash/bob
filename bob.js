class Bob {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0.5,
          'density':1.8
          
        
      }
      this.x=x;
      this.y=y;
      this.radius=r/2;
      
      this.body=Bodies.circle(this.x,this.y,r/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER)
      fill("pink");
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
  };
  