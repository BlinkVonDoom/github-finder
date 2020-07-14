import React from "react";
import { render } from "@testing-library/react";
import App from "../../App";

test("renders Hello text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Github/i);
  expect(textElement).toBeInTheDocument();
});
