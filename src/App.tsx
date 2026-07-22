import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/Preloader';
import ConstellationBackground from './components/ConstellationBackground';
import { useSoundEffects } from './hooks/useSoundEffects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize sound effects
  useSoundEffects();

  return (
    <div className="relative min-h-screen">
      <ConstellationBackground />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
