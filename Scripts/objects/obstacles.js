var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OBSTACLES CLASS ++++++++++++++++++++++++++++++++++++
    var Obstacles = (function (_super) {
        __extends(Obstacles, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Obstacles(obstacleType) {
            _super.call(this, obstacleType);
            this._reset(this._leftBounds);
            this.name = "obstacles";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Obstacles.prototype._checkBounds = function (value) {
            // check to see if the obstacles met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the obstacles offscreen
        Obstacles.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = Math.floor(Math.random() * 4) + 2;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Obstacles.prototype.update = function () {
            // scroll the obstacles
            this.x += this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._rightBounds);
        };
        return Obstacles;
    })(objects.GameObject);
    objects.Obstacles = Obstacles;
})(objects || (objects = {}));
//# sourceMappingURL=obstacles.js.map