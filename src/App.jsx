import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Skills, Works, StarsCanvas, Projects } from "./components";
import ParticleBackground from "./components/ParticleBackground";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ParticleBackground />
        {/* The original background image */}
        <div className="inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-100 z-0">
        {/* <div> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        {/* <Tech /> */}
        <Works />
        <Projects />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


