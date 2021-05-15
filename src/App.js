import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import OurProcess from './components/OurProcess';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact={true}>
        <Homepage />
      </Route>
      <Route path="/about-us" exact={true}>
        <AboutUs />
      </Route>
      <Route path="/gallery" exact={true}>
        <Gallery />
      </Route>
      <Route path="/process" exact={true}>
        <OurProcess />
      </Route>
      <Route path="/contact" exact={true}>
        <Contact />
      </Route>
    </BrowserRouter>
  );
}

export default App;
