import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};
// if you are in development and isolation, call mount immediatly

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#market_root");
  if (devRoot) {
    mount(devRoot);
  }
}
//  we are running through container and export the mount function
// console.log("hellllo")
export { mount };
