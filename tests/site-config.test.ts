import { describe, expect, it } from "vitest";

import { siteConfig } from "../lib/site-config";

describe("siteConfig", () => {
  it("exposes the SGA identity", () => {
    expect(siteConfig.name).toBe("SGA - Santos Games Arena");
    expect(siteConfig.url).toBe("https://santos-games.com");
    expect(siteConfig.description.length).toBeGreaterThan(40);
  });
});
