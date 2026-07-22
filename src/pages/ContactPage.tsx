import { useState, useRef, type FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Reveal } from '../components/Reveal';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [displayEmail, setDisplayEmail] = useState('avinavpriyadarshi@gmail.com');
    const [isScrambling, setIsScrambling] = useState(false);
    const [displayPhone, setDisplayPhone] = useState('+91 9106797847');
    const [isScramblingPhone, setIsScramblingPhone] = useState(false);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        if (form.current) {
            emailjs.sendForm(
                'service_i76dl4l',      // ✅ Gmail Service ID
                'template_nzvupef',     // ✅ Template ID
                form.current,
                'N7ZK-1Vmf49EjZHUy'     // ✅ Public Key
            )
                .then(() => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    form.current?.reset();
                })
                .catch(() => {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                });
        }
    };

    const scrambleEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isScrambling) return;

        setIsScrambling(true);
        const originalEmail = 'avinavpriyadarshi@gmail.com';
        const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?1234567890';
        let iterations = 0;
        const maxIterations = 4;

        const interval = setInterval(() => {
            setDisplayEmail(
                originalEmail
                    .split('')
                    .map((char, index) => {
                        if (char === '@' || char === '.') return char; // Keep @ and .
                        if (iterations >= maxIterations) return originalEmail[index];
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('')
            );

            iterations++;

            if (iterations > maxIterations) {
                clearInterval(interval);
                setDisplayEmail(originalEmail);
                setIsScrambling(false);
                // Open mailto after animation
                setTimeout(() => {
                    window.location.href = 'mailto:avinavpriyadarshi@gmail.com';
                }, 200);
            }
        }, 100);
    };

    const scramblePhone = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isScramblingPhone) return;

        setIsScramblingPhone(true);
        const originalPhone = '+91 9106797847';
        const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?1234567890';
        let iterations = 0;
        const maxIterations = 4;

        const interval = setInterval(() => {
            setDisplayPhone(
                originalPhone
                    .split('')
                    .map((char, index) => {
                        if (char === '+' || char === ' ') return char; // Keep + and space
                        if (iterations >= maxIterations) return originalPhone[index];
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('')
            );

            iterations++;

            if (iterations > maxIterations) {
                clearInterval(interval);
                setDisplayPhone(originalPhone);
                setIsScramblingPhone(false);
                // Open tel after animation
                setTimeout(() => {
                    window.location.href = 'tel:+919106797847';
                }, 200);
            }
        }, 100);
    };

    return (
        <div className="min-h-screen relative flex items-start pt-32">
            {/* Interactive Spline Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Spline
                    scene="https://prod.spline.design/oOe84LZZ6gVMfmwb/scene.splinecode"
                    style={{
                        width: '120%',
                        height: '120%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    className="opacity-50 md:opacity-100"
                />

                {/* Seamless Gradient Cover for Spline Watermark */}
                <div className="absolute bottom-0 right-0 w-48 h-32 bg-gradient-to-tl from-[#0a0a0b] via-[#0a0a0b] to-transparent z-10 pointer-events-none"></div>
            </div>


            <div className="container relative z-10 pointer-events-none py-16 ml-auto mr-16 max-w-6xl">
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-bold text-gradient-silver-blue pointer-events-auto w-fit mb-16">Get In Touch</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Contact Info */}
                        <div className="pointer-events-auto space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-semibold text-zinc-100 uppercase tracking-wide">Let's talk about everything!</h2>
                                <p className="text-zinc-400 text-2xl">
                                    Don't like forms? Send me an email. 👋
                                </p>
                            </div>

                            <div className="space-y-8">
                                <a href="mailto:avinavpriyadarshi@gmail.com" onClick={scrambleEmail} className="flex items-center gap-5 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-all">
                                    <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-base text-zinc-400 font-medium uppercase tracking-wider">Mail Me</h4>
                                        <p className="text-zinc-100 font-medium text-lg font-mono">{displayEmail}</p>
                                    </div>
                                </a>

                                <a href="tel:+919106797847" onClick={scramblePhone} className="flex items-center gap-5 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-all">
                                    <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-base text-zinc-400 font-medium uppercase tracking-wider">Contact</h4>
                                        <p className="text-zinc-100 font-medium text-lg font-mono">{displayPhone}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="pointer-events-auto">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6 glass p-8 rounded-3xl">
                                <div>
                                    <label htmlFor="name" className="block text-zinc-300 font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-zinc-300 font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-zinc-300 font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>

                                {submitStatus === 'success' && (
                                    <p className="text-green-400 text-center font-medium">Message sent successfully! 🎉</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-400 text-center font-medium">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>

                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default ContactPage;
