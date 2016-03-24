var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var GameBackground = (function (_super) {
        __extends(GameBackground, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++
        function GameBackground() {
            _super.call(this, assets.getResult("Space"));
            this._speed = 5;
            this._reset();
        }
        // PUBLIC METHODS
        GameBackground.prototype.update = function () {
            this.x += this._speed; //left to right
            //this.x -= this._speed;       // right to left
            this._checkBounds();
        };
        //PRIVATE METHODS
        // reset the space to make it look continues
        GameBackground.prototype._reset = function () {
            this.x = -1360; // left to right
            //this.x = 0;       // right to left
        };
        // check boundaries of road
        GameBackground.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
            /*if(this.x <= -1360)      // right to left
            {
                this._reset();
            }*/
        };
        return GameBackground;
    })(createjs.Bitmap);
    objects.GameBackground = GameBackground;
})(objects || (objects = {}));
//# sourceMappingURL=gamebackground.js.map