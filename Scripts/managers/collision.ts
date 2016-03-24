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

module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        constructor(player:objects.Player) {
            this._player = player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        public check(object:objects.GameObject) {
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfHeight:number = this._player.height * 0.5;
            var objectHalfHeight:number = object.height * 0.5;
            var minimumDistance:number = playerHalfHeight + objectHalfHeight;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if(this.distance(startPoint, endPoint) < minimumDistance) {
                
                // check if it's an car hit
                if(object.name === "obstacles") {
                    object.visible = false;
                    console.log("obstacles hit!");
                    createjs.Sound.play("Crash", 0, 0, 0, 0, 1, 0);
                }
                
                // check if it's a battery hit
                if(object.name === "enemy") {
                    object.visible = false;
                    console.log("enemy hit!");
                    createjs.Sound.play("Crash", 0, 0, 0, 0, 1, 0);
                }
                
                // check if it's a star hit
                if(object.name === "star") {
                    object.visible = false;
                    console.log("star hit!");
                    createjs.Sound.play("Collect", 0, 0, 0, 0, 1, 0);
                }
            }
        }
    }
}