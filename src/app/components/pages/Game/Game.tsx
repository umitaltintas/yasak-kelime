import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../../../context/Providers/GameProvider';
import { Board } from '../../Board/Board';
import { Score } from '../../Score/Score';
import { Timer } from '../../Timer/Timer';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  const { gameState, updateGameState } = useContext(GameStateContext);
  const [activeTeamIndex, setActiveTeamIndex] = useState(
    gameState.activeTeamIndex
  );
  useEffect(() => {
    setActiveTeamIndex(gameState.activeTeamIndex);
  }, [gameState.activeTeamIndex]);

  // timer
  const [time, setTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time <= 0) {
        setTime(5);
        swapTeam();
      } else setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    // team name and score on top of the page>
    <div
      className="flex flex-col
    "
    >
      {/* timer on top*/}
      <Timer time={time} />
      {/* score board */}
      <div className="flex flex-row justify-between">
        <Score
          name={gameState.teams[0].name}
          score={gameState.teams[0].score}
          isActive={activeTeamIndex === 0}
        />
        <Score
          name={gameState.teams[1].name}
          score={gameState.teams[1].score}
          isActive={activeTeamIndex === 1}
        />
      </div>
      <Board></Board>
    </div>
  );

  function swapTeam() {
    updateGameState((gameState: any) => ({
      ...gameState,
      activeTeamIndex: (activeTeamIndex + 1) % 2,
      tabooRight: 3,
      passRight: 3,
    }));
  }
}

export default Game;
