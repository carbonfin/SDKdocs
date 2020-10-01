import React from "react";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <RedocStandalone
      specUrl="https://raw.githubusercontent.com/carbonfin/SDKdocs/master/dist.yaml"
      options={{
        noAutoAuth: true,
      }}
    />
  );
}

export default App;
