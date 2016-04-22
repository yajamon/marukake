/// <reference path="./square.ts" />

namespace MainApp {
    /**
     * Field
     */
    export class Field {
        data:Square[][];
        constructor() {
            this.data = [
                [new Square(), new Square(), new Square()],
                [new Square(), new Square(), new Square()],
                [new Square(), new Square(), new Square()],
            ];
        }
    }
}
