import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ManagerUser from "./components/ManagerUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ManagerUser></ManagerUser>
    </>
  );
}

export default App;
