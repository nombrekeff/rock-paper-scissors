import { Scoreboard } from './api/scoreboard';

interface PlayerScoreboardScores {
  [key: string]: number;
}

export class PlayerScoreboard implements Scoreboard {
  private scores: PlayerScoreboardScores = {};

  setScore(id: string, score: number) {
    this.scores[id] = score;
  }

  getScore(id: string): number {
    return this.scores[id] ?? 0;
  }

  getAllScores() {
    return this.scores;
  }

  increaseScore(id: string, increment: number = 1) {
    this.scores[id] += increment;
  }

  decreaseScore(id: string, decrement: number = 1) {
    this.scores[id] -= decrement;
  }
}
