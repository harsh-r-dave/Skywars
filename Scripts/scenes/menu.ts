/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ menu.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 26, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Main menu scene
    Revision History: updated UI - Mar 26, 2016
*/

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameLabel: objects.Label;
        private _background: objects.GameBackground;
        private _playNowButton: objects.Button;
        private _helpButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Add background to the scene
            this._background = new objects.GameBackground();
            this.addChild(this._background);

            //Add Game Label
            this._gameLabel = new objects.Label(
                "SkyWars", "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._gameLabel);


            // add the PlayNow button to the MENU scene
            this._playNowButton = new objects.Button(
                "PlayNow",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playNowButton);

            // PlayNow Button event listener
            this._playNowButton.on("click", this._playNowButtonClick, this);

            // add the Help button to the MENU scene
            this._helpButton = new objects.Button(
                "Help",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._helpButton);

            // Help Button event listener
            this._helpButton.on("click", this._helpButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._background.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // PLAY_NOW Button click event handler
        private _playNowButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        // HELP Button click event handler
        private _helpButtonClick(event: createjs.MouseEvent) {
            // Switch to the HELP Scene
            scene = config.Scene.HELP;
            changeScene();
        }
    }
}