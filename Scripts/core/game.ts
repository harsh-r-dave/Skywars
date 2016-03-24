/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ game.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Contains assets and other required features needed during game play.
    Revision History: updated assets
*/

/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var menu: scenes.Menu;
var play: scenes.Play;
var end: scenes.End;

var assetData:objects.Asset[] = [
    // Add your Assets here
    {id: "Space", src:"../../Assets/images/background.png"},
    {id: "Bullet", src:"../../Assets/images/bullet.png"},
    {id: "Enemy1", src:"../../Assets/images/enemy1.png"},
    {id: "Enemy2", src:"../../Assets/images/enemy2.png"},
    {id: "Enemy3", src:"../../Assets/images/enemy3.png"},
    {id: "Enemy4", src:"../../Assets/images/enemy4.png"},
    {id: "Enemy5", src:"../../Assets/images/enemy5.png"},
    {id: "Enemy6", src:"../../Assets/images/enemy6.png"},
    {id: "Enemy7", src:"../../Assets/images/enemy7.png"},
    {id: "Enemy8", src:"../../Assets/images/enemy8.png"},
    {id: "Planet1", src:"../../Assets/images/planet1.png"},
    {id: "Planet2", src:"../../Assets/images/planet2.png"},
    {id: "Planet3", src:"../../Assets/images/planet3.png"},
    {id: "Planet4", src:"../../Assets/images/planet4.png"},
    {id: "Player", src:"../../Assets/images/player.png"},
    {id: "Stone1", src:"../../Assets/images/stone1.png"},
    {id: "Stone2", src:"../../Assets/images/stone2.png"},
    {id: "Star", src:"../../Assets/images/star.png"},
    {id: "StartButton", src:"../../Assets/images/StartButton.png"}
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;