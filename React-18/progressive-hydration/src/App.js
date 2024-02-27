import React, { Suspense, useState } from "react";
import Child from "./child";

const App = ({ ctx }) => {
  console.log("Client App");
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div id="init">
      <h1>Hello React - {counter}</h1>
      <button onClick={updateCounter}>Update counter</button>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Child ctx={ctx} />
      </Suspense>
    </div>
  );
};

export default App;
