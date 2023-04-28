const { it } = require("node:test");
const { describe } = require("yargs")
const { Shape, Square, Triangle, Circle } = require("./shapes.js")

describe("Shape", () => {
    describe("Constructor", () => {
        it("should make a Shape object", () => {
            const testShape = new Shape ("X", "Y", "Z");
             expect(testShape).toBeInstanceOf(Shape);
        });
    });
});

describe("Square", () => {
    describe("Constructor", () => {
        it("should make a Square object", () => {
            const testShape = new Square ("X", "Y", "Z");
            expect(testSquare).toBeInstanceOf(Square);
        });
    });
});

describe("Triangle", () => {
    describe("Constructor", () => {
        it("should make a Triangle object", () => {
            const testShape = new Triangle ("X", "Y", "Z");
            expect(testTriangle).toBeInstanceOf(Triangle);
    });
});

describe("Circle", () => {
    describe("Constructor", () => {
        it("should make a Circle object", () => {   
            const testShape = new Circle ("X", "Y", "Z");
            expect(testCircle).toBeInstanceOf(Circle);
        });
    });
});
