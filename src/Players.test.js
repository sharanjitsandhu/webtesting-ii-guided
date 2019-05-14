import React from "react";
import { render } from "react-testing-library";

import Players from "./Players";

describe("<Players />", () => {
  it('should render "no players available" if not players provided', () => {
    const { getByText } = render(<Players />);

    getByText(/no players available/i);
  });

  it("should render the provided list of players", () => {
    const players = [
      { id: 1, name: "Sam" },
      { id: 2, name: "Bilbo" },
      { id: 3, name: "Frodo" },
      { id: 4, name: "Aragorn" }
    ];

    // this is a good place to use the data-testid property
    const { getAllByTestId } = render(<Players players={players} />);

    const playerNames = getAllByTestId("player-name").map(n => n.textContent);
    const names = players.map(p => p.name);

    expect(playerNames).toHaveLength(players.length);
    expect(playerNames).toEqual(names);
  });
});
