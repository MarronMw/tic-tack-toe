import { useEffect } from "react";

import "./App.css";
import Game from "./screens/Game";

function App() {
  useEffect(() => {
    document.title = "Tick Tack Toe v0.1";
  }, []); // The empty array makes it run only once when the component mounts

  return <Game />;
}

export default App;
