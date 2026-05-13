import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
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
          <Experience />
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
