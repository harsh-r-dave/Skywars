/*
    Source File: COMP397-W2016-MailPilotDemo-master/ scoreboard.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History:
*/
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