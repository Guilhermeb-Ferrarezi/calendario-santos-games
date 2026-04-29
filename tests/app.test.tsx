import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../src/App";

describe("App", () => {
  it("renders the SGA championship cards with detail links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /campeonatos sga/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /ver detalhes do vct ribeirão - free elo/i,
      }),
    ).toHaveAttribute(
      "href",
      "https://santos-games.com/campeonatos/vct-ribeirao-free-elo",
    );

    expect(screen.getAllByRole("link", { name: /ver detalhes/i })).toHaveLength(
      5,
    );
    expect(
      screen.queryByRole("link", { name: /abrir campeonatos/i }),
    ).not.toBeInTheDocument();
  });
});
