// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createContext, useContext, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Game from './components/pages/Game/Game';
import Home from './components/pages/Home/Home';
import JoinGame from './components/pages/JoinGame/JoinGame';
import NewGame from './components/pages/NewGame/NewGame';
import { GameProvider } from './context/Providers/GameProvider';
import { GameState } from './models/game.model';

export function App() {
  const location = useLocation();

  return (
    <GameProvider>
      <div className="bg-primary-100 my-auto mx-auto min-h-screen flex justify-center items-center">
        {/* back button if it is  in subroutes*/}

        <div
          className={`absolute top-0 left-0 p-4${
            location.pathname === '/' ? ' hidden' : ''
          }`}
        >
          <button
            className="bg-secondary-600 hover:bg-hover-500 text-white font-medium py-2 px-4 rounded-lg"
            onClick={() => {
              window.history.back();
            }}
          >
            {/* back icon */}
            <FaArrowLeft />
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-game" element={<NewGame />} />
          <Route path="join-game" element={<JoinGame />} />
          <Route path="game/" element={<Game />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Outlet />
      </div>
    </GameProvider>
  );
}

export default App;
