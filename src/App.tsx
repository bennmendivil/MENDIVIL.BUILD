import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import LeanConstruction from './components/LeanConstruction';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeanBuildSimulation from './components/LeanBuildSimulation';

function App() {
  const isSimulationRoute = window.location.pathname === '/lean-build-simulation';
  return (
    <LanguageProvider>
      <div className="bg-deepBlack min-h-screen font-inter text-titaniumWhite overflow-x-hidden">
        <Navbar />
        <main>
          {isSimulationRoute ? (
            <LeanBuildSimulation />
          ) : (
            <>
              <Hero />
              <Stats />
              <Clients />
              <Experience />
              <Portfolio />
              <Services />
              <LeanConstruction />
              <Education />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
