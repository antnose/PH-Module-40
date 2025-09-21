import React from "react";
import Card from "../Card/Card";

const SelectedPlayers = ({ selectedPlayer, removePlayer }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center mx-auto gap-y-8 mt-7">
      {selectedPlayer.map((playerData) => (
        // console.log(slPl)
        <Card
          key={playerData.id}
          playerData={playerData}
          selectTrue={true}
          removePlayer={removePlayer}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;
