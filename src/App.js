// /* global React ReactDOM */ for fixing React import for eslint to not yell error
import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Reberto",
      animal: "Fish",
      breed: "Discus",
    }),
    React.createElement(Pet, {
      name: "Reberto",
      animal: "Fish",
      breed: "Discus",
    }),
    React.createElement(Pet, {
      name: "Reberto",
      animal: "Fish",
      breed: "Discus",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
