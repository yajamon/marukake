/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

var expect = chai.expect;

describe('sample', function () {
    describe('run function', function () {
        it('Throw Error at running function', function () {
            var plzZero = function(value:number) {
                if (value !== 0) {
                    throw new Error('not zero !!!');
                }
                return true;
            }
            
            expect(plzZero).to.throw(Error);
        });
    });
});