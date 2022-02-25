import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
