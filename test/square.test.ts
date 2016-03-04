/// <reference path="../typings/mocha/mocha" />
/// <reference path="../typings/chai/chai" />
/// <reference path="../src/ts/models/square" />

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
