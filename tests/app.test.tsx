import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../src/App";

describe("App", () => {
  it("renders the SGA championship cards with detail links", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /campeões/i,
    );

    expect(
      screen.getByRole("button", {
        name: /inscrições encerradas/i,
      }),
    ).toBeDisabled();

    expect(
      screen.getByRole("link", {
        name: /ver detalhes do vct ribeirão - série a/i,
      }),
    ).toHaveAttribute(
      "href",
      "https://santos-games.com/vct-ribeirao/serie-a",
    );

    expect(screen.getAllByRole("link", { name: /ver detalhes/i })).toHaveLength(
      3,
    );
    expect(
      screen.queryByRole("link", { name: /abrir campeonatos/i }),
    ).not.toBeInTheDocument();
  });
});
