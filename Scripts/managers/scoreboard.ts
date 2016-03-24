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