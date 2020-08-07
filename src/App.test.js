import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "./pages";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
