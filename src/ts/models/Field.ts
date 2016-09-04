/// <reference path="./Square.ts" />
/// <reference path="./interfaces/Size.ts" />
/// <reference path="./interfaces/Position.ts" />


namespace MainApp {
    /**
     * Field
     */
    export class Field {
        private _size: Size;
        data: Square[];

        constructor(size: Size) {
            this._size = size;
            this.data = [];

            let count = size.width * size.height;
            for (var index = 0; index < count; index++) {
                this.data.push(new Square());
            }
        }

        public get size(): Size {
            return this._size;
        }
        public set size(v: Size) {
            throw new Error("Can't write property");
        }

        private culcIndex(position: Position) {
            return position.x + position.y * this.size.width;
        }

        /**
         * putPiece
         */
        public putPiece(piece: Puttable, position: Position) {
            let index = this.culcIndex(position);
            this.data[index].piece = piece;
        }
    }
}
