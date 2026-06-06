import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import LeanAI from './components/LeanAI';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-deepBlack min-h-screen font-inter text-titaniumWhite overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Clients />
          <Experience />
          <Portfolio />
          <Services />
          <LeanAI />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
