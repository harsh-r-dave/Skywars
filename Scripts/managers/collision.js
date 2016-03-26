/*
    Source File: COMP397-W2016-MailPilotDemo-master/ collision.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History: check method updated - Mar 24, 2016
*/
var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsColliding() == false) {
                    switch (object.name) {
                        case "obstacles":
                            object.visible = false;
                            createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            if (scoreboard.getLives() == 10) {
                                scoreboard.removeLives(5);
                            }
                            else {
                                scoreboard.removeLives(10);
                            }
                            break;
                        case "enemy":
                            object.visible = false;
                            createjs.Sound.play("Crash", 0, 0, 0, 0, 0.5, 0);
                            if (scoreboard.getLives() == 10) {
                                scoreboard.removeLives(5);
                            }
                            else {
                                scoreboard.removeLives(10);
                            }
                            break;
                        case "star":
                            object.visible = false;
                            createjs.Sound.play("Collect", 0, 0, 0, 0, 0.5, 0);
                            if (scoreboard.getLives() < 100) {
                                if (scoreboard.getLives() == 5) {
                                    scoreboard.addLives(5);
                                }
                                else {
                                    scoreboard.addLives(10);
                                }
                            }
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map