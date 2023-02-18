import { createContext, useContext, useState } from 'react';
import { GameState } from 'src/app/models/game.model';
import { Team } from 'src/app/models/team.model';
const initialState = {
  id: 0,
  activeTeamIndex: 0,
  passRight: 3,
  tabooRight: 3,
  teams: [
    {
      name: 'team a',
      score: 0,
    },
    {
      name: 'team b',
      score: 0,
    },
  ] as Team[],
  time: 0,
};

interface IGameStateContext {
  gameState: GameState;
  updateGameState: (newState: any) => void;
}

const useGameState = () => {
  const [gameState, setGameState] = useState(initialState);
  const updateGameState = (newState: GameState) => {
    setGameState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };
  return { gameState, updateGameState } as IGameStateContext;
};

export const GameStateContext = createContext({} as IGameStateContext);

export const useGameContext = () => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export function GameProvider({ children }: any) {
  return (
    <GameStateContext.Provider value={useGameState()}>
      {children}
    </GameStateContext.Provider>
  );
}
