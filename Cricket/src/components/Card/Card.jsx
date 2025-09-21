const Card = ({ playerData }) => {
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={playerData.image}
          alt="Shoes"
          className="object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{playerData.name}</h2>
        <div className="flex w-full py-3 justify-between">
          <div>🏳️ {playerData.country}</div>
          <div className="border p-1 rounded-xl">{playerData.role}</div>
        </div>
        <div className="flex justify-between pb-2">
          <div>Rating</div>
          <div>{playerData.rating}</div>
        </div>
        <div className="flex justify-between pb-2">
          <div>Bating Style</div>
          <div>{playerData.batting_style}</div>
        </div>
        <div className="card-actions justify-between">
          <div className="text-xl font-bold">Price</div>
          <button className="font-bold btn">Select Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
