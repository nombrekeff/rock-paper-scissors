import { defaultRuleset } from './impl/default_ruleset';
import { RandomAi } from './impl/random_ai';
import { PlayerScoreboard } from './impl/scoreboard';
import { CliUi } from './impl/cli_ui';
import { Game } from './impl/game';

const game = new Game({
  ruleset: defaultRuleset,
  scoreboard: new PlayerScoreboard(),
  ui: new CliUi(),
  ai: new RandomAi(),
});

game.start();
