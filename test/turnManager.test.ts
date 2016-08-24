/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/ts/models/TurnManager.ts" />
/// <reference path="../src/ts/models/Player.ts" />


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

    describe("#currentPlayer", () => {
        it("is return player1 when turn 1", () => {
            let player1 = new MainApp.Player();
            let player2 = new MainApp.Player();
            manager.players = [player1, player2];
            expect(manager.currentPlayer()).to.equal(player1);
        });

        it("is return player2 when turn 2", () => {
            let player1 = new MainApp.Player();
            let player2 = new MainApp.Player();
            manager.players = [player1, player2];
            manager.turnEnd();
            expect(manager.currentPlayer()).to.equal(player2);
        });
    });
});
