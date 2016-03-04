namespace MainApp {
    export enum SQUARE_STATE {
        EMPTY,
    }
    /**
     * Square
     */
    export class Square {
        state: SQUARE_STATE;
        constructor() {
            this.state = SQUARE_STATE.EMPTY;
        }
    }
}
