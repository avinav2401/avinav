
import { Reveal } from './Reveal';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            role: 'Cybersecurity Dev Intern',
            company: 'BrainMint Chennai',
            period: 'May 2026 - Oct 2026',
            description: 'Focused on cybersecurity development tasks and protocols during this internship program.'
        },
        {
            type: 'education',
            role: 'B.Tech in Computer Science',
            company: 'SRM University',
            period: '2024 - 2028',
            description: 'Pursuing Bachelor of Technology in Computer Science and Engineering.'
        }
    ];

    return (
        <section id="experience" className="py-16 md:py-24">
            <div className="container">
                <h2 className="title text-gradient-silver-blue text-3xl md:text-4xl mb-12">Experience & Education</h2>
                <Reveal width="100%">
                    <div className="flex flex-col gap-6 md:gap-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="glass p-6 md:p-10 rounded-[1.5rem] flex flex-col sm:flex-row gap-6 sm:gap-8 items-start relative overflow-hidden">
                                <div className="p-4 md:p-5 bg-blue-400/10 rounded-full text-blue-400 flex items-center justify-center flex-shrink-0">
                                    {exp.type === 'work' ? <Briefcase size={28} /> : <GraduationCap size={28} />}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-200">{exp.role}</h3>
                                    <h4 className="text-lg md:text-xl text-slate-400 mb-2">{exp.company}</h4>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm md:text-base mb-4">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
