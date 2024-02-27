import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import DuplicateCard from "./Components/DuplicateCard/DuplicateCard";
import SignUp from "./Components/SignUp/SignUp";
import "./App.css";
const App = () => {
  const arr = ["", "", ""];
  return (
    <div className="ap">
      <Navbar />
      <Hero />
      <div className="iterate-card">
        {arr.map(() => (
          <DuplicateCard />
        ))}
      </div>

      <SignUp />
      <Footer />
    </div>
  );
};

export default App;
