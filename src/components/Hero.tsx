import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { useState, useRef } from 'react';

const Hero = () => {
    const [transform, setTransform] = useState('');
    const titleRef = useRef<HTMLHeadingElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
        if (!titleRef.current || window.innerWidth < 768) return;

        const rect = titleRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate distance from center (-1 to 1)
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        // Create 3D transform based on mouse position
        const rotateY = deltaX * 15; // Rotate on Y axis
        const rotateX = -deltaY * 15; // Rotate on X axis
        const translateZ = Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5 ? -20 : 0;

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
        );
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

            {/* Background Moving Text - Layer 1 (Top Left) */}
            <div className="absolute top-[10%] -left-10 opacity-10 select-none pointer-events-none whitespace-nowrap">
                <div className="animate-marquee hover:pause flex">
                    <span className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-['Rajdhani'] font-bold tracking-[10px] sm:tracking-[15px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Game Developer   Game Developer   Game Developer
                    </span>
                    <span className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-['Rajdhani'] font-bold tracking-[10px] sm:tracking-[15px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Game Developer   Game Developer   Game Developer
                    </span>
                </div>
            </div>

            {/* Background Moving Text - Layer 2 (Bottom Right) */}
            <div className="absolute bottom-[10%] -left-10 opacity-10 select-none pointer-events-none whitespace-nowrap">
                <div className="animate-marqueeReverse hover:pause flex">
                    <span className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-['Rajdhani'] font-bold tracking-[10px] sm:tracking-[15px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Software Developer   Software Developer   Software Developer
                    </span>
                    <span className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-['Rajdhani'] font-bold tracking-[10px] sm:tracking-[15px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Software Developer   Software Developer   Software Developer
                    </span>
                </div>
            </div>


            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <Reveal width="100%">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">

                        <p className="text-zinc-400 font-medium mb-4 tracking-[0.2em] uppercase">
                            Hey There I'm
                        </p>

                        <h1
                            ref={titleRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-['Orbitron'] font-bold leading-[0.8] mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 animate-gradient bg-[length:200%_auto]"
                            style={{
                                transform,
                                transition: 'transform 0.1s ease-out',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            AVINAV
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
                            Currently Studying Computer Science and Engineering
                        </p>

                        <div className="flex gap-6 justify-center items-center">
                            <a href="#projects" className="btn btn-primary group">
                                View Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn glass">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg className="w-8 h-8 text-cyan-400 opacity-60 -mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 3px rgba(34, 211, 238, 1);
                    filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.8)) drop-shadow(0 0 6px rgba(34, 211, 238, 1));
                }
            `}</style>
        </section>
    );
};

export default Hero;
