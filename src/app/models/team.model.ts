export interface Player {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  name: string;
  score: number;
  players: Player[];
}
