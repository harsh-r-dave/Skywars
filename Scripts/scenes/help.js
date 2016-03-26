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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Help = (function (_super) {
        __extends(Help, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Help() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Help.prototype.start = function () {
            //Add Instructions image to the scene
            this._instructionsImage = new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._instructionsImage);
            // add the Got It button to the INSTRUCTIONS scene
            this._gotItButton = new objects.Button("GotIt", config.Screen.CENTER_X - 90, 430, false);
            this.addChild(this._gotItButton);
            // Got It Button event listener
            this._gotItButton.on("click", this._gotItButtonClick, this);
            this._gotItButton.visible = false;
            // add the Up button to the INSTRUCTIONS scene
            this._upButton = new objects.Button("Up", 585, 5, false);
            this.addChild(this._upButton);
            // UP Button event listener
            this._upButton.on("click", this._upButtonClick, this);
            // add the Down button to the INSTRUCTIONS scene
            this._downButton = new objects.Button("Down", 585, 430, false);
            this.addChild(this._downButton);
            // Down Button event listener
            this._downButton.on("click", this._downButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // GOT IT Button click event handler
        Help.prototype._gotItButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        // Up Button click event handler
        Help.prototype._upButtonClick = function (event) {
            // Scroll the scene up
            if (this._instructionsImage.y == -170) {
                this._instructionsImage.y += 170;
                this._gotItButton.visible = false;
            }
        };
        // DOWN Button click event handler
        Help.prototype._downButtonClick = function (event) {
            // Scroll the scene down
            if (this._instructionsImage.y == 0) {
                this._instructionsImage.y -= 170;
                this._gotItButton.visible = true;
                ;
            }
        };
        return Help;
    })(objects.Scene);
    scenes.Help = Help;
})(scenes || (scenes = {}));
//# sourceMappingURL=help.js.map