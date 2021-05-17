import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';
import License from './components/License';
import NavBar from './components/NavBar';
import OurProcess from './components/OurProcess';
import References from './components/References';

function App() {
  return (
    <BrowserRouter classname="main">
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
      <Route path="/license" exact={true}>
        <License />
      </Route>
      <Route path="/references" exact={true}>
        <References />
      </Route>
      <Route path="/contact" exact={true}>
        <Contact />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
