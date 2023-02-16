import { Team } from './team.model';

export type Game = {
  id: number;
  team1: Team;
  team2: Team;
  time: Date;
  activeTeam: Team;
  tabooRight: number;
  passRight: number;
};
