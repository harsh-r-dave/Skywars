/*
    Source File: COMP397-W2016-MailPilotDemo-master/ collision.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History: updated for bullet collision - Mar 24, 2016
*/
var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var BulletCollision = (function () {
        function BulletCollision(bullet) {
            this._bullet = bullet;
        }
        BulletCollision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        BulletCollision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._bullet.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._bullet.x;
            startPoint.y = this._bullet.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsCollidingBullet() == false) {
                    switch (object.name) {
                        case "obstacles":
                            break;
                        case "enemy":
                            object.visible = false;
                            scoreboard.addScore(100);
                            break;
                        case "star":
                            object.visible = false;
                            break;
                    }
                    object.setIsCollidingBullet(true);
                }
            }
            else {
                object.setIsCollidingBullet(false);
            }
        };
        return BulletCollision;
    })();
    managers.BulletCollision = BulletCollision;
})(managers || (managers = {}));
//# sourceMappingURL=bulletcollision.js.map