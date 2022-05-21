export class Ruleset {
  protected rules: Rule[];
  protected options: GameOption[];

  constructor(options: GameOption[]) {
    this.rules = [];
    this.options = options;
  }

  addRules(...rules: Rule[]): Ruleset {
    this.rules.push(...rules);
    return this;
  }

  getRules(): Rule[] {
    return this.rules;
  }

  getOptions(): GameOption[] {
    return this.options;
  }

  whoWins(option1: GameOption, option2: GameOption): GameOption | null {
    // Tie
    if (option1 === option2) return null;

    // return option1;
    for (let rule of this.rules) {
      const option1Wins = rule.isWinner(option1, option2);
      if (option1Wins) return option1;

      const option2Wins = rule.isWinner(option2, option1);
      if (option2Wins) return option2;
    }

    return null;
  }
}

export class Rule {
  public readonly winnerOption: GameOption;
  public readonly loserOptions: GameOption[];

  constructor(winnerOption: GameOption, loserOptions: GameOption[]) {
    this.winnerOption = winnerOption;
    this.loserOptions = loserOptions;
  }

  isWinner(option1: GameOption, option2: GameOption): boolean {
    return this.winnerOption == option1 && this.loserOptions.includes(option2);
  }
}

export class GameOption {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  winsOver(...losers: GameOption[]): Rule {
    return new Rule(this, losers);
  }

  getLabel() {
    return this.id;
  }
}
