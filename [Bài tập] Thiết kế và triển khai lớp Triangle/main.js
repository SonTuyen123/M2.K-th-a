"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color, name, side1, side2, side3) {
        var _this = _super.call(this, color, name) || this;
        _this._side1 = side1;
        _this._side2 = side2;
        _this._side3 = side3;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "side1", {
        get: function () {
            return this._side1;
        },
        set: function (value) {
            this._side1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side2", {
        get: function () {
            return this._side2;
        },
        set: function (value) {
            this._side2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side3", {
        get: function () {
            return this._side3;
        },
        set: function (value) {
            this._side3 = value;
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.checkTriangle = function () {
        return this._side1 + this._side2 > this._side3 &&
            this._side2 + this._side3 > this._side1 &&
            this._side1 + this._side3 > this._side2;
    };
    Triangle.prototype.getArea = function () {
        if (this.checkTriangle()) {
            return Math.sqrt(this.getPerimeter() * (this.getPerimeter() - this._side1) * (this.getPerimeter() - this._side2) * (this.getPerimeter() - this._side3));
        }
        else {
            return "Please enter the correct sides of the triangle !";
        }
    };
    Triangle.prototype.getPerimeter = function () {
        return ((this._side1 + this._side2 + this._side3) / 2);
    };
    return Triangle;
}(shape_1.Shape));
var test = new Triangle("red", "hinh a", 3, 4, 5);
console.log(test.checkTriangle());
test.getArea();
console.log(test.getArea());
