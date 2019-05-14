import React from "react";

function Players(props) {
  const { players = [] } = props;

  if (!players || !players.length > 0) {
    return <h3>No Players Available</h3>;
  }

  return (
    <>
      <h3>Players List</h3>

      {players.map(p => (
        // each player should have an id and name
        <div data-testid="player-name" key={p.id}>
          {p.name}
        </div>
      ))}
    </>
  );
}

export default Players;
