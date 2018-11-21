// class construction ES6
class Dot {
    constructor(x,y){
        this.x =x;
        this.y =y;
        console.log("You created a dot!");
    };
    // prototype method
    showLocation(){
        console.log(`This ${this.constructor.name} is at x ${this.x} and y ${this.y}`);
    };
    // static method
    static getHelp(){
        console.log("This is a Dot class for created Dots. Dots take an x and y coordinate!")
    };
    parentFunction(){
        return "This is coming from the parent!"
    }
};
class Circle extends Dot {
    constructor(x,y,radius){
        super(x,y);
        this.radius = radius;
    };
    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    };
};
const circle1 = new Circle(33,33,33);
console.log(circle1);
circle1.childFunction()

const dot1 = new Dot(10,10);
console.log("x="+dot1.x+",y="+dot1.y);
Dot.prototype.showLocation = function(){
    console.log("This Dot is at x "+ this.x+" and y "+ this.y);
};
const dot1 = new Dot(30,38);
const dot2 = new Dot(56,78);
dot1.showLocation();
dot2.showLocation();
Dot.getHelp(0)
circle1.showLocation()