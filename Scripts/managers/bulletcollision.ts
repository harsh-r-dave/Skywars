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

module managers {
    // COLLISION MANAGER CLASS
    export class BulletCollision {
        // PRIVATE INSTANCE VARIABLES
        private _bullet: objects.Bullet;
        constructor(bullet: objects.Bullet) {
            this._bullet = bullet;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }

        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._bullet.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

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
        }
    }
}