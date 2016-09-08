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
        public isGameFinished = false;
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
        public put(position: Position) {
            if (this.isGameFinished) {
                console.log("This game is finished.");
                this.putFailed();
                return ;
            }
            if (this.field.existsPiece(position)) {
                this.putFailed();
                return ;
            }

            let player = this.turnManager.currentPlayer();
            this.field.putPiece(player.pieces.shift(), position);
            this.turnManager.turnEnd();
            this.putSuccess();
            this.checkFinish();
        }

        /**
         * checkFinish
         */
        public checkFinish() {
            if (!this.existsEqualLine()) {
                return ;
            }
            this.isGameFinished = true;
            this.callbackFinish();
        }

        /**
         * existsEqualLine
         */
        public existsEqualLine(): boolean{
            for (let yIndex = 0; yIndex < this.field.size.height; yIndex++) {
                for (let xIndex = 0; xIndex < this.field.size.width; xIndex++) {
                    let start: Position = { x: xIndex, y: yIndex };
                    if (this.equalsUpperRightDiagonally(start) ||
                        this.equalsHorizontally(start) ||
                        this.equalsLowerRightDiagonally(start) ||
                        this.equalsVertically(start)
                    ) {
                        return true;
                    }
                }
            }
            return false;
        }

        /**
         * equalsLine
         */
        public equalsLine(start:Position, diff:Position, length:number) {
            let baseIndex = this.field.culcIndex(start);
            let base: Puttable = this.field.data[baseIndex].piece;
            // no piece
            if (base == null) {
                return false;
            }
            for (let offset = 1; offset < length; offset++) {
                let index = this.field.culcIndex({
                    x: start.x + diff.x * offset,
                    y: start.y + diff.y * offset
                });
                // invalid index
                if (index < 0 || this.field.data.length - 1 < index) {
                    return  false;
                }
                
                let target:Puttable = this.field.data[index].piece;
                // no piece
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

        /**
         * equalsUpperRightDiagonally
         */
        public equalsUpperRightDiagonally(start: Position): boolean{
            let diff: Position = {
                x: 1,
                y: -1
            };
            let length = 3;
            return this.equalsLine(start, diff, length);
        }

        /**
         * equalsHorizontally
         */
        public equalsHorizontally(start: Position): boolean{
            let diff: Position = {
                x: 1,
                y: 0
            };
            let length = 3;
            return this.equalsLine(start, diff, length);
        }

        /**
         * equalsUpperRightDiagonally
         */
        public equalsLowerRightDiagonally(start: Position): boolean {
            let diff: Position = {
                x: 1,
                y: 1
            };
            let length = 3;
            return this.equalsLine(start, diff, length);
        }

        /**
         * equalsVertically
         */
        public equalsVertically(start: Position): boolean {
            let diff: Position = {
                x: 0,
                y: 1
            };
            let length = 3;
            return this.equalsLine(start, diff, length);
        }
    }
}
