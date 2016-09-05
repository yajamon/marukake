/// <reference path="Field.ts" />
/// <reference path="TurnManager.ts" />

namespace MainApp {
    /**
     * GameMaster
     */
    export class GameMaster {
        public field: Field;
        private turnManager: TurnManager;

        public putFailed = () => { };
        public putSuccess = () => { };
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

        /**
         * putPosition
         */
        public put(position:Position) {
            if (this.field.existsPiece(position)) {
                this.putFailed();
                return ;
            }

            let player = this.turnManager.currentPlayer();
            this.field.putPiece(player.pieces.shift(), position);
            this.turnManager.turnEnd();
            this.putSuccess();
        }

    }
}
