import { GameOption, Ruleset } from './api/ruleset';

const rock = new GameOption('rock');
const paper = new GameOption('paper');
const scissors = new GameOption('scissors');
const fire = new GameOption('fire');
const spock = new GameOption('spock');

export const defaultOptions = {
  rock,
  paper,
  scissors,
  fire,
  spock,
};

export const defaultRuleset = new Ruleset([rock, paper, scissors, fire, spock]);

defaultRuleset.addRules(
  rock.winsOver(scissors, fire, spock),
  spock.winsOver(fire),
  paper.winsOver(rock, spock),
  scissors.winsOver(paper, spock),
  fire.winsOver(paper, scissors),
);
