/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/square.ts" />

var expect = chai.expect;

describe("Square", ()=>{
    describe(".state", ()=>{
        it("is EMPTY when create", ()=>{
            let square = new MainApp.Square();
            expect(square.state).to.not.be.undefined;
            expect(square.state).to.equal(MainApp.SQUARE_STATE.EMPTY);
        });
    });
});
