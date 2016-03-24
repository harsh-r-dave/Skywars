module objects {
    export class GameBackground extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        private _speed: number;

        // CONSTRUCTOR ++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("Space"));

            this._speed = 5;
            this._reset();
        }


        // PUBLIC METHODS
        public update(): void {
            this.x += this._speed;      //left to right
            //this.x -= this._speed;       // right to left
            this._checkBounds();
        }

        //PRIVATE METHODS

        // reset the space to make it look continues
        private _reset(): void {
            this.x = -1360;      // left to right
            //this.x = 0;       // right to left
        }

        // check boundaries of road
        private _checkBounds(): void {
            if (this.x >= 0) {       // left to right
                this._reset();
            }
            /*if(this.x <= -1360)      // right to left
            {
                this._reset();
            }*/
        }
    }
}