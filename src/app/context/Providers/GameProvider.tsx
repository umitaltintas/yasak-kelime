import { createContext, useState } from 'react';
import { GameState } from 'src/app/models/game.model';
import { Team } from 'src/app/models/team.model';
const initialState = {
  id: 0,
  activeTeamIndex: 0,
  passRight: 3,
  tabooRight: 3,
  teams: [
    {
      name: 'Team A',
      score: 0,
    },
    {
      name: 'Team B',
      score: 0,
    },
  ] as Team[],
  time: new Date(),
} as GameState;

// Create a new context object
export const GameStateContext = createContext({} as any);

export function GameProvider({ children }: any) {
  const [gameState, setGameState] = useState(initialState);
  const updateGameState = (newState: GameState) => {
    setGameState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <GameStateContext.Provider value={{ gameState, updateGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
