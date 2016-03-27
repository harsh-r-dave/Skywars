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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
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
            // Add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            this._player.y = 150;
            //Add Game Label
            this._gameLabel = new objects.Label("SkyWars", "70px Frijole", "#ffff00", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y, true);
            this.addChild(this._gameLabel);
            // add the PlayNow button to the MENU scene
            this._playNowButton = new objects.Button("PlayNow", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._playNowButton);
            // PlayNow Button event listener
            this._playNowButton.on("click", this._playNowButtonClick, this);
            // add the Help button to the MENU scene
            this._helpButton = new objects.Button("Help", config.Screen.CENTER_X + 50, config.Screen.CENTER_Y + 180, false);
            this.addChild(this._helpButton);
            // Help Button event listener
            this._helpButton.on("click", this._helpButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        Menu.prototype.update = function () {
            this._background.update();
            // obstacles update
            this._obstacles.forEach(function (obstacle) {
                obstacle.update();
            });
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY_NOW Button click event handler
        Menu.prototype._playNowButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // HELP Button click event handler
        Menu.prototype._helpButtonClick = function (event) {
            // Switch to the HELP Scene
            scene = config.Scene.HELP;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map