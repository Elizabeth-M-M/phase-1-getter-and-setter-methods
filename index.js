// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    return this.radius*2
  }
  get circumference(){
    
    return Math.PI*this.radius*2
  }
  get area(){
    return Math.PI*this.radius*this.radius
  }
  set diameter(diam){
    this.radius=diam/2
  }
  set circumference(circum){
    
    this.radius=circum/(Math.PI*2)
  }
  set area(newarea){

    this.radius= Math.sqrt(newarea/Math.PI)
  }
}
let circle1 = new Circle(7)
