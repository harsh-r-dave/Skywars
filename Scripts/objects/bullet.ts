module objects {
    // BULLET CLASS ++++++++++++++++++++++++++++++
    export class Bullet extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;

        constructor() {
            super(assets.getResult("Bullet"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public update(): void {
            this.x -= 15;
        }

        public setBulletPoisition(playerX: number, playerY: number): void {
            this.x = playerX;
            this.y = playerY;
            createjs.Sound.play("Shoot");
        }
    }
}