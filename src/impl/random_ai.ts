import { GameAi } from '../api/ai';
import { GameOption } from '../api/ruleset';


export class RandomAi extends GameAi {
  async pickOption(options: GameOption[]): Promise<GameOption> {
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
  }
}
