import React from "react";
import "./App.css";
import Home from "./components/Navbar";
import Music from "./components/Music";
import Ipad from "./components/Ipad";
import Mac from "./components/Mac";
import Songs from "./components/Songs";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/music" component={Music} />
      <Route exact path="/ipad" component={Ipad} />
      <Route exact path="/mac" component={Mac} />
      <Route exact path="/music/:id" component={Songs} />
    </div>
  );
}

export default App;
