import { Github, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProjectsProps {
    onViewStealthBrowser?: () => void;
}

const Projects = ({ onViewStealthBrowser }: ProjectsProps) => {
    const projects = [
        {
            title: 'Stealth Browser',
            description: 'A powerful, specialized browser application designed for specific workflow management, featuring advanced stealth capabilities, process monitoring, and custom hotkey controls. Features stealth mode, always-on-top window management, embedded Chromium browser with camo mode, virtual keyboard, process monitoring, and panic switch for emergencies.',
            tags: ['C#', 'WebView2', 'Windows'],
            link: '#',
            github: 'https://github.com/avinav2401/hidden-browser',
            image: '/p1.jpg'
        },
        {
            title: 'Job Application Website',
            description: 'A full-stack MERN job portal connecting job seekers with employers. Features real-time job tracking, company management, secure authentication, job search with filters, easy application process, and applicant management for recruiters.',
            tags: ['MERN', 'MongoDB', 'React', 'Node.js'],
            link: 'https://job-application-website-avinav2401s-projects.vercel.app/',
            github: 'https://github.com/avinav2401/job-application-website',
            image: '/job.jpg'
        },
        {
            title: 'Trigger Tracker',
            description: 'A fast-paced shooting game where players control a spaceship and survive waves of enemies while earning points and currency. The game combines smooth gameplay mechanics, a dark-themed UI, and database-driven persistence for player stats, skins, and leaderboard.',
            tags: ['Java', 'SQLite', 'Game Dev'],
            link: 'https://avinav-pri.itch.io/trigger-tracker',
            github: 'https://github.com/avinav2401/TDSG',
            video: '/p3.mp4'
        },
        {
            title: 'Fish Rescue',
            description: 'An exciting endless runner game set in the depths of the ocean. Guide a lively red fish through polluted waters while avoiding environmental hazards. The game aims to raise awareness about ocean pollution and the importance of preserving marine life. Through engaging gameplay, players learn about the impact of human activities on aquatic ecosystems and are inspired to take action in real life.',
            tags: ['Game Dev', 'Unity', 'C#', 'WebGL'],
            link: 'https://avinav-pri.itch.io/save-the-fish',
            github: 'https://github.com/avinav2401/Fish-rescue-',
            video: '/p4.mp4'
        },
        {
            title: 'Luxe E-Commerce',
            description: 'A modern Next.js 15 e-commerce platform inspired by Amazon, featuring real-time order tracking, smart search with filters, comprehensive admin panel, secure payment integration, and responsive design. Built with MongoDB and optimized for seamless shopping experience with INR pricing.',
            tags: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel'],
            link: 'https://amazon-website-murex.vercel.app/',
            github: 'https://github.com/avinav2401/Luxe-E-Commerce-Platform',
            image: '/am.jpg'
        },
        {
            title: 'E-Commerce designe',
            description: 'A full-stack MERN e-commerce application featuring secure JWT authentication, product catalog (cameras, trimmers, speakers), shopping cart with checkout, and Redux Toolkit state management. Rebranded from "Dynamic Coding with Amit" with enhanced features and responsive Tailwind CSS design.',
            tags: ['MERN', 'Redux', 'MongoDB', 'Tailwind'],
            link: 'https://avinav-shop.vercel.app/',
            github: 'https://github.com/avinav2401/E-Commerce-Platform',
            image: '/unnamed.jpg'
        },
        {
            title: 'VisionAssist AI',
            description: 'A multimodal artificial intelligence platform designed to fuse computer vision with natural language processing. It empowers machines to look at an image, comprehend a question asked about that image, and synthesize an accurate, context-aware answer, functioning as an accessibility tool for the visually impaired.',
            tags: ['Python', 'FastAPI', 'Android', 'Computer Vision'],
            link: 'https://visual-question-answering-three.vercel.app/',
            github: 'https://github.com/avinav2401/VISUAL-QUESTION-ANSWERING',
            image: '/vision_ai.png'
        },
        {
            title: 'AI Research Studio',
            description: 'An advanced, multi-agent AI platform built on LangGraph. Features a Smart LLM Planner that routes queries, executes agents in parallel, synthesizes results with a Reviewer, and compiles a polished Markdown report via a native chat UI.',
            tags: ['LangGraph', 'Multi-Agent', 'FastAPI', 'Streamlit'],
            link: 'https://huggingface.co/spaces/avinavpri/ai_research_studio',
            github: 'https://github.com/avinav2401/AI-Research-studio',
            image: '/ai_studio.png'
        },
        {
            title: 'UniversalPlantAI',
            description: 'An AI-Powered Potato & Apple Disease Detection system deploying a TensorFlow CNN inference pipeline through FastAPI for sub-second disease classification across web and mobile platforms.',
            tags: ['TensorFlow', 'CNN', 'FastAPI', 'React'],
            link: 'https://tensor-bay.vercel.app/',
            github: 'https://github.com/avinav2401/tensor',
            image: '/plant_ai.png'
        }
    ];

    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="container">
                <h2 className="title text-gradient-silver-blue text-3xl md:text-4xl mb-12">Featured Projects</h2>
                <Reveal width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass project-card animate-fade-up rounded-[1.5rem] overflow-hidden flex flex-col"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="h-64 md:h-72 bg-[#18181b] flex items-center justify-center text-zinc-500 text-lg overflow-hidden relative">
                                    {project.video ? (
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-contain"
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                    ) : project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                                    ) : (
                                        'Project Preview'
                                    )}
                                </div>
                                <div className="p-6 md:p-8 border-t border-white/10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed flex-1 line-clamp-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-sm font-medium text-indigo-400 px-3 py-1 bg-indigo-400/10 rounded-full">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <button
                                            className="btn btn-primary px-6 py-3 text-base flex-1 flex justify-center items-center gap-2"
                                            onClick={() => {
                                                if (project.title === 'Stealth Browser' && onViewStealthBrowser) {
                                                    onViewStealthBrowser();
                                                } else {
                                                    window.open(project.link, '_blank');
                                                }
                                            }}
                                        >
                                            View <ExternalLink size={18} />
                                        </button>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Projects;

