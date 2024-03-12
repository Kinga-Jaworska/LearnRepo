import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const mockSomething = () => {
  const myMock = "something";

  return {
    [Symbol.dispose]: () => {
      // dispose of mock here
    },
    value: myMock,
  };
};

test("New feature - using", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  // it("", ()=>{
  //   using mock = mockSomething();
  //   console.log(mock.value);
  // });

  // It disposing automatically each time :tada:
});
