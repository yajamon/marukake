/// <reference path="./Player.ts" />

namespace MainApp {
    /**
     * TurnManager
     */
    export class TurnManager {
        private turn: number;
        public players: Player[];

        constructor() {
            this.turn = 1;
        }

        /**
         * currentTurn
         */
        public currentTurn() {
            return this.turn;
        }

        /**
         * turnEnd
         */
        public turnEnd() {
            this.turn += 1;
        }

        /**
         * currentPlayer
         */
        public currentPlayer() {
            let index = this.turn - 1;
            return this.players[index];
        }
    }
}
