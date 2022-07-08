export class Point2D {
    protected _x: number;
    protected _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    public getX(): number {
        return this._x;
    }
    public getY(): number {
        return this._y;
    }
    public setX(value: number) {
        this._x = value;
    }

    public setY(value: number) {
        this._y = value;
    }
    getXY(): object {
        return { x: this._x, y: this._y };
    }
    setXY(value: number, value2: number): void {
        this._x = value;
        this._y = value2;
    }



}