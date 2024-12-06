import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Preloader,
  ScrollToSection,
  ScrollToTop,
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  Projects,
  Resume,
  StarsCanvas,
  PhotoSections,
  PhotoDisplaySection,
} from "./components";
import ParticleBackground from "./components/ParticleBackground";
import { useState, useEffect } from "react";

const MainPage = () => {
  const location = useLocation();

  const getSectionIdFromHash = () => {
    if (location.hash) {
      return location.hash.substring(1); // Remove the '#' from the hash
    }
    return null;
  };

  return (
    <>
      <ScrollToSection sectionId={getSectionIdFromHash()} />
      <div className="inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-100 z-0">
        <Hero />
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

const App = () => {
  const [load, updateLoad] = useState(true); // RESET THIS TO TRUE WHEN DONE TESTING!!!

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ParticleBackground />

        {load ? (
          <Preloader load={load} />
        ) : (
          <>
            <Navbar />
            <ScrollToTop />
            <Routes>
              {/* Main page */}
              <Route path="/" element={<MainPage />} />

              {/* Resume page */}
              <Route
                path="/resume"
                element={
                  <div className="min-h-screen relative z-10">
                    <Resume />
                  </div>
                }
              />

              {/* Photography page */}
              <Route
                path="/photography"
                element={
                  <div className="min-h-screen relative z-10">
                    <PhotoSections />
                  </div>
                }
              />

              {/* Individual photo section */}
              <Route
                path="/photography/:section"
                element={
                  <div className="min-h-screen relative z-10">
                    <PhotoDisplaySection />
                  </div>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
