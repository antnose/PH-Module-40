import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("./player.json");
  return res.json();
};

function App() {
  const [coin, setCoin] = useState(6000000);
  const players = fetchPlayers();

  const [toggle, setToggle] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleSelectPlayer = (playerData) => {
    // e.preventDefault();
    console.log(playerData);
    coin > playerData.price
      ? setCoin(coin - playerData.price)
      : alert("Please add balance");

    setSelectedPlayer([...selectedPlayer, playerData]);
  };

  const handleToggle = (a) => {
    setToggle(a);
  };

  const removePlayer = (player) => {
    const newSelPl = selectedPlayer.filter((p) => p.id !== player.id);
    setSelectedPlayer(newSelPl);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar coin={coin} />

      <div className="border mx-auto flex justify-between px-6 py-3 items-center">
        <div className="">
          <h1 className="font-bold text-xl">
            {toggle ? "Available Players" : "Selected Players"}
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setToggle(true)}
            className={toggle ? "bg-amber-300 btn" : "btn"}
          >
            Available Players
          </button>
          <button
            onClick={() => handleToggle(false)}
            className={!toggle ? "bg-amber-300 btn" : "btn"}
          >
            Selected Players <span>{selectedPlayer.length}</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <AvailablePlayers
            players={players}
            handleSelectPlayer={handleSelectPlayer}
          />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <SelectedPlayers
            selectedPlayer={selectedPlayer}
            removePlayer={removePlayer}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
