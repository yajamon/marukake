/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/circle.ts" />

var expect = chai.expect;

describe("Circle", ()=>{
    it("is exists", ()=>{
        expect(MainApp.Circle).to.exist;
    });
});
