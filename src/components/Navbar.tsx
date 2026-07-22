import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { SiItchdotio, SiArtstation } from 'react-icons/si';
import { Link } from 'react-router-dom';

interface NavbarProps {
    onAboutClick: () => void;
}

const Navbar = ({ onAboutClick }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blender Studio', href: '#blender-showcase' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4 md:py-6' : 'bg-transparent py-6 md:py-8'}`}>
            <div className="container flex justify-between items-center">
                <a href="#home" className="text-2xl md:text-3xl font-bold text-indigo-500">Portfolio.</a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navLinks.map((link) => (
                        link.name === 'About' ? (
                            <button
                                key={link.name}
                                onClick={onAboutClick}
                                className="text-sm lg:text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300 bg-transparent border-none cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ) : link.name === 'Contact' ? (
                            <Link
                                key={link.name}
                                to="/contact"
                                className="text-sm lg:text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm lg:text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <div className="w-[1px] h-7 bg-white/10 mx-2 lg:mx-5"></div>
                    <div className="flex gap-4 lg:gap-5">
                        <a href="https://github.com/avinav2401" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><Github size={20} className="lg:w-6 lg:h-6" /></a>
                        <a href="https://www.linkedin.com/in/avinav-priyadarshi-45705a2b0/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><Linkedin size={20} className="lg:w-6 lg:h-6" /></a>
                        <a href="https://avinav-pri.itch.io/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><SiItchdotio size={20} className="lg:w-6 lg:h-6" /></a>
                        <a href="https://www.artstation.com/avianvpri5" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><SiArtstation size={20} className="lg:w-6 lg:h-6" /></a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none hover:text-indigo-400 transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col items-center gap-6 animate-fade-up shadow-2xl">
                    {navLinks.map((link) => (
                        link.name === 'About' ? (
                            <button
                                key={link.name}
                                onClick={() => {
                                    setIsOpen(false);
                                    onAboutClick();
                                }}
                                className="text-lg font-medium text-zinc-100 hover:text-indigo-500 transition-all duration-300 bg-transparent border-none cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ) : link.name === 'Contact' ? (
                            <Link
                                key={link.name}
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-zinc-100 hover:text-indigo-500 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-zinc-100 hover:text-indigo-500 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <div className="flex gap-6 mt-2 pt-6 border-t border-white/10 w-full justify-center">
                        <a href="https://github.com/avinav2401" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-500 transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/avinav-priyadarshi-45705a2b0/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-500 transition-colors"><Linkedin size={24} /></a>
                        <a href="https://avinav-pri.itch.io/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-500 transition-colors"><SiItchdotio size={24} /></a>
                        <a href="https://www.artstation.com/avianvpri5" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-500 transition-colors"><SiArtstation size={24} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
