/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ end.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 26, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Game over scene
    Revision History: background, buttons, score added - Mar 26, 2016
*/

// END SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.GameBackground;
        private _scoreLabel: objects.Label;
        private _playAgainButton: objects.Button;
        private _homeButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            // Add background to the scene
            this._background = new objects.GameBackground();
            this.addChild(this._background);

            //Add SCORE Label
            this._scoreLabel = new objects.Label(
                "SCORE: " + scoreboard.getScore(), "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);

            // add the PlayAgain button to the END scene
            this._playAgainButton = new objects.Button(
                "PlayAgain",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playAgainButton);

            // PLAY_AGAIN Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);

            // add the Home button to the END scene
            this._homeButton = new objects.Button(
                "Home",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 180, false);
            this.addChild(this._homeButton);

            // HOME Button event listener
            this._homeButton.on("click", this._homeButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // END Scene updates here
        public update(): void {
            this._background.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // PLAY_AGAIN Button click event handler
        private _playAgainButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
         // HOME Button click event handler
        private _homeButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}