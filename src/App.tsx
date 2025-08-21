import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ModelsSection } from './components/ModelsSection';
import { EquipmentSection } from './components/EquipmentSection';
import { TestRideSection } from './components/TestRideSection';
import { DealerLocatorSection } from './components/DealerLocatorSection';
import { MotoGPSection } from './components/MotoGPSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ModelsSection />
        <EquipmentSection />
        <TestRideSection />
        <DealerLocatorSection />
        <MotoGPSection />
      </main>
      <Footer />
    </div>
  );
}