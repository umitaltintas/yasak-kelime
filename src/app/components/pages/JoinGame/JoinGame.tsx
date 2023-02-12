import { LabelInput } from '../../common/LabelInput';

/* eslint-disable-next-line */
export interface JoinGameProps {}

export function JoinGame(props: JoinGameProps) {
  return (
    <div className="flex flex-col text-3xl gap-y-4 rounded-lg bg-secondary-100 p-4">
      <h1 className="self-center text-4xl text-primary-400 font-bold">
        Join Game
      </h1>
      <LabelInput>
        <label
          htmlFor="gameCode"
          className=" block text-gray-700 font-semibold mb-2"
        >
          Game Code
        </label>
        <input
          type="text"
          name="gameCode"
          className="  borderp-2 w-full rounded border-primary-400"
          placeholder="Enter game code"
        />
      </LabelInput>
      <LabelInput>
        <label
          htmlFor="userName"
          className=" block text-gray-700 font-semibold mb-2"
        >
          User Name
        </label>
        <input
          type="text"
          name="userName"
          className="  borderp-2 w-full rounded border-primary-400"
          placeholder="Enter your name"
        />
      </LabelInput>
      <button
        type="button"
        className="self-center bg-primary-400 text-white font-bold py-2 px-4 rounded"
      >
        Join Game
      </button>
    </div>
  );
}

export default JoinGame;
