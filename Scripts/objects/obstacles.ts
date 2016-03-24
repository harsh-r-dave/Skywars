module objects {
    // OBSTACLES CLASS ++++++++++++++++++++++++++++++++++++
    export class Obstacles extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(obstacleType: string) {
            super(obstacleType);

            this._reset(this._leftBounds);
            this.name = "obstacles";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the obstacles met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the obstacles offscreen
        protected _reset(value: number): void {
            this.visible = true;
            // behaviour of objects
            this._speed.x = Math.floor(Math.random() * 5) + 2;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the obstacles
            this.x += this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._rightBounds);
        }
    }
}