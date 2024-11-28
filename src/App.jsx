import React from "react";

//components
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import AgencyService from "./components/AgencyServices/AgencyService";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <AgencyService />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
