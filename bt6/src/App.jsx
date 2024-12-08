import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Phone from "./components/Phone";
import ListPhone from "./components/ListPhone";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainMenu />
      <Banner />
      <Phone>
        <ListPhone />
      </Phone>
      <Footer />
    </>
  );
}

export default App;
