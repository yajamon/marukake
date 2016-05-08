/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/Field.ts" />
/// <reference path="../src/ts/models/Square.ts" />
/// <reference path="../src/ts/models/interfaces/Size.ts" />


var expect = chai.expect;

describe("Field", function () {
    let field: MainApp.Field;

    beforeEach(() => {
        let size: MainApp.Size = { width: 3, height: 3 };
        field = new MainApp.Field(size);
    });

    describe(".data", function () {
        it("is array", function () {
            expect(field.data).to.be.a("array");
        });

        it("hasn't element of null", () => {
            field.data.forEach(element => {
                expect(element).not.to.be.null;
            });
        });

        it("has element of Square", () => {
            field.data.forEach(element => {
                expect(element).to.be.an.instanceOf(MainApp.Square);
            });
        });
    });

    describe(".size", () => {
        it("is not writable", () => {
            expect(() => {
                let size: MainApp.Size = { width: 10, height: 15 };
                field.size = size;
            }).to.throw(Error);
        });
    });

    describe("#putPiece", () => {
        it("can put puttable object to first", () => {
            let circle = new MainApp.Circle();
            let firstPosition: MainApp.Position = { x: 0, y: 0 };
            field.putPiece(circle, firstPosition);
            field.data.forEach((element, index) => {
                if (index === 0) {
                    expect(element.piece).to.equal(circle);
                } else {
                    expect(element.piece).to.not.equal(circle);
                }
            });
        });

        it("can put object to last", () => {
            let cross = new MainApp.Cross();
            let size = field.size;
            let lastPosition: MainApp.Position = {
                x: field.size.width - 1,
                y: field.size.height - 1,
            };
            field.putPiece(cross, lastPosition);
            field.data.forEach((element, index) => {
                let lastIndex = field.data.length - 1;
                if (index === lastIndex) {
                    expect(element.piece).to.equal(cross);
                } else {
                    expect(element.piece).to.not.equal(cross);
                }
            });
        });
    });
});
