import { LabelInput } from '../common/LabelInput';

/* eslint-disable-next-line */
export interface NewGameProps {}

export function NewGame(props: NewGameProps) {
  return (
    // a taboo game login screen will be here
    // has user name, game user count, game duration
    // user count option 4 6 8
    <div className="flex flex-col text-3xl gap-y-4 rounded-lg bg-secondary-500 p-4">
      <h1 className="self-center text-4xl text-primary-400 font-bold">
        New Game
      </h1>
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
      <LabelInput>
        <label
          htmlFor="userCount"
          className=" block text-gray-700 font-semibold mb-2"
        >
          User Count
        </label>
        <select
          name="userCount"
          id="userCount"
          className=" border border-primary-400 p-2 w-full rounded"
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </LabelInput>
      <LabelInput>
        <label
          htmlFor="gameDuration"
          className=" block text-gray-700 font-semibold mb-2"
        >
          Game Duration
        </label>
        <select
          name="gameDuration"
          id="gameDuration"
          className=" border border-primary-400 p-2  w-full rounded"
        >
          <option value="1">1 </option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </LabelInput>
      {/* a fancy start button */}
      <button className="self-center bg-primary-400 text-white font-semibold py-2 px-4 rounded hover:bg-hover-500 ">
        Start
      </button>
    </div>
  );
}

export default NewGame;
