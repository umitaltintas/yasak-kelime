import { Team } from './team.model';

export interface GameState {
  id: number;
  teams: Team[];
  time: number;
  activeTeamIndex: number;
  tabooRight: number;
  passRight: number;
}
