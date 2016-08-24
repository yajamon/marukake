namespace MainApp {
    /**
     * TurnManager
     */
    export class TurnManager {
        private turn: number;
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
    }
}
