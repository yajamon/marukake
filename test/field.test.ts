/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/Field.ts" />
/// <reference path="../src/ts/models/Square.ts" />
/// <reference path="../src/ts/models/interfaces/Size.ts" />


var expect = chai.expect;

describe("Field", function(){
    let field: MainApp.Field;

    beforeEach(()=>{
        field = new MainApp.Field();
    });

    describe(".data", function() {
        it("is array", function () {
            expect(field.data).to.be.a("array");
        });

        it("has array in data", function () {
            field.data.forEach((element)=>{
                expect(element).to.be.a("array");
            });
        });

        it("hasn't element of null", ()=>{
            field.data.forEach(element => {
                expect(element).not.to.be.null;
            });
        });

        it("has element of Square", ()=>{
            field.data.forEach(element =>{
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
});
