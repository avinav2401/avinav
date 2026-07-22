import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/Preloader';
import ConstellationBackground from './components/ConstellationBackground';
import Navbar from './components/Navbar';
import AboutModal from './components/AboutModal';
import { useSoundEffects } from './hooks/useSoundEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Initialize sound effects
  useSoundEffects();

  return (
    <div className="relative min-h-screen">
      <ConstellationBackground />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Router>
          <Navbar onAboutClick={() => setIsAboutModalOpen(true)} />
          <Routes>
            <Route path="/" element={<HomePage onOpenAboutModal={() => setIsAboutModalOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
        </Router>
      )}
    </div>
  );
}

export default App;
