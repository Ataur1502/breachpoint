import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import EventDetails from "./sections/EventDetails";
import Timeline from "./sections/Timeline";
import Register from "./sections/register";
import Rewards from "./sections/Rewards";
import Rules from "./sections/Rules";
import Sponsors from "./sections/sponsors";
import Faq from "./sections/faq";
import Team from "./sections/Team";
import Footer from "./sections/Footer";

import useScrollReveal from "./hooks/useScrollReveal";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize scroll animations
  useScrollReveal();

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <EventDetails />
            <Timeline />
            <Register />
            <Rewards />
            <Rules />
            <Sponsors />
            <Faq />
            <Team />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
