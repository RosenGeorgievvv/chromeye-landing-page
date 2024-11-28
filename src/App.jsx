import React from "react";

//components
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      {/* <Footer /> */}
    </>
  );
}

export default App;
