const { describe } = require("yargs")
const { Shape, Square, Triangle, Circle } = require("./shapes.js")

describe("Shape", () => {
    describe("Constructor", () => {
        const testShape = new Shape ("X", "Y", "Z");
        expect(testShape).toBeInstanceOf(Shape);
    });
});

describe("Square", () => {
    describe("Constructor", () => {
        const testShape = new Square ("X", "Y", "Z");
        expect(testSquare).toBeInstanceOf(Square);
    });
});

describe("Triangle", () => {
    describe("Constructor", () => {
        const testShape = new Triangle ("X", "Y", "Z");
        expect(testTriangle).toBeInstanceOf(Triangle);
    });
});

describe("Circle", () => {
    describe("Constructor", () => {
        const testShape = new Circle ("X", "Y", "Z");
        expect(testCircle).toBeInstanceOf(Circle);
    });
});
