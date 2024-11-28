import React from "react";

//components
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
