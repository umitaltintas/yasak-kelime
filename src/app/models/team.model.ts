type Player = {
  id: number;
  name: string;
};

export type Team = {
  id: number;
  name: string;
  score: number;
  players: Player[];
};
