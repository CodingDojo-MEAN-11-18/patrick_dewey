class Pizza {
    constructor(radius, slices){
        this.radius = radius;
        this._slices = slices;
    }
    get slices() {
        return this._slices;
    }
    set slices(slices) {
        this._slices = slices;
    }
};
const pie = new Pizza(12,6);
console.log(pie.slices)
pie.slices = 12;
console.log(pie.slices);

class Circle{
    constructor(x,y,radius) {
        this.x =x;
        this.y =y;
        this.radius =radius;
    }
    get diameter() {
        let diameter = this.radius*2;
        return diameter
    }
}
const circle1 = new Circle(1,2,5);
console.log(circle1.diameter);
