module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _engineSound: createjs.AbstractSoundInstance;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        
        constructor() {
            super(assets.getResult("Player"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 580;
            
            this._engineSound = createjs.Sound.play("Engine", 0, 0, 0, -1, 1, 0);
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