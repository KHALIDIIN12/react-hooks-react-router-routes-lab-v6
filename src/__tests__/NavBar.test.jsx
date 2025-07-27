import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("renders the <NavBar /> component", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  // Now you can test for nav links/text inside NavBar
  expect(screen.getByText("Home")).toBeInTheDocument();
});