import React from 'react';
import { RecoilRoot } from 'recoil';
import Accordion from './Accordion';
import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="col-1">
          <Header />
        </div>
        <div className="col-2">
          <Accordion />
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
}
export default App;
