/// <reference path="./square.ts" />

namespace MainApp {
    /**
     * Field
     */
    export class Field {
        data:any[][];
        constructor() {
            this.data = [
                [new Square(), new Square(), new Square()],
                [new Square(), new Square(), new Square()],
                [new Square(), new Square(), new Square()],
            ];
        }
    }
}
