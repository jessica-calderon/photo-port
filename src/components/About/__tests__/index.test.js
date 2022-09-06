import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";
// jest afterEach global function
afterEach(cleanup);
describe("About component", () => {
  // First Test
  // verify that the component is rendering
  it("renders", () => {
    render(<About />);
  });
  // Second test
  it("matches snapshot DOM node structure", () => {
    // asFragment returns a snapshot of the About component
    const { asFragment } = render(<About />);
    // test & compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});
