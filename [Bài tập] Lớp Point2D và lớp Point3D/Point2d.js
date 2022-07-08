"use strict";
exports.__esModule = true;
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    Point2D.prototype.setX = function (value) {
        this.x = value;
    };
    Point2D.prototype.setY = function (value) {
        this.y = value;
    };
    Point2D.prototype.getXY = function () {
        return { x: this.x, y: this.y };
    };
    Point2D.prototype.setXY = function (value, value2) {
        this.x = value;
        this.y = value2;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
