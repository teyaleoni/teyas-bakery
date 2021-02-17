import React from "react";
import "./App.css";
import Accordian from "./Accordian.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <div className="col-1">
        <Header />
      </div>
      <div className="col-2">
        <Accordian />
        <Footer />
      </div>
    </div>
  );
}
export default App;
