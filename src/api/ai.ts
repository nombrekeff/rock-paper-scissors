import { GameOption } from './ruleset';

export abstract class GameAi {
  abstract pickOption(options: GameOption[]): Promise<GameOption>;
}
