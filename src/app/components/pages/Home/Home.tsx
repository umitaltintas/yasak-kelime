import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div
      className="flex flex-col text-3xl  rounded-lg bg-secondary-100 p-4 h-80
    "
    >
      {/* fancy header */}
      <h1
        className="text-4xl font-bold whitespace-nowrap mb-16 text-dark
       "
      >
        Welcome to Taboo!
      </h1>
      <Link
        to="/new-game"
        className="self-center bg-text_background-100 text-black font-bold py-2 px-4 rounded mb-4"
      >
        Create game
      </Link>
      <Link
        to="/join-game"
        className="self-center bg-text_background-100  text-black  font-bold py-2 px-4 rounded"
      >
        Join game
      </Link>
    </div>
  );
}

export default Home;
