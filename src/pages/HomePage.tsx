import { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import BlenderShowcase from '../components/BlenderShowcase';
import Experience from '../components/Experience';
import ShootingStars from '../components/ShootingStars';
import ScrollProgress from '../components/ScrollProgress';
import StealthBrowserDetail from '../components/StealthBrowserDetail';

interface HomePageProps {
    onOpenAboutModal: () => void;
}

const HomePage = ({ onOpenAboutModal }: HomePageProps) => {
    const [showStealthDetail, setShowStealthDetail] = useState(false);

    return (
        <>
            {showStealthDetail ? (
                <StealthBrowserDetail onBack={() => setShowStealthDetail(false)} />
            ) : (
                <>
                    <ShootingStars />
                    <ScrollProgress />
                    <div className="relative z-10 animate-fade-up">
                        <Hero />
                        <About onOpenModal={onOpenAboutModal} />
                        <div className="space-y-8">
                            <Experience />
                            <Projects onViewStealthBrowser={() => setShowStealthDetail(true)} />
                            <BlenderShowcase />
                        </div>
                        <footer className="py-8 text-center text-zinc-500 text-sm glass backdrop-blur-md border-t border-white/10">
                            <p>
                                © {new Date().getFullYear()} <span className="text-zinc-200 font-medium hover:text-indigo-400 transition-colors cursor-pointer">Avinav Priyadarshi</span>. All rights reserved.
                            </p>
                        </footer>
                    </div>
                </>
            )}
        </>
    );
};

export default HomePage;
