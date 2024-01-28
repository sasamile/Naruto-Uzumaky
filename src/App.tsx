import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CardAmigos from "./components/CardAmigos";
import Logros from "./components/Logros";

function App() {
  const [hambur, setHambur] = useState(false)
  return (
    <>
      <Navbar hambur={hambur} setHambur={setHambur} />
      <main className={`max-md:${hambur && "hidden"} md:${hambur && "visible"}`}>
        <Hero />
        <CardAmigos/>
        <Logros />
      </main>
    </>
  );
}

export default App;
