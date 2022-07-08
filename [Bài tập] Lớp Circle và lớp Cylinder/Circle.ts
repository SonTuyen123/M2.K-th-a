export class Cricle {
    protected _radius: number;
    protected _color: string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }
    public getradius(): number {
        return this._radius;
    }
    public getcolor(): string {
        return this._color;
    }


    public setradius(value: number) {
        this._radius = value;
    }


    public setcolor(value: string) {
        this._color = value;
    }
    Aria(): number {
        return this._radius * this._radius * 3.14;
    }

}

