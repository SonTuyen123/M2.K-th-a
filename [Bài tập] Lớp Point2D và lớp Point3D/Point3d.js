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
var Point2d_1 = require("./Point2d");
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.getZ = function () {
        return this.z;
    };
    Point3D.prototype.setZ = function (z) {
        this.z = z;
    };
    Point3D.prototype.getXYZ = function () {
        return { x: this.x, y: this.y, z: this.z };
    };
    Point3D.prototype.setXYZ = function (value, value2, value3) {
        this.x = value;
        this.y = value2;
        this.z = value3;
    };
    return Point3D;
}(Point2d_1.Point2D));
var point = new Point3D(4, 5, 6);
console.log(point.getXYZ());
point.setXYZ(5, 5, 5);
console.log(point.setXYZ(5, 5, 5));
