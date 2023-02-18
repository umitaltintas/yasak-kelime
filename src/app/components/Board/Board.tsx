import { useContext, useEffect, useState } from 'react';
import { Team } from 'src/app/models/team.model';
import { GameStateContext } from '../../context/Providers/GameProvider';
import { WordLine } from '../WordLine/WordLine';

export function Board() {
  const { gameState, updateGameState } = useContext(GameStateContext);
  const [tabooRight, setTabooRight] = useState(gameState.tabooRight);
  const [passRight, setPassRight] = useState(gameState.passRight);
  const [activeTeamIndex, setActiveTeamIndex] = useState(
    gameState.activeTeamIndex
  );
  useEffect(() => {
    setActiveTeamIndex(gameState.activeTeamIndex);
  }, [gameState.activeTeamIndex]);

  useEffect(() => {
    setTabooRight(gameState.tabooRight);
  }, [gameState.tabooRight]);
  useEffect(() => {
    setPassRight(gameState.passRight);
  }, [gameState.passRight]);

  function handleCorrect() {
    addScore(1);
  }
  function addScore(add: number) {
    updateGameState({
      teams: gameState.teams.map((team: Team, index: number) => {
        if (index === activeTeamIndex) {
          return {
            ...team,
            score: team.score + add,
          };
        }
        return team;
      }),
    });
  }

  function handleTaboo() {
    if (tabooRight > 0) {
      updateGameState({
        tabooRight: tabooRight - 1,
      });
      addScore(-1);
    }
  }

  function handlePass() {
    if (passRight > 0) {
      updateGameState({
        passRight: passRight - 1,
      });
    }
  }

  
  return (
    <div className="flex flex-col text-3xl  rounded-lg bg-secondary-500 p-4  w-96 mx-0">
      {/* header serction word */}
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold whitespace-nowrap mb-16  text-primary-400">
          word
        </h1>
      </div>
      {/*  taboo words*/}
      <div className="flex flex-col justify-center">
        <WordLine word="word1" />
        <WordLine word="word2" />
        <WordLine word="word3" />
        <WordLine word="word4" />
      </div>
      {/* footer */}
      <div className="flex flex-row justify-around ">
        <button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => {
            handleTaboo();
          }}
        >
          <span className="text-3xl mr-2">X</span>
          <span className="text-xl">{tabooRight}</span>
        </button>
        <button
          className="bg-yellow-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => {
            handlePass();
          }}
        >
          {/* pass */}
          <span className="text-3xl mr-2">⇄</span>
          <span className="text-xl">{passRight}</span>
        </button>
        <button
          className="bg-green-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => {
            handleCorrect();
          }}
        >
          <span className="text-3xl">✓</span>
        </button>
      </div>
    </div>
  );
}
