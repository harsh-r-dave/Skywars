var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BULLET CLASS ++++++++++++++++++++++++++++++
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            _super.call(this, assets.getResult("Bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Bullet.prototype.update = function () {
            this.x -= 15;
        };
        Bullet.prototype.setBulletPoisition = function (playerX, playerY) {
            this.x = playerX;
            this.y = playerY;
        };
        return Bullet;
    })(createjs.Bitmap);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map