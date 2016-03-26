/* 
    Source File: N/A
    Author's name: Harsh Dave, Student, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 26, 2016
    Date Last  Modified: Mar 26, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Instruction scene gives help on how to play game
    Revision History: added instructions image and button
*/

// INSTRUCTIONS SCENE
module scenes {
    export class Help extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionsImage: createjs.Bitmap;
        private _gotItButton: objects.Button;
        private _upButton: objects.Button;
        private _downButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Instructions image to the scene
            this._instructionsImage =  new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._instructionsImage);            
            
            // add the Got It button to the INSTRUCTIONS scene
            this._gotItButton = new objects.Button(
                "GotIt",
                config.Screen.CENTER_X - 90,
                430, false);
            this.addChild(this._gotItButton);
            
            // Got It Button event listener
            this._gotItButton.on("click", this._gotItButtonClick, this);
            this._gotItButton.visible = false;
            
            // add the Up button to the INSTRUCTIONS scene
            this._upButton = new objects.Button(
                "Up",
                585,
                5, false);
            this.addChild(this._upButton);
            
            // UP Button event listener
            this._upButton.on("click", this._upButtonClick, this);
            
            // add the Down button to the INSTRUCTIONS scene
            this._downButton = new objects.Button(
                "Down",
                585,
                430, false);
            this.addChild(this._downButton);
            
            // Down Button event listener
            this._downButton.on("click", this._downButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // GOT IT Button click event handler
        private _gotItButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
        
        // Up Button click event handler
        private _upButtonClick(event: createjs.MouseEvent) {
            // Scroll the scene up
            if(this._instructionsImage.y == -170) {
                this._instructionsImage.y += 170;
                this._gotItButton.visible = false;   
            }
        }
        
        // DOWN Button click event handler
        private _downButtonClick(event: createjs.MouseEvent) {
            // Scroll the scene down
            if(this._instructionsImage.y == 0) {
                this._instructionsImage.y -= 170;
                this._gotItButton.visible = true;;    
            }
        }
     }
}