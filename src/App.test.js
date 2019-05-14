import React from "react";
import { render, fireEvent } from "react-testing-library";

// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import "react-testing-library/cleanup-after-each";

import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("should display hello world", () => {
    const { getByText } = render(<App />);

    getByText(/hello world!/i);
  });

  it("should great the team", () => {
    const { getByText } = render(<App />);

    const button = getByText(/greet/i);
    fireEvent.click(button);

    getByText(/hello web 18/i);
  });
});
