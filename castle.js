class Castle {
constructor(x,y,width,height){   
this.body = Bodies.rectangle(400,20,50,100);
World.add(world,this.body)
}
display() {
    var pos = this.body.position
    rectMode(CENTER)
    fill("yellow")
    rect(pos.x,pos.y,this.innerWidth,this.height)
}
}
