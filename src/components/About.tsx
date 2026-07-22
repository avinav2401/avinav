import { Reveal } from './Reveal';

interface AboutProps {
    onOpenModal: () => void;
}

const About = ({ onOpenModal }: AboutProps) => {

    return (
        <section id="about" className="section">
            <div className="container">
                <Reveal width="100%">
                    <div className="glass p-8 md:p-12 lg:p-16 rounded-[2rem] flex flex-col gap-8 md:gap-10">
                        <div>
                            <h2 className="title text-gradient-silver-blue text-3xl md:text-4xl">About Me</h2>
                            <p className="text-lg md:text-xl text-zinc-400 max-w-[800px] leading-relaxed">
                                I'm a passionate developer with a keen eye for design and a drive for creating seamless digital experiences.
                                With expertise in modern web technologies, I transform complex problems into elegant, user-centric solutions.
                            </p>
                        </div>

                        {/* More Button */}
                        <div className="mt-4 md:mt-8 flex justify-start">
                            <button
                                className="group flex items-center gap-4 px-8 py-4 text-xl font-semibold rounded-full bg-transparent border-2 border-cyan-400 text-cyan-400 cursor-pointer transition-all duration-300 hover:bg-cyan-400/10 hover:translate-x-1"
                                onClick={onOpenModal}
                            >
                                More
                                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
