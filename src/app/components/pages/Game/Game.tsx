import { useEffect, useState } from 'react';
import { Score } from '../../Score/Score';
import { Timer } from '../../Timer/Timer';
import { WordLine } from '../../WordLine/WordLine';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
  // get gameId from url
  const [score, setScore] = useState(0);
  const [tabooRight, setTabooRight] = useState(3);
  const [passRight, setPassRight] = useState(3);
  const [isFirstTeam, setIsFirstTeam] = useState(true);
  // timer
  const [time, setTime] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        return;
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  function handleCorrect() {
    setScore(score + 1);
  }
  function handleTaboo() {
    if (tabooRight === 0) {
      return;
    }
    setTabooRight(tabooRight - 1);
    setScore(score - 1);
  }

  function handlePass() {
    if (passRight === 0) {
      return;
    }
    setPassRight(passRight - 1);
  }

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
        <Score name="Team 1" score={score} isActive={isFirstTeam} />
        <Score name="Team 2" score={score} isActive={!isFirstTeam} />
      </div>
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
    </div>
  );
}

export default Game;
