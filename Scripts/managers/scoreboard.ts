/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ scoreboard.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Checks of two objects collide.
    Revision History:
*/

module managers {
    export class Scoreboard {
        // PRIVATE INSTANCE VARIABLES
        private _score: number;
        private _lives: number;
        
        // PUBLIC METHODS
        public setScore(value: number): void {
            this._score = value ;
        }
        public getScore(): number {
            return this._score;
        }
        
        public setLives(value: number) {
            this._lives = value;
        }
        public getLives(): number {
            return this._lives;
        }
        
        public addScore(score: number): void {
            this._score += score;
        }
        
        public addLives(life: number): void {
            this._lives += life;
        }
        public removeLives(life: number): void {
            this._lives -= life;
        }
    }
}