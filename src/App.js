import React from "react";
import { render } from "react-dom";
import SearchParms from "./SearchParms";

const App = () => {
  return (
    <div>
      <h1>AdoptMe</h1>
      <SearchParms />
    </div>
  );
};

render(<App />, document.getElementById("root"));
