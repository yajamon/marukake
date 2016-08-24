/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/TurnManager.ts" />


var expect = chai.expect;

describe("TurnManager", () => {
    var manager: MainApp.TurnManager;

    beforeEach(() => {
        manager = new MainApp.TurnManager();
    });

    describe("#currentTurn", () => {
        it("is return '1' when initialize", () => {
            let turn = manager.currentTurn();
            expect(turn).to.equal(1);
        });
    });

    describe("#turnEnd", () => {
        it("is count-up to turn", () => {
            expect(manager.currentTurn()).to.equal(1);
            manager.turnEnd();
            expect(manager.currentTurn()).to.equal(2);
        });
    });
});
