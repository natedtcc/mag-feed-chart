
import Header from "./components/Header/Header"
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000"
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);

});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
})

describe("Header component test", () => {
  it("Renders the page header", () => {
    act(() => {
      ReactDOM.render(<Header />, rootContainer);
    });
    const p = rootContainer.querySelector("p");
    expect(p.textContent).to.equal(
      "PSO Version 1&2 + GC Mag Feed Guide");
  });
});
