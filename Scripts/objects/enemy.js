var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ENEMY CLASS ++++++++++++++++++++++++++++++++++++
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Enemy(enemyType) {
            _super.call(this, enemyType);
            this._reset(this._leftBounds);
            this.name = "enemy";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Enemy.prototype._checkBounds = function (value) {
            // check to see if the enemy met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the enemy offscreen
        Enemy.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Enemy.prototype.update = function () {
            // scroll the enemy
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map