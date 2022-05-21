import { GameAi } from './api/ai';
import { Ruleset } from './api/ruleset';
import { Scoreboard } from './api/scoreboard';
import { GameUi } from './api/ui';

export interface GameOptions {
  scoreboard: Scoreboard;
  ruleset: Ruleset;
  ui: GameUi;
  ai: GameAi;
  rounds?: number;
}

export class Game {
  private ruleset: Ruleset;
  private scoreboard: Scoreboard;
  private ui: GameUi;
  private ai: GameAi;

  private playerName: string;
  private cpuName: string;

  private _playedRounds: number = 0;

  public readonly rounds: number;

  constructor(options: GameOptions) {
    this.scoreboard = options.scoreboard;
    this.ruleset = options.ruleset;
    this.ui = options.ui;
    this.ai = options.ai;
    this.rounds = options.rounds ?? 3;
    this.playerName = 'human';
    this.cpuName = 'cup';
  }

  async start() {
    this.ui.initialMessage();
    this.playerName = await this.ui.askForPlayerName();
    this.ui.welcomePlayer(this.playerName);
    this.ui.showRules(this.ruleset.getRules());

    this.scoreboard.setScore(this.playerName, 0);
    this.scoreboard.setScore(this.cpuName, 0);

    while (this._playedRounds < this.rounds) {
      await this.playRound();
    }
  }

  async playRound() {
    const userInput = await this.ui.askForOption(this.ruleset.getOptions());
    const cpuOption = await this.ai.pickOption(this.ruleset.getOptions());

    this.ui.displayRoundChoices(this.playerName, this.cpuName, userInput, cpuOption);

    const winner = this.ruleset.whoWins(userInput, cpuOption);
    if (winner === null) {
      this.ui.displayTieMessage();
    }

    if (winner === userInput) {
      this.ui.displayWinMessage(this.playerName);
      this.scoreboard.increaseScore(this.playerName);
    }

    if (winner === cpuOption) {
      this.ui.displayWinMessage(this.cpuName);
      this.scoreboard.increaseScore(this.cpuName);
    }

    this.ui.showScore(
      this.playerName, this.cpuName, 
      this.scoreboard.getScore(this.playerName), this.scoreboard.getScore(this.cpuName)
    );
  }
}
