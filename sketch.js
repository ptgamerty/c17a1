
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100,300,30,30,-1)

  box2=new Box(50,300,30,50,-3)

  box3=new Box(50,300,50,30,-2)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()

  box2.show()
  box2.move()

  box3.show()
  box3.move()

}

