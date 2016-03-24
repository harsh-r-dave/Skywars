/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ gameobject.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: super class for game objects.
    Revision History: updated variable values for scrolling
*/

module objects {
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES 
        protected _speed: createjs.Point;
        protected _width: number;
        protected _height: number;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _topBounds: number;
        protected _bottomBounds: number;

        // CONSTRUCTOR METHOD 
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));

            this._speed = new createjs.Point(0, 0);
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this._height;
            this._leftBounds = -this._width;
            this._rightBounds = config.Screen.WIDTH + this._width;
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            // check if y value has met the reset criteria
            if (this.x >= value) {
                this._reset(resetValue);
            }
        }

        // Reset the Object offscreen
        protected _reset(value: number): void {
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            var boundValue: number = 0;
            // scroll the space 5 px per frame
            this.x += this._speed.y;
            this._checkBounds(boundValue);
        }
    }
}