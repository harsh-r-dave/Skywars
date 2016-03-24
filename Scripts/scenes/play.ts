/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Play scene where gameplay takes action.
    Revision History: space background added - Mar 24, 2016
                      obstacles added - Mar 24, 2016
                      enemy added - Mar 24, 2016
*/

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _space: objects.GameBackground;
        
        private _obstacles: objects.Obstacles[];
        private _obstaclesCollection: string[];
        private _obstaclesCount: number;
        
        private _enemy: objects.Enemy[];
        private _enemyCount: number;
        private _enemyCollection: string[];
        
        private _player: objects.Player;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // instantiate obstacles collection
            this._obstaclesCollection = new Array("Planet1", "Planet2", "Planet3", "Planet4", "Stone1", "Stone2");
            // set obstacles count
            this._obstaclesCount = 2;
            // instantiate obstacles array
            this._obstacles = new Array<objects.Obstacles>();
            
            // instantiate enemy collection
            this._enemyCollection = new Array("Enemy1","Enemy2","Enemy3","Enemy4","Enemy5","Enemy6","Enemy7","Enemy8");
            // set enemy count
            this._enemyCount = 4;
            // instantiate enemy array
            this._enemy = new Array<objects.Enemy>();
            
            // add space background image to the scene
            this._space = new objects.GameBackground();
            this.addChild(this._space);

            // add obstacle to the scene
            for (var obstacle: number = 0; obstacle < this._obstaclesCount; obstacle++) {
                var randomObstacle = Math.floor(Math.random() * 6);
                
                this._obstacles[obstacle] = new objects.Obstacles(this._obstaclesCollection[randomObstacle]);
                this.addChild(this._obstacles[obstacle]);
            }
            
            // add enemy to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                var randomEnemy = Math.floor(Math.random() * 8);
                
                this._enemy[enemy] = new objects.Enemy(this._enemyCollection[randomEnemy]);
                this.addChild(this._enemy[enemy]);
            }

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._space.update();
            this._player.update();
            
            this._obstacles.forEach(obstacle => {
                obstacle.update();    
            });
            
             this._enemy.forEach(enemy => {
                enemy.update();    
            });
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}