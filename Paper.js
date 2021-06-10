class Paper {
    constructer(x,y,radious){
     var options ={
         isStatic:true,
         'restitution':0.3,
         'friction':0.5,
         'density':1.2
    
     }
     this.body = Bodies.circle(x,y,height,options);
     this.radious = radious;
     
     World.add(world,this.body);
    }
    display(){
    
       ellipseMode(RADIOUS);

        fill("yellow");
        
        circle(this.body.position.x,this.body.position.y,this.radious);
    }
    
    
    
    }