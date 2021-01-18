class rope{
    constructor(body1,body2,offsetX,offsetY)
    {this.offsetX=offsetX
        this.offsetY=offsetY      
        
        var options = {
            bodyA:body1, 
            bodyB:body2, 
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.rope= Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            strokeWeight(6);
            fill("white")
        line(pointA.x,pointA.y,this.rope.pointB.x,this.rope.pointB.y)
        } 
        

    }
}
