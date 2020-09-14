// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return 2*this.radius;
  }
  get circumference(){
    return Math.PI*2*this.radius;
  }
  get area(){
    return Math.PI*this.radius*this.radius;
  }
  this.area;
   set radius(){
    this.radius=this.diameter/2;
    this.radius=this.circumference/(Math.PI*2);
    this.radius=Math.sqrt(this.area/(Math.PI));
  }
  get radius(){
    return this.radius;
  }
  // set diameter(diameter){
  //   this.diameter=diameter;
  // }
  // set circumference(circumference){
  //   this.circumference=circumference;
  //   // this.radius=this.circumference/(Math.PI*2);
  // }
  // set area(area){
  //   this.area=area;
  //   // this.radius=Math.sqrt(this.area/(Math.PI));
  // }
}