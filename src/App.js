import { useState } from "react";
import "./App.css";
import StopWatch from "./components/StopWatch/StopWatch";
import Timer from "./components/Timer/Timer";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
    <div className="btndiv" >
    <button className="btn" onClick={() => setState(true)}>StopWatch</button>
    <button className="btn" onClick={() => setState(false)}>Timer</button>
    </div>
      <div>{state ? <StopWatch /> : <Timer />}</div>
    </div>
  );
}

export default App;
