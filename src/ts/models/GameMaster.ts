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
        public callbackFinish = () => { };
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

        /**
         * checkFinish
         */
        public checkFinish() {
            if (this.existsEqualLine()) {
                return ;
            }
            this.callbackFinish();
        }

        /**
         * existsEqualLine
         */
        public existsEqualLine(): boolean{
            for (let yIndex = 0; yIndex < this.field.size.height; yIndex++) {
                for (let xIndex = 0; xIndex < this.field.size.width; xIndex++) {
                    if (this.equalsUpperRightDiagonally(xIndex, yIndex)) {
                        return true;
                    }
                }
            }
            return false;
        }

        /**
         * equalsUpperRightDiagonally
         */
        public equalsUpperRightDiagonally(x: number, y: number): boolean{
            let length = 3;
            let diffX = 1;
            let diffY = -1;
            let base = this.field.data[this.field.culcIndex({ x: x, y: y })].piece;
            for (let offset = 1; offset < length; offset++) {
                let index = this.field.culcIndex({ x: x, y: y });
                // invalid index
                if (index < 0 && this.field.data.length - 1 < index) {
                    return  false;
                }
                
                // no piece
                let target = this.field.data[index].piece;
                if (target == null) {
                    return false;
                }
                
                // different piece
                if (base.constructor != target.constructor) {
                    return false;
                }
            }
            // equal line
            return true;
        }
    }
}
