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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// END SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // instantiate obstacles collection
            this._obstaclesCollection = new Array("Planet1", "Planet2", "Planet3", "Planet4", "Stone1", "Stone2");
            // instantiate obstacles array
            this._obstacles = new Array();
            // Add background to the scene
            this._background = new objects.GameBackground();
            this.addChild(this._background);
            // add obstacle graphics to the scene
            for (var obstacle = 0; obstacle < 2; obstacle++) {
                var randomObstacle = Math.floor(Math.random() * 6);
                this._obstacles[obstacle] = new objects.Obstacles(this._obstaclesCollection[randomObstacle]);
                this.addChild(this._obstacles[obstacle]);
            }
            //Add SCORE Label
            this._scoreLabel = new objects.Label("SCORE: " + scoreboard.getScore(), "50px Frijole", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            // add the PlayAgain button to the END scene
            this._playAgainButton = new objects.Button("PlayAgain", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playAgainButton);
            // PLAY_AGAIN Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);
            // add the Home button to the END scene
            this._homeButton = new objects.Button("Home", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._homeButton);
            // HOME Button event listener
            this._homeButton.on("click", this._homeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // END Scene updates here
        End.prototype.update = function () {
            this._background.update();
            // obstacles update
            this._obstacles.forEach(function (obstacle) {
                obstacle.update();
            });
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY_AGAIN Button click event handler
        End.prototype._playAgainButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // HOME Button click event handler
        End.prototype._homeButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map