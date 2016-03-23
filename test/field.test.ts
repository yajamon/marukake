/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/field.ts" />


var expect = chai.expect;

describe("Field", function(){
    let field = new MainApp.Field();

    describe("data", function() {
        it("is array", function () {
            expect(field.data).to.be.a("array");
        });

        it("width 3", function() {
            expect(field.data).to.have.lengthOf(3);
        });
        
        it("has array in data", function () {
            field.data.forEach((element)=>{
                expect(element).to.be.a("array");
            });
        });
        
        it("height 3", function () {
            field.data.forEach((element)=>{
                expect(element).to.have.lengthOf(3);
            });
        });
    });
});
