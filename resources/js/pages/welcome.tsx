import React, { useState, useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { 
    Battery, Lock, Activity, ShieldCheck, 
    Droplet, Zap, HeartPulse, RefreshCw, CheckCircle2, XCircle,
    Moon, Flame
} from 'lucide-react';

const features = [
    {
        title: "Readiness Score",
        value: "94",
        status: " / Optimal",
        icon: <HeartPulse className="text-white" />,
        color: "from-[#F53003] to-[#FF750F]",
        textColor: "text-[#F53003]",
        image: "/ring-render.png"
    },
    {
        title: "Sleep Quality",
        value: "8h 12m",
        status: " / Restorative",
        icon: <Moon className="text-white" />,
        color: "from-indigo-500 to-purple-600",
        textColor: "text-indigo-400",
        image: "/ring-sleep.png"
    },
    {
        title: "Active Calories",
        value: "840",
        status: " / Target Met",
        icon: <Flame className="text-white" />,
        color: "from-orange-500 to-rose-500",
        textColor: "text-orange-400",
        image: "/ring-activity.png"
    }
];

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage().props;
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
                setIsAnimating(false);
            }, 300); // Wait for fade out
        }, 3000); // Change every 3 seconds
        
        return () => clearInterval(interval);
    }, []);

    const activeFeature = features[currentFeatureIndex];

    return (
        <>
            <Head title="Olevra Smart Ring | Own Your Health" />
            <div className="min-h-screen bg-[#0a0a0a] text-[#EDEDEC] font-sans selection:bg-[#F53003] selection:text-white">
                {/* Navbar */}
                <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                    <div className="text-2xl font-bold tracking-tighter text-white">Olevra.</div>
                    <div className="hidden md:flex gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="text-sm font-medium text-white hover:text-[#F53003] transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium text-[#A1A09A] hover:text-[#F53003] transition-colors">About</Link>
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

                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F53003]/20 rounded-full blur-[120px] -z-10"></div>
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8 z-10">
                            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight text-white">
                                Own Your Health.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F53003] to-[#FF750F]">No Subscriptions. </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F53003] to-[#FF750F]">No Hidden Fees.</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-[#A1A09A] max-w-xl leading-relaxed">
                                Advanced Sleep, HRV, Stress, and Cycle tracking in a sleek, aerospace-grade titanium ring. 100% of your data, zero hidden fees.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <button className="px-8 py-4 bg-[#F53003] hover:bg-[#D42600] text-white rounded-full font-medium text-lg transition-all shadow-[0_0_40px_rgba(245,48,3,0.4)] hover:shadow-[0_0_60px_rgba(245,48,3,0.6)] hover:-translate-y-1">
                                    Get My Olevra Ring
                                </button>
                                <div className="text-sm text-[#A1A09A] flex flex-col gap-1 ml-4">
                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F53003]" /> 30-Day Risk Free Trial</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F53003]" /> Free Worldwide Shipping</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-6 pt-4 border-t border-[#ffffff10]">
                                <div className="flex items-center gap-2 text-sm text-[#EDEDEC]"><Battery className="w-5 h-5 text-[#A1A09A]" /> 7+ Days Battery</div>
                                <div className="flex items-center gap-2 text-sm text-[#EDEDEC]"><Lock className="w-5 h-5 text-[#A1A09A]" /> 100% Data Privacy</div>
                                <div className="flex items-center gap-2 text-sm text-[#EDEDEC]"><ShieldCheck className="w-5 h-5 text-[#A1A09A]" /> Zero Subscriptions</div>
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] rounded-3xl border border-[#ffffff10] shadow-2xl flex items-center justify-center overflow-hidden">
                                {features.map((feature, idx) => (
                                    <img 
                                        key={feature.title}
                                        src={feature.image} 
                                        alt={`Olevra Ring - ${feature.title}`} 
                                        className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-1000 ease-in-out ${idx === currentFeatureIndex ? 'opacity-90 z-10' : 'opacity-0 z-0'}`} 
                                    />
                                ))}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md border border-[#ffffff10] rounded-xl p-4 flex gap-4 hover:-translate-y-1 transition-all overflow-hidden h-20">
                                    <div className={`transition-all duration-300 transform ${isAnimating ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'} w-12 h-12 rounded-full bg-gradient-to-br ${activeFeature.color} flex items-center justify-center shrink-0`}>
                                        {activeFeature.icon}
                                    </div>
                                    <div className={`transition-all duration-300 transform ${isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                        <div className="text-xs text-[#A1A09A]">{activeFeature.title}</div>
                                        <div className="text-2xl font-bold text-white whitespace-nowrap">
                                            {activeFeature.value}<span className={`text-sm ${activeFeature.textColor}`}>{activeFeature.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. The Problem Section */}
                <section className="py-24 bg-white text-[#1b1b18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-sm font-bold tracking-widest text-[#F53003] uppercase">The Wearable Industry's Dirty Secret</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">93% of health trackers just tell you what you already know.</h2>
                            <p className="text-lg text-[#706f6c]">
                                You don't need a buzzing wristband to tell you you're tired. You need actionable insights to actually fix it. Most trackers give you raw, confusing numbers and then charge you a monthly fee just to look at them.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#FDFDFC] border border-[#e3e3e0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-[#fff2f2] flex items-center justify-center mb-6">
                                    <Activity className="text-[#F53003] w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Track (The Symptom)</h3>
                                <p className="text-[#706f6c]">Waking up exhausted after "8 hours" of sleep? Olevra breaks down deep sleep, REM, and restlessness so you know exactly why.</p>
                            </div>
                            <div className="bg-[#FDFDFC] border border-[#e3e3e0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-[#fff2f2] flex items-center justify-center mb-6">
                                    <RefreshCw className="text-[#F53003] w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Align (The Action)</h3>
                                <p className="text-[#706f6c]">Feeling random afternoon crashes? We align your HRV and stress data to tell you when to push hard, and when to prioritize recovery.</p>
                            </div>
                            <div className="bg-[#FDFDFC] border border-[#e3e3e0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-[#fff2f2] flex items-center justify-center mb-6">
                                    <HeartPulse className="text-[#F53003] w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Thrive (The Result)</h3>
                                <p className="text-[#706f6c]">Stop guessing. Let precision biometrics guide your daily habits, workouts, and sleep routines—without locking your own data behind a paywall.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Features Breakdown */}
                <section className="py-32 bg-[#0a0a0a] relative">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white">Precision Engineering.</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors overflow-hidden relative">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[#F53003]/10 rounded-full blur-2xl group-hover:bg-[#F53003]/20 transition-all"></div>
                                <Zap className="w-10 h-10 text-[#F53003] mb-6 relative z-10" />
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">7+ Days of Battery. Lightning Fast Charging.</h3>
                                <p className="text-[#A1A09A] text-lg relative z-10">
                                    Stop living tethered to an outlet. A full charge gives you over 7 days of continuous tracking. Forgot to charge? Drop it on the dock while you brush your teeth—a <strong className="text-white font-medium">5-minute fast-charge delivers a full 24 hours</strong> of battery life.
                                </p>
                            </div>
                            
                            <div className="group bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors overflow-hidden relative">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                                <Lock className="w-10 h-10 text-blue-500 mb-6 relative z-10" />
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Your Data. Zero Subscription Fees.</h3>
                                <p className="text-[#A1A09A] text-lg relative z-10">
                                    Why pay monthly rent for your own body's data? Olevra gives you lifetime access to premium insights, personalized sleep coaching, and advanced analytics with absolutely zero hidden fees.
                                </p>
                            </div>

                            <div className="group bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors overflow-hidden relative">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl group-hover:bg-gray-500/20 transition-all"></div>
                                <Droplet className="w-10 h-10 text-gray-400 mb-6 relative z-10" />
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Jewelry-Grade Titanium. 100% Waterproof.</h3>
                                <p className="text-[#A1A09A] text-lg relative z-10">
                                    Engineered from aerospace-grade titanium. It’s lighter than a standard wedding band, scratch-resistant, and fully waterproof up to 50 meters (5 ATM). Wear it in the shower, the sauna, or the ocean.
                                </p>
                            </div>

                            <div className="group bg-[#161615] border border-[#ffffff10] rounded-3xl p-10 hover:bg-[#1a1a19] transition-colors overflow-hidden relative">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                                <Activity className="w-10 h-10 text-emerald-500 mb-6 relative z-10" />
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Laboratory Precision on Your Finger.</h3>
                                <p className="text-[#A1A09A] text-lg relative z-10">
                                    Packed with advanced infrared and red LEDs to measure Blood Oxygen (SpO2), resting heart rate, HRV, and skin temperature. Flawless cycle tracking and stress monitoring that adapts to your unique baseline.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Comparison Table */}
                <section className="py-24 bg-[#0F0F0F]">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Don't Pay More for Less.</h2>
                            <p className="text-[#A1A09A] text-xl">See how Olevra stacks up against the $400 status quo.</p>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-6 border-b border-[#ffffff10] text-[#A1A09A] font-normal text-lg">Feature</th>
                                        <th className="p-6 border-b border-t border-l border-r border-[#ffffff10] bg-[#161615] rounded-t-2xl text-white font-bold text-xl w-1/3 relative shadow-2xl">
                                            <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-[#F53003] to-[#FF750F]"></div>
                                            Olevra Smart Ring
                                        </th>
                                        <th className="p-6 border-b border-[#ffffff10] text-[#A1A09A] font-normal text-lg w-1/3">The $400 Competition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="p-6 border-b border-[#ffffff10] text-[#EDEDEC]">Upfront Cost</td>
                                        <td className="p-6 border-b border-l border-r border-[#ffffff10] bg-[#161615] text-white font-bold text-lg shadow-2xl">$249</td>
                                        <td className="p-6 border-b border-[#ffffff10] text-[#706f6c]">$399+</td>
                                    </tr>
                                    <tr className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="p-6 border-b border-[#ffffff10] text-[#EDEDEC]">Monthly Subscription Fee</td>
                                        <td className="p-6 border-b border-l border-r border-[#ffffff10] bg-[#161615] text-[#10B981] font-bold text-lg flex items-center gap-2 shadow-2xl"><CheckCircle2 className="w-5 h-5"/> $0/month forever</td>
                                        <td className="p-6 border-b border-[#ffffff10] text-[#706f6c]">$5.99 - $30/month</td>
                                    </tr>
                                    <tr className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="p-6 border-b border-[#ffffff10] text-[#EDEDEC]">5-Minute Fast Charge</td>
                                        <td className="p-6 border-b border-l border-r border-[#ffffff10] bg-[#161615] text-white font-bold text-lg shadow-2xl">24 Hours of Power</td>
                                        <td className="p-6 border-b border-[#ffffff10] text-[#706f6c] flex items-center gap-2"><XCircle className="w-5 h-5"/> N/A (Takes hours)</td>
                                    </tr>
                                    <tr className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="p-6 border-b border-[#ffffff10] text-[#EDEDEC]">Battery Life</td>
                                        <td className="p-6 border-b border-l border-r border-[#ffffff10] bg-[#161615] text-white font-bold text-lg shadow-2xl">7+ Days</td>
                                        <td className="p-6 border-b border-[#ffffff10] text-[#706f6c]">3-5 Days</td>
                                    </tr>
                                    <tr className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="p-6 border-b border-[#ffffff10] text-[#EDEDEC]">Data Privacy & Ownership</td>
                                        <td className="p-6 border-b border-l border-r border-[#ffffff10] bg-[#161615] rounded-b-2xl text-white font-bold text-lg shadow-2xl">100% Free Access</td>
                                        <td className="p-6 border-b border-[#ffffff10] text-[#706f6c]">Paywalled Behind Subscriptions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 5. Social Proof Overhaul */}
                <section className="py-32 bg-white text-[#1b1b18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Proof in the Data.</h2>
                            <p className="text-lg text-[#706f6c]">Real transformations from people who took back their health data.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="bg-[#FDFDFC] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e3e3e0] flex flex-col hover:shadow-xl transition-all hover:-translate-y-2">
                                <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-50 relative border-b border-[#e3e3e0]">
                                    {/* Mock App UI Screenshot */}
                                    <div className="absolute bottom-[-1px] left-6 right-6 h-32 bg-white rounded-t-xl border border-b-0 border-[#e3e3e0] shadow-sm p-4 overflow-hidden">
                                        <div className="text-xs text-[#706f6c] font-medium mb-2">Sleep Score</div>
                                        <div className="flex items-end gap-2 mb-4">
                                            <div className="text-4xl font-bold text-[#1b1b18]">92</div>
                                            <div className="text-sm text-[#10B981] mb-1">Optimal</div>
                                        </div>
                                        <div className="w-full h-12 flex items-end gap-1">
                                            <div className="w-1/6 h-[30%] bg-indigo-200 rounded-t-sm"></div>
                                            <div className="w-1/6 h-[80%] bg-indigo-500 rounded-t-sm hover:h-[90%] transition-all"></div>
                                            <div className="w-1/6 h-[40%] bg-indigo-200 rounded-t-sm"></div>
                                            <div className="w-1/6 h-[60%] bg-indigo-300 rounded-t-sm hover:h-[70%] transition-all"></div>
                                            <div className="w-1/6 h-[90%] bg-indigo-500 rounded-t-sm hover:h-[100%] transition-all"></div>
                                            <div className="w-1/6 h-[50%] bg-indigo-200 rounded-t-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 grow flex flex-col">
                                    <div className="text-sm font-bold text-[#F53003] mb-2 uppercase tracking-wide">The Burnout Recovery</div>
                                    <p className="italic text-[#706f6c] mb-6 grow">"I used to wake up exhausted and blame it on getting older. Olevra showed me my deep sleep was constantly interrupted by late-night screen time. A few adjustments, and my app dashboard is finally showing 90+ Sleep Scores. Plus, canceling my $6/mo Oura sub felt amazing."</p>
                                    <div className="font-bold">— Maggie, 32</div>
                                </div>
                            </div>

                            <div className="bg-[#FDFDFC] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e3e3e0] flex flex-col hover:shadow-xl transition-all hover:-translate-y-2">
                                <div className="h-48 bg-gradient-to-br from-rose-100 to-rose-50 relative border-b border-[#e3e3e0]">
                                    <div className="absolute bottom-[-1px] left-6 right-6 h-32 bg-white rounded-t-xl border border-b-0 border-[#e3e3e0] shadow-sm p-4 overflow-hidden">
                                        <div className="text-xs text-[#706f6c] font-medium mb-2">Temperature Trend</div>
                                        <div className="flex items-end gap-2 mb-2">
                                            <div className="text-4xl font-bold text-[#1b1b18]">+0.4°</div>
                                            <div className="text-sm text-rose-500 mb-1">Luteal Phase</div>
                                        </div>
                                        <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                                            <path className="animate-[pulse_3s_infinite]" d="M0,20 Q20,20 40,30 T80,10 T100,5" fill="none" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-8 grow flex flex-col">
                                    <div className="text-sm font-bold text-rose-500 mb-2 uppercase tracking-wide">The Cycle Tracker</div>
                                    <p className="italic text-[#706f6c] mb-6 grow">"Other apps just guess my cycle based on a calendar. Olevra tracks my actual body temperature trends. I knew exactly when my luteal phase hit, explained my energy dip, and adjusted my workouts. It's incredibly empowering."</p>
                                    <div className="font-bold">— Victoria, 28</div>
                                </div>
                            </div>

                            <div className="bg-[#FDFDFC] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e3e3e0] flex flex-col hover:shadow-xl transition-all hover:-translate-y-2">
                                <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-50 relative border-b border-[#e3e3e0]">
                                    <div className="absolute bottom-[-1px] left-6 right-6 h-32 bg-white rounded-t-xl border border-b-0 border-[#e3e3e0] shadow-sm p-4 overflow-hidden">
                                        <div className="text-xs text-[#706f6c] font-medium mb-2">Heart Rate Variability</div>
                                        <div className="flex items-end gap-2 mb-4">
                                            <div className="text-4xl font-bold text-[#1b1b18]">42</div>
                                            <div className="text-sm text-rose-500 mb-1">Low (Rest advised)</div>
                                        </div>
                                        <div className="w-full h-12 flex items-end gap-1">
                                            <div className="w-1/6 h-[80%] bg-teal-400 rounded-t-sm hover:h-[90%] transition-all"></div>
                                            <div className="w-1/6 h-[75%] bg-teal-400 rounded-t-sm hover:h-[85%] transition-all"></div>
                                            <div className="w-1/6 h-[85%] bg-teal-400 rounded-t-sm hover:h-[95%] transition-all"></div>
                                            <div className="w-1/6 h-[70%] bg-teal-400 rounded-t-sm"></div>
                                            <div className="w-1/6 h-[30%] bg-rose-400 rounded-t-sm animate-pulse"></div>
                                            <div className="w-1/6 h-[25%] bg-rose-500 rounded-t-sm"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 grow flex flex-col">
                                    <div className="text-sm font-bold text-teal-600 mb-2 uppercase tracking-wide">The Data Geek</div>
                                    <p className="italic text-[#706f6c] mb-6 grow">"The HRV tracking is terrifyingly accurate. I noticed my HRV tanking 2 days before I actually felt sick. I rested instead of going to the gym, and avoided a full-blown flu. Best investment I've made in my health."</p>
                                    <div className="font-bold">— Natasha, 41</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Friction Killer CTA */}
                <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-[#ffffff10]">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F53003]/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF750F]/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Try Olevra for 30 Days.<br/><span className="text-[#F53003]">Zero Risk.</span></h2>
                        <p className="text-xl text-[#A1A09A] mb-12 max-w-2xl mx-auto">
                            We know switching trackers is a commitment. That’s why we give you a full 30 days to wear it, sweat in it, sleep in it, and analyze your data. If you aren't absolutely obsessed with the insights (and the zero monthly fees), send it back for a full refund. No questions, no hassle.
                        </p>
                        
                        <div className="flex flex-col items-center gap-6">
                            <button className="px-10 py-5 bg-[#F53003] hover:bg-[#D42600] text-white rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(245,48,3,0.3)] hover:shadow-[0_0_60px_rgba(245,48,3,0.6)] hover:scale-105">
                                Claim Your Ring Now
                            </button>
                            <div className="text-[#A1A09A] font-medium text-sm">Trusted by 50,000+ users</div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mt-16 text-[#A1A09A]">
                            <div className="flex items-center gap-3"><ShieldCheck className="text-white w-6 h-6"/> <span className="font-medium text-white">1-Year Hardware Warranty</span></div>
                            <div className="flex items-center gap-3"><RefreshCw className="text-white w-6 h-6"/> <span className="font-medium text-white">Free Size Exchanges</span></div>
                            <div className="flex items-center gap-3"><Lock className="text-white w-6 h-6"/> <span className="font-medium text-white">Secure 256-Bit Checkout</span></div>
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
