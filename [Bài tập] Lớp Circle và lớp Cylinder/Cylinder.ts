import { Cricle } from "./Circle";

class Cylinder extends Cricle {
    private _height: number

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }
    getCylindricalVolume(): number {
        return super.Aria() * this._height
    }
}
