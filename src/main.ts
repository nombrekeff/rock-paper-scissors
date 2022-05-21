import { defaultRuleset } from './default_ruleset';
import { RandomAi } from './random_ai';
import { PlayerScoreboard } from './scoreboard';
import { Game } from './game';
import { CliUi } from './cli_ui';

const game = new Game({
  ruleset: defaultRuleset,
  scoreboard: new PlayerScoreboard(),
  ui: new CliUi(),
  ai: new RandomAi(),
});

game.start();
