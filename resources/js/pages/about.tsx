import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { ShieldCheck, Activity, HeartPulse, Zap } from 'lucide-react';

export default function About({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="About Olevra | Own Your Health" />
            <div className="min-h-screen bg-[#0a0a0a] text-[#EDEDEC] font-sans selection:bg-[#F53003] selection:text-white">
                {/* Navbar */}
                <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                    <div className="text-2xl font-bold tracking-tighter text-white">Olevra.</div>
                    <div className="hidden md:flex gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="text-sm font-medium text-[#A1A09A] hover:text-[#F53003] transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium text-white hover:text-[#F53003] transition-colors">About</Link>
                        <Link href="/contact" className="text-sm font-medium text-[#A1A09A] hover:text-[#F53003] transition-colors">Contact</Link>
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
                <section className="relative pt-40 pb-20 overflow-hidden text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F53003]/10 rounded-full blur-[120px] -z-10"></div>
                    <div className="max-w-4xl mx-auto px-6 z-10 relative">
                        <span className="text-2xl font-bold tracking-widest text-[#F53003] uppercase mb-4 block">About Olevra</span>
                        <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight text-white mb-6">
                            Waking up should feel like a fresh start, <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F53003] to-[#FF750F]">not a struggle.</span>
                        </h1>
                        <p className="text-xl text-[#A1A09A] leading-relaxed mx-auto">
                            You know the feeling: you sleep for eight hours but still wake up exhausted. You try to push through your day, but you feel out of sync with your body. 
                            For too long, the only way to truly understand what was happening beneath the surface was to wear a bulky screen on your wrist or pay hundreds of dollars for a device that then held your own health data hostage behind a monthly paywall.
                        </p>
                    </div>
                </section>

                {/* Our Origin Story */}
                <section className="py-24 bg-white text-[#1b1b18] relative">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Origin Story:<br />Your data belongs to you.</h2>
                            <p className="text-lg text-[#706f6c] mb-6">
                                When we looked at the smart technology landscape, we saw a massive flaw. Incredible, life-changing health insights existed, but they were locked behind <strong>$400 price tags and endless, restrictive subscription fees</strong>.
                            </p>
                            <p className="text-lg text-[#706f6c] mb-6">
                                It didn’t make sense to us. <strong>You should never have to pay a monthly fee to see your own data.</strong>
                            </p>
                            <p className="text-lg text-[#706f6c]">
                                We created Olevra to bridge the gap between high-end biometric tracking and everyday life. We set out to design a smart ring that looks like a piece of fine jewelry but works tirelessly in the background to give you real-time accuracy on sleep, stress, heart rate, and your natural cycles. We stripped away the luxury markups and the paywalls to make advanced, actionable health tracking simple, beautiful, and accessible to everyone.
                            </p>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-[#e3e3e0]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#f3f4f6] to-white flex flex-col items-center justify-center p-8 text-center">
                                <div className="w-24 h-24 bg-[#fff2f2] rounded-full flex items-center justify-center mb-8 shadow-sm">
                                    <ShieldCheck className="w-12 h-12 text-[#F53003]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Zero Subscriptions.</h3>
                                <p className="text-[#706f6c] text-lg max-w-sm">We believe that once you buy your health tracker, you shouldn't have to keep paying to use it.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Olevra Pillars */}
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What Makes Us Different</h2>
                            <p className="text-lg text-[#A1A09A]">The pillars that drive our mission to bring accessible health technology to everyone.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Pillar 1 */}
                            <div className="bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors">
                                <Activity className="w-10 h-10 text-[#F53003] mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Track:<br/><span className="text-[#A1A09A] font-medium text-xl">Understand Your Patterns</span></h3>
                                <p className="text-[#A1A09A]">
                                    Knowledge is power. Olevra gives you real-time, highly accurate biometric data tracking everything from your sleep stages and stress levels to your heart rate, HRV, and SpO2. We don’t just give you raw numbers; we give you the insights you need to understand exactly what your body is experiencing.
                                </p>
                            </div>
                            {/* Pillar 2 */}
                            <div className="bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors">
                                <HeartPulse className="w-10 h-10 text-[#F53003] mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Align:<br/><span className="text-[#A1A09A] font-medium text-xl">Your Rhythms, Your Recovery</span></h3>
                                <p className="text-[#A1A09A]">
                                    No two days are exactly the same, and your body’s needs shift constantly. Our technology adapts to your body’s natural cycle, letting you know when you have the energy to push hard, and when it’s time to slow down, rest, and recover.
                                </p>
                            </div>
                            {/* Pillar 3 */}
                            <div className="bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors">
                                <Zap className="w-10 h-10 text-[#F53003] mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Thrive:<br/><span className="text-[#A1A09A] font-medium text-xl">Smarter Living, Simplified</span></h3>
                                <p className="text-[#A1A09A]">
                                    Wellness shouldn’t be a burden to wear. Say goodbye to bulky tech and ugly screens. The Olevra ring is <strong>100% waterproof</strong>, whisper-light, and features a fast-charging battery that keeps up with your life—a quick <strong>5-minute charge</strong> gives you a full day of use, and a full charge lasts up to <strong>7 to 8 days</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Promise to You */}
                <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-[#ffffff10]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F53003]/5 rounded-full blur-[100px] -z-10"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Our Promise to You.</h2>
                        <p className="text-xl text-[#A1A09A] mb-8 leading-relaxed">
                            With Olevra, there are <strong>zero hidden fees and absolutely no monthly subscriptions</strong>. Your purchase includes full, unrestricted access to the app and every single insight your ring captures.
                        </p>
                        <p className="text-xl text-[#A1A09A] leading-relaxed">
                            We are fiercely committed to your <strong>data privacy</strong>, ensuring that your personal health metrics stay securely yours. We promise to keep creating sleek, lightweight jewelry that works tirelessly in the background, empowering you to tune out the noise, tune into your body, and simply live your life.
                        </p>
                        <div className="mt-12">
                            <button className="px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-all">
                                Join the Movement
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 bg-black text-center text-sm text-[#706f6c] border-t border-[#ffffff10]">
                    &copy; 2026 Olevra. All rights reserved.
                </footer>
            </div>
        </>
    );
}
