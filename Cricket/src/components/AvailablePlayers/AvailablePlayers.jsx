import { use } from "react";
import Card from "../Card/Card";

const AvailablePlayers = ({ players, handleSelectPlayer }) => {
  const playersData = use(players);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center mx-auto gap-y-8 mt-7">
      {playersData.map((playerData) => (
        <Card
          key={playerData.id}
          playerData={playerData}
          handleSelectPlayer={handleSelectPlayer}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
