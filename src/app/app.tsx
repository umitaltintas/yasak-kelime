// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaArrowLeft } from 'react-icons/fa';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import JoinGame from './components/JoinGame/JoinGame';
import NewGame from './components/NewGame/NewGame';
export function App() {
  return (
    <div
      className="bg-gradient-to-tr  
    from-primary-600 to-primary-400 my-auto mx-auto min-h-screen flex justify-center items-center"
    >
      {/* back button if it is not in home*/}
      <div className="absolute top-0 left-0 p-4">
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
        <Route path="*" element={<JoinGame />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
