import { GameOption, Rule } from '../api/ruleset';
import { GameUi } from '../api/ui';
import * as readline from 'readline';
import { stdin as default_stdin, stdout as default_stdout } from 'process';
import { arrayToReadableListString } from './utils';

function _textForRule(rule: Rule) {
  return `${rule.winnerOption.id} wins over ${arrayToReadableListString(rule.loserOptions.map((e) => e.id))}`;
}

export class CliUi extends GameUi {
  private interface: readline.Interface;

  constructor(stdin: NodeJS.ReadStream = default_stdin, stdout: NodeJS.WriteStream = default_stdout) {
    super();
    this.interface = readline.createInterface({ input: stdin, output: stdout });
  }

  _divider() {
    this.displayText(`-----------------------------------------\n`);
  }

  welcomePlayer(name: string): void {
    this._divider();
    this.displayText(`Welcome "${name}", the game will start, if you want to quit just press [ctrl+c]\n`);
  }

  initialMessage(): void {
    this.displayText('This is rock paper scissors and fire!\n');
    this.displayText('You will be playing against the "Cup", as that\'s your oponent\'s name\n\n');
  }

  askForPlayerName(): Promise<string> {
    return this.askForInput("What's your name?");
  }

  displayTieMessage() {
    this._divider();
    this.displayText('That was a tie!\n');
    this._divider();
  }

  displayWinMessage(name: string) {
    this._divider();
    this.displayText(`${name} has won!!!!!\n`);
    this._divider();
  }

  displayRoundChoices(playerName: string, cpuName: string, playerOption: GameOption, cpuOption: GameOption): void {
    this._divider();
    this.displayText(`${playerName} has chosen: ${playerOption.getLabel()}\n`);
    this.displayText(`${cpuName} has chosen: ${cpuOption.getLabel()}\n`);
    this._divider();
  }

  showScore(playerName: string, cpuName: string, playerScore: number = 0, cpuScore: number = 0): void {
    this.displayText(
      `Scores: ${playerName}: ${playerScore} | ${
        cpuName
      }: ${cpuScore}\n`,
    );
  }

  showRules(rules: Rule[]): void {
    this.displayText(`These are the rules\n`);

    for (let rule of rules) {
      this.displayText('  * ' + _textForRule(rule) + '\n');
    }
  }

  askForOption(options: GameOption[]): Promise<GameOption> {
    this._divider();

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      this.displayText(`  ${i}. ` + option.getLabel() + '\n');
    }

    return this.askForInput('Select one of the above options').then((index) => options[Number(index)]);
  }

  askForInput(prompt: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.interface.question(prompt + ': ', (value) => resolve(value));
    });
  }

  displayText(text: string): void {
    this.interface.write(text);
  }
}
