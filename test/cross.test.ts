/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/Cross.ts" />

var expect = chai.expect;

describe("Cross", ()=>{
    it("is exists", ()=>{
        expect(MainApp.Cross).to.exist;
    });
});
