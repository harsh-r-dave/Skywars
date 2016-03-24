var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // STAR CLASS ++++++++++++++++++++++++++++++++++++
    var Star = (function (_super) {
        __extends(Star, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Star() {
            _super.call(this, "Star");
            this._reset(this._leftBounds);
            this.name = "star";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Star.prototype._checkBounds = function (value) {
            // check to see if the star met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the star offscreen
        Star.prototype._reset = function (value) {
            this.visible = true;
            // behaviour of objects
            this._speed.x = 5;
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Star.prototype.update = function () {
            // scroll the star
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Star;
    })(objects.GameObject);
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map