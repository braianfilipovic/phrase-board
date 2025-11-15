import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page header", () => {
  render(<App />);
  const title = screen.getByText(/phrase board/i);
  expect(title).toBeInTheDocument();
});
