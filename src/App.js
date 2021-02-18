import React from "react";
import "./App.css";
import Accordion from "./Accordion.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

function App() {
  return (
    <div className="App">
      <div className="col-1">
        <Header />
      </div>
      <div className="col-2">
        <Accordion />
        <Footer />
      </div>
    </div>
  );
}
export default App;
