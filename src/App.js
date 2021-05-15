import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/about-us">

      </Route>
      <Route path="/gallery">

      </Route>
      <Route path="/process">

      </Route>
      <Route path="/contact">

      </Route>
    </BrowserRouter>
  );
}

export default App;
