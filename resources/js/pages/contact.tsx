import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage().props;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => setIsSubmitting(false), 1500);
    };

    return (
        <>
            <Head title="Contact Olevra | Get In Touch" />
            <div className="min-h-screen bg-[#0a0a0a] text-[#EDEDEC] font-sans selection:bg-[#F53003] selection:text-white pb-20">
                
                {/* Navbar */}
                <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                    <div className="text-2xl font-bold tracking-tighter text-white">Olevra.</div>
                    <div className="hidden md:flex gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="text-sm font-medium text-[#A1A09A] hover:text-[#F53003] transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium text-[#A1A09A] hover:text-[#F53003] transition-colors">About</Link>
                        <Link href="/contact" className="text-sm font-medium text-white hover:text-[#F53003] transition-colors">Contact</Link>
                    </div>
                    <div className="flex gap-4 relative z-10">
                        {auth.user ? (
                            <Link href={dashboard()} className="text-sm font-medium hover:text-[#F53003] transition-colors">Dashboard</Link>
                        ) : (
                            <>
                                <Link href={login()} className="text-sm font-medium hover:text-[#F53003] transition-colors">Log in</Link>
                                {canRegister && (
                                    <Link href={register()} className="text-sm font-medium hover:text-[#F53003] transition-colors">Register</Link>
                                )}
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative pt-40 pb-16 overflow-hidden text-center">
                    <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-[#F53003]/10 rounded-full blur-[100px] -z-10"></div>
                    <div className="max-w-3xl mx-auto px-6 z-10 relative">
                        <span className="text-sm font-bold tracking-widest text-[#F53003] uppercase mb-4 block">Get In Touch</span>
                        <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight text-white mb-6">
                            We're here to help you <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F53003] to-[#FF750F]">thrive.</span>
                        </h1>
                        <p className="text-xl text-[#A1A09A] leading-relaxed mx-auto">
                            Whether you have a question about your new Olevra ring, need help with the app, or just want to share your health journey, our team is ready to listen.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 mt-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-[#161615] border border-[#ffffff10] rounded-3xl p-8 hover:bg-[#1a1a19] transition-all group">
                            <Mail className="w-8 h-8 text-[#F53003] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                            <p className="text-[#A1A09A] mb-4">Our friendly team is here to help with any inquiries.</p>
                            <a href="mailto:support@olevra.com" className="text-white font-medium hover:text-[#F53003] transition-colors">support@olevra.com</a>
                        </div>
                        
                        <div className="bg-[#161615] border border-[#ffffff10] rounded-3xl p-8 hover:bg-[#1a1a19] transition-all group">
                            <MessageSquare className="w-8 h-8 text-[#F53003] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                            <p className="text-[#A1A09A] mb-4">Available Monday to Friday, 9am - 5pm EST in our app.</p>
                            <button className="text-white font-medium hover:text-[#F53003] transition-colors">Start a conversation</button>
                        </div>
                        
                        <div className="bg-[#161615] border border-[#ffffff10] rounded-3xl p-8 hover:bg-[#1a1a19] transition-all group">
                            <MapPin className="w-8 h-8 text-[#F53003] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">HQ Address</h3>
                            <p className="text-[#A1A09A]">
                                Olevra Health Inc.<br />
                                120 Innovation Drive, Suite 400<br />
                                San Francisco, CA 94105
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-[#0a0a0a] border border-[#ffffff10] rounded-3xl p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F53003]/5 rounded-full blur-[80px] -z-10"></div>
                        <h2 className="text-3xl font-bold text-white mb-2">Send us a message</h2>
                        <p className="text-[#A1A09A] mb-8">We usually respond within 24 hours.</p>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-[#EDEDEC]">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        required
                                        className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003] transition-all"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-[#EDEDEC]">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        required
                                        className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003] transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-[#EDEDEC]">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003] transition-all"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm font-medium text-[#EDEDEC]">Subject</label>
                                <select 
                                    id="subject"
                                    className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003] transition-all appearance-none"
                                >
                                    <option value="support">General Support</option>
                                    <option value="sales">Sales & Returns</option>
                                    <option value="press">Press & Media</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#EDEDEC]">Message</label>
                                <textarea 
                                    id="message" 
                                    required
                                    rows={5}
                                    className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003] transition-all resize-none"
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-[#F53003] hover:bg-[#D42600] disabled:bg-[#F53003]/50 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,48,3,0.2)] hover:shadow-[0_0_30px_rgba(245,48,3,0.4)]"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send className="w-5 h-5" />}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
