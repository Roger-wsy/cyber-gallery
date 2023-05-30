import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Banner />
        <Gallery />
        <Routes>
          <Route exact path="/" element={Banner} />
          <Route exact path="/gallery" element={Gallery} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
