module objects {
    export class GameBackground extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES

        // CONSTRUCTOR ++++++++++++++++++++++++
        constructor() {
            super("Space");

            this._speed.x = 5;  // space speed
            this._reset(-1360);
            //this._reset(0);   // right to left
        }


        // PUBLIC METHODS
        public update(): void {
            this.x += this._speed.x;      //left to right
            //this.x -= this._speed.y;       // right to left
            this._checkBounds(0);
            //this._checkBounds(-1360);     // right to left
        }

        //PRIVATE METHODS

        // reset the space to make it look continues
        protected _reset(value: number): void {
            this.x = value;      // left to right   -1360
            //this.x = value;       // right to left
        }

        // check boundaries of road
        protected _checkBounds(value: number): void {
            if (this.x >= value) {       // left to right
                this._reset(-1360);
            }
            /*if(this.x <= value)      // right to left
            {
                this._reset(0);
            }*/
        }
    }
}