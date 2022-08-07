import React from "react";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
