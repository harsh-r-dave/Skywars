module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        private _width: number;
        private _height: number;
        private _topBounds: number;
        private _bottomBounds: number;

        constructor() {
            super(assets.getResult("Player"));

            this._width = this.getBounds().width;
            this._height = this.getBounds().height;

            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;

            this._topBounds = this._height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this._height * 0.5);

            this.x = 580;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}