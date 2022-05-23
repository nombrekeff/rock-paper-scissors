import { GameOption, Rule } from './ruleset';

export abstract class GameUi {
  abstract askForPlayerName(): Promise<string>;
  abstract askForOption(options: GameOption[]): Promise<GameOption>;
  abstract displayText(text: string): void;
  abstract displayTieMessage(): void;
  abstract displayWinMessage(name: string): void;
  abstract displayRoundChoices(playerName: string, cpuName: string, playerOption: GameOption, cpuOption: GameOption): void;
  abstract showScore(playerName: string, cpuName: string, playerScore?: number, cpuScore?: number): void;
  abstract welcomePlayer(name: string): void;
  abstract initialMessage(): void;
  abstract showRules(rules: Rule[]): void;
  abstract displayWrongInputMessage(): void
}
