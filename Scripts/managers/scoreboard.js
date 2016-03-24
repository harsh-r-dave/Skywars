var managers;
(function (managers) {
    var Scoreboard = (function () {
        function Scoreboard() {
        }
        // PUBLIC METHODS
        Scoreboard.prototype.setScore = function (value) {
            this._score = value;
        };
        Scoreboard.prototype.getScore = function () {
            return this._score;
        };
        Scoreboard.prototype.setLives = function (value) {
            this._lives = value;
        };
        Scoreboard.prototype.getLives = function () {
            return this._lives;
        };
        Scoreboard.prototype.addScore = function (score) {
            this._score += score;
        };
        Scoreboard.prototype.addLives = function (life) {
            this._lives += life;
        };
        Scoreboard.prototype.removeLives = function (life) {
            this._lives -= life;
        };
        return Scoreboard;
    })();
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map