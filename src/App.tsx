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
import TorreNazas from './components/TorreNazas';
import WebAEC from './components/WebAEC';
import VertexaDemo from './components/demos/VertexaDemo';
import NovaProject from './components/demos/NovaProject';
import StratumLabs from './components/demos/StratumLabs';
import NexoraEngineering from './components/demos/NexoraEngineering';
import AzuraDevelopments from './components/demos/AzuraDevelopments';
import AiProjectReporter from './components/AiProjectReporter';

function App() {
  const isSimulationRoute = window.location.pathname === '/lean-build-simulation';
  const isTorreNazasRoute = window.location.pathname === '/servicios/ia-construccion/torre-nazas';
  const isWebAecRoute = window.location.pathname === '/web-aec';
  const isVertexaRoute = window.location.pathname === '/web-aec/demos/vertexa';
  const isNovaRoute = window.location.pathname === '/web-aec/demos/vertexa/proyectos/nova-manufacturing-plant';
  const isStratumRoute = window.location.pathname === '/web-aec/demos/stratum-labs';
  const isNexoraRoute = window.location.pathname === '/web-aec/demos/nexora-engineering';
  const isAzuraRoute = window.location.pathname === '/web-aec/demos/azura-developments';
  const isAiReporterRoute = window.location.pathname === '/ai-project-reporter';

  const isDemoRoute = isVertexaRoute || isNovaRoute || isStratumRoute || isNexoraRoute || isAzuraRoute;

  return (
    <LanguageProvider>
      <div className="bg-deepBlack min-h-screen font-inter text-titaniumWhite overflow-x-hidden">
        {isDemoRoute ? null : <Navbar />}
        <main>
          {isAzuraRoute ? (
            <AzuraDevelopments />
          ) : isNexoraRoute ? (
            <NexoraEngineering />
          ) : isStratumRoute ? (
            <StratumLabs />
          ) : isNovaRoute ? (
            <NovaProject />
          ) : isVertexaRoute ? (
            <VertexaDemo />
          ) : isSimulationRoute ? (
            <LeanBuildSimulation />
          ) : isTorreNazasRoute ? (
            <TorreNazas />
          ) : isAiReporterRoute ? (
            <AiProjectReporter />
          ) : isWebAecRoute ? (
            <WebAEC />
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
        {isDemoRoute ? null : <Footer />}
      </div>
    </LanguageProvider>
  );
}

export default App;
