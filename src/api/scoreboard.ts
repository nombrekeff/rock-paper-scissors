export interface ScoreEntry {
  id: string;
  score: number;
}

export abstract class Scoreboard {
  abstract setScore(id: string, score: number): void;
  abstract getScore(id: string): number;
  abstract getAllScores(): any; // Add return type
  abstract increaseScore(id: string): void;
  abstract decreaseScore(id: string): void;
}
