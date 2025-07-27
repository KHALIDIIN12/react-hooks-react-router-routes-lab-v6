import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Trolls"],
  },
  {
    name: "Tom Cruise",
    movies: ["Mission: Impossible"],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [`/actors`],
  initialIndex: 0,
});

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(global.console, "error");
  render(<RouterProvider router={router} />);
  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders 'Actors Page' inside of the <h1 />", () => {
  render(<RouterProvider router={router} />);
  const h1 = screen.queryByText(/Actors Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each actor's name", async () => {
  render(<RouterProvider router={router} />);
  for (const actor of actors) {
    expect(await screen.findByText(actor.name)).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", async () => {
  render(<RouterProvider router={router} />);
  for (const actor of actors) {
    for (const movie of actor.movies) {
      const items = await screen.findAllByText(movie);
      for (const li of items) {
        expect(li).toBeInTheDocument();
        expect(li.tagName).toBe("LI");
      }
    }
  }
});

test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
  });
  render(<RouterProvider router={router} />);
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});