import { Point2D } from "./Point2d";
class Point3D extends Point2D {
    private _z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }
    getZ(): number {
        return this._z;
    }
    setZ(z: number): void {
        this._z = z;
    }
    getXYZ(): object {
        return { x: this._x, y: this._y, z: this._z }
    }
    setXYZ(value: number, value2: number, value3: number): void {
        this._x = value;
        this._y = value2;
        this._z = value3;
    }
}
let point = new Point3D(4, 5, 6);
console.log(point.getXYZ());
point.setXYZ(5, 5, 5);
console.log(point.setXYZ(5, 5, 5));


