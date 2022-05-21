import { Player } from '../api/player';

export class GamePlayer implements Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
