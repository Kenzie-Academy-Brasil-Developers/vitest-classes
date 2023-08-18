import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
   test("should render correctly", () => {
      render(<App />);
      const title = screen.getByText("Meu primeiro app com Vitest");

      expect(title).toBeTruthy();
   });
});
