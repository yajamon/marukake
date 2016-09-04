/// <reference path="Field.ts" />
/// <reference path="TurnManager.ts" />

namespace MainApp {
    /**
     * GameMaster
     */
    export class GameMaster {
        private field: Field;
        private turnManager: TurnManager;
        constructor() {
            let size: Size = { width: 3, height: 3 };
            this.field = new Field(size);

            let player1 = new Player();
            player1.pieces = [];
            for (let index = 0; index < 5; index++) {
                player1.pieces.push(new Circle());
            }
            let player2 = new Player();
            player2.pieces = [];
            for (let index = 0; index < 4; index++) {
                player2.pieces.push(new Cross());
            }
            this.turnManager = new TurnManager();
            this.turnManager.players = [player1, player2];
        }
    }
}
