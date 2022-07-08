import { Shape } from './shape'

class Triangle extends Shape {
    private _side1: number;
    private _side2: number;
    private _side3: number;
    constructor(color: string, name: string, side1: number, side2: number, side3: number) {
        super(color, name);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    get side1(): number {
        return this._side1;
    }
    get side2(): number {
        return this._side2;
    }
    get side3(): number {
        return this._side3;
    }
    set side1(value: number) {
        this._side1 = value;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    set side3(value: number) {
        this._side3 = value;
    }
    checkTriangle(): boolean {
        return this._side1 + this._side2 > this._side3 &&
            this._side2 + this._side3 > this._side1 &&
            this._side1 + this._side3 > this._side2
    }

    getArea(): any {
        if (this.checkTriangle()) {

            return Math.sqrt(this.getPerimeter() * (this.getPerimeter() - this._side1) * (this.getPerimeter() - this._side2) * (this.getPerimeter() - this._side3));
        } else {
            return "Please enter the correct sides of the triangle !"
        }
    }

    getPerimeter(): number {
        return ((this._side1 + this._side2 + this._side3) / 2)
    }
}
let test = new Triangle("red", "hinh a", 3, 4, 5)

console.log(test.checkTriangle());

test.getArea();

console.log(test.getArea());

