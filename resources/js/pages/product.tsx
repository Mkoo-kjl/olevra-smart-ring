import { Head, Link, usePage } from '@inertiajs/react';
import { 
    Battery, Activity, ShieldCheck, 
    Droplet, CheckCircle2, 
    ChevronDown, ShoppingBag, CreditCard, HelpCircle, 
    Sparkles, X, ArrowRight, Star, Ruler, Truck
} from 'lucide-react';
import React, { useState } from 'react';
import { dashboard, login, register } from '@/routes';

const finishes = [
    { 
        id: 'black', 
        name: 'Stealth Black', 
        hex: '#111111', 
        textColor: 'text-neutral-400',
        borderColor: 'border-neutral-800',
        image: '/ring-render.png', 
        price: 249, 
        badge: 'Best Seller',
        description: 'Matte aerospace-grade titanium with Diamond-Like Carbon (DLC) scratch resistance.'
    },
    { 
        id: 'silver', 
        name: 'Brushed Silver', 
        hex: '#D4D4D8', 
        textColor: 'text-zinc-300',
        borderColor: 'border-zinc-500',
        image: '/ring-sleep.png', 
        price: 249, 
        badge: 'Classic',
        description: 'Polished titanium with a satin brushed finish. Elegant, raw, and highly durable.'
    },
    { 
        id: 'gold', 
        name: 'Aura Rose Gold', 
        hex: '#E11D48', 
        textColor: 'text-rose-400',
        borderColor: 'border-rose-400',
        image: '/ring-activity.png', 
        price: 279, 
        badge: 'Limited Edition',
        description: 'Exquisite 18k PVD gold plated titanium. A statement piece packed with technology.'
    }
];

const sizes = [6, 7, 8, 9, 10, 11, 12, 13];

const faqs = [
    {
        question: "How do I choose my ring size?",
        answer: "We recommend choosing the 'Send a Free Sizing Kit first' option. We will ship you a sizing kit with non-functional plastic rings within 2 days. Wear them for 24 hours to find your perfect fit (your fingers expand and contract throughout the day). Once you decide, scan the QR code in the kit to select your size and we will ship your Olevra Ring immediately at no extra cost."
    },
    {
        question: "Is there really no subscription fee?",
        answer: "Yes, 100% correct. Unlike our competitors who lock your data behind a $6/month subscription, Olevra charges zero monthly fees. You get full access to sleep staging, HRV analysis, readiness scores, cycle tracking, and future features forever."
    },
    {
        question: "Can I wear the ring in the shower or while swimming?",
        answer: "Absolutely. The Olevra Ring is built with a seamless, medical-grade inner molding and is waterproof up to 50 meters (5 ATM). You can wear it while swimming, showering, visiting the sauna, or washing your hands."
    },
    {
        question: "What is the battery life and how does it charge?",
        answer: "A single full charge takes about 20-30 minutes and lasts 7 to 8 days. If you're in a hurry, our fast-charging dock gives you a full 24 hours of battery life in just 5 minutes of charging."
    },
    {
        question: "Is Olevra compatible with my phone?",
        answer: "Yes, the Olevra companion app is fully compatible with iOS (v15.0 or later) and Android (v9.0 or later). It integrates seamlessly with Apple Health and Google Fit."
    }
];

export default function Product({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage().props;
    const [selectedFinish, setSelectedFinish] = useState(finishes[0]);
    const [selectedSize, setSelectedSize] = useState<number | 'kit' | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    // Checkout State
    const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        city: '',
        zip: '',
        cardNum: '',
        cardExpiry: '',
        cardCVC: ''
    });

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate premium order processing animation
        setTimeout(() => {
            setIsSubmitting(false);
            setCheckoutStep('success');
        }, 2000);
    };

    const resetCartFlow = () => {
        setIsCartOpen(false);
        // Delay resetting status to avoid layout jumps during exit transitions
        setTimeout(() => {
            setCheckoutStep('cart');
            setFormData({
                email: '',
                name: '',
                address: '',
                city: '',
                zip: '',
                cardNum: '',
                cardExpiry: '',
                cardCVC: ''
            });
        }, 300);
    };

    return (
        <>
            <Head title="Olevra Smart Ring | Shop Now" />
            <div className="min-h-screen bg-[#0a0a0a] text-[#EDEDEC] font-sans selection:bg-[#F53003] selection:text-white pb-20 relative overflow-x-hidden">
                
                {/* Navbar */}
                <nav className="absolute top-0 w-full p-6 z-40 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                    <div className="text-2xl font-bold tracking-tighter text-white">Olevra.</div>
                    <div className="hidden md:flex gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="text-sm font-medium text-[#A1A09A] hover:text-[#F53003] transition-colors">Home</Link>
                        <Link href="/product" className="text-sm font-medium text-white hover:text-[#F53003] transition-colors">Product</Link>
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

                {/* Hero / Customizer Section */}
                <section className="pt-32 pb-24 lg:pt-44 max-w-7xl mx-auto px-6">
                    <div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] bg-[#F53003]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
                    
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left: Product Images Display */}
                        <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-24">
                            <div className="relative aspect-square w-full bg-gradient-to-br from-[#121212] to-[#1e1e1d] rounded-3xl border border-[#ffffff10] overflow-hidden flex items-center justify-center shadow-2xl group">
                                <img 
                                    src={selectedFinish.image} 
                                    alt={`Olevra Ring - ${selectedFinish.name}`} 
                                    className="w-4/5 h-4/5 object-contain mix-blend-screen transition-transform duration-700 ease-out group-hover:scale-105" 
                                />
                                
                                <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md border border-[#ffffff10] px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white uppercase flex items-center gap-1.5 shadow-lg">
                                    <Sparkles className="w-3.5 h-3.5 text-[#F53003]" />
                                    {selectedFinish.badge}
                                </div>
                            </div>
                            
                            {/* Thumbnails */}
                            <div className="grid grid-cols-3 gap-4">
                                {finishes.map((finish) => (
                                    <button 
                                        key={finish.id}
                                        onClick={() => setSelectedFinish(finish)}
                                        className={`relative aspect-video rounded-xl bg-[#161615] border overflow-hidden flex items-center justify-center p-2 transition-all ${
                                            selectedFinish.id === finish.id 
                                                ? 'border-[#F53003] ring-1 ring-[#F53003]' 
                                                : 'border-[#ffffff10] hover:border-[#ffffff20]'
                                        }`}
                                    >
                                        <img 
                                            src={finish.image} 
                                            alt={finish.name} 
                                            className="w-3/4 h-3/4 object-contain mix-blend-screen" 
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Customization Dashboard */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-amber-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium text-[#A1A09A]">4.9/5 (1,240+ reviews)</span>
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">Olevra Smart Ring</h1>
                                <p className="text-[#A1A09A] leading-relaxed text-base">
                                    Advanced biometric tracking disguised as fine jewelry. Aerospace-grade titanium, 7+ days battery, and zero subscription fees.
                                </p>
                            </div>

                            {/* Finish Selection */}
                            <div className="flex flex-col gap-3">
                                <span className="text-sm font-semibold tracking-wider uppercase text-[#A1A09A]">1. Choose Finish</span>
                                <div className="flex gap-4">
                                    {finishes.map((finish) => (
                                        <button 
                                            key={finish.id}
                                            onClick={() => setSelectedFinish(finish)}
                                            className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                                                selectedFinish.id === finish.id 
                                                    ? 'border-[#F53003] scale-110 shadow-lg' 
                                                    : 'border-[#ffffff10] hover:border-[#ffffff30]'
                                            }`}
                                            title={finish.name}
                                        >
                                            <span 
                                                className="w-8 h-8 rounded-full shadow-inner block"
                                                style={{ backgroundColor: finish.hex }}
                                            />
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-1">
                                    <span className="text-white font-semibold text-sm">{selectedFinish.name}</span>
                                    <p className="text-xs text-[#A1A09A] mt-1">{selectedFinish.description}</p>
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold tracking-wider uppercase text-[#A1A09A]">2. Choose Size</span>
                                    <button 
                                        onClick={() => setSelectedSize('kit')}
                                        className={`text-xs font-semibold hover:text-white transition-colors flex items-center gap-1 ${
                                            selectedSize === 'kit' ? 'text-[#F53003]' : 'text-[#A1A09A]'
                                        }`}
                                    >
                                        <Ruler className="w-3.5 h-3.5" />
                                        Don't know your size?
                                    </button>
                                </div>

                                <div className="grid grid-cols-4 gap-2">
                                    {sizes.map((size) => (
                                        <button 
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`py-3.5 rounded-xl border text-center text-sm font-bold transition-all ${
                                                selectedSize === size 
                                                    ? 'bg-white text-black border-white scale-[1.03] shadow-md' 
                                                    : 'bg-[#161615] text-[#EDEDEC] border-[#ffffff10] hover:border-[#ffffff20] hover:bg-[#1a1a19]'
                                            }`}
                                        >
                                            US {size}
                                        </button>
                                    ))}
                                </div>

                                {/* Sizing Kit Option */}
                                <button 
                                    onClick={() => setSelectedSize('kit')}
                                    className={`w-full py-4 rounded-xl border text-left px-5 transition-all flex items-center justify-between ${
                                        selectedSize === 'kit'
                                            ? 'bg-[#F53003]/10 border-[#F53003] text-white shadow-[0_0_20px_rgba(245,48,3,0.1)]' 
                                            : 'bg-[#161615] border-[#ffffff10] text-[#EDEDEC] hover:border-[#ffffff20]'
                                    }`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold">Send me a Free Sizing Kit first</span>
                                        <span className="text-xs text-[#A1A09A] mt-0.5">We ship the kit now, you pick your size later.</span>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                        selectedSize === 'kit' ? 'bg-[#F53003] border-[#F53003]' : 'border-[#ffffff20]'
                                    }`}>
                                        {selectedSize === 'kit' && <CheckCircle2 className="w-4 h-4 text-white" />}
                                    </div>
                                </button>
                            </div>

                            {/* Pricing & Checkout Buttons */}
                            <div className="pt-6 border-t border-[#ffffff10] flex flex-col gap-4">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-[#A1A09A] text-sm font-medium">Total Price:</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-3xl font-extrabold text-white">${selectedFinish.price}</span>
                                        <span className="text-xs text-emerald-500 font-semibold mt-1">Free Shipping Included</span>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setIsCartOpen(true)}
                                    className="w-full py-5 bg-[#F53003] hover:bg-[#D42600] text-white rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(245,48,3,0.3)] hover:shadow-[0_0_55px_rgba(245,48,3,0.5)] flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Order Olevra Ring
                                </button>

                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="flex items-center gap-2 text-xs text-[#A1A09A]">
                                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                        <span>30-Day Money Back</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-[#A1A09A]">
                                        <Truck className="w-4 h-4 text-emerald-500" />
                                        <span>Free Worldwide Shipping</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Highlights */}
                <section className="py-20 bg-[#070707] border-t border-b border-[#ffffff10]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-sm font-bold tracking-widest text-[#F53003] uppercase">Advanced Engineering</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-white">Lighter than a feather. Stronger than steel.</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-[#111110] border border-[#ffffff10] rounded-2xl p-6 hover:bg-[#151514] transition-all">
                                <Battery className="w-8 h-8 text-[#F53003] mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">7+ Day Battery Life</h3>
                                <p className="text-sm text-[#A1A09A]">Ultra-dense battery chemistry keeps you tracking for a full week on a single 30-min charge.</p>
                            </div>
                            <div className="bg-[#111110] border border-[#ffffff10] rounded-2xl p-6 hover:bg-[#151514] transition-all">
                                <Droplet className="w-8 h-8 text-[#F53003] mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Waterproof 50m</h3>
                                <p className="text-sm text-[#A1A09A]">Sauna, deep-sea diving, or dishwashing. Fully sealed 5 ATM durability rating.</p>
                            </div>
                            <div className="bg-[#111110] border border-[#ffffff10] rounded-2xl p-6 hover:bg-[#151514] transition-all">
                                <ShieldCheck className="w-8 h-8 text-[#F53003] mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Aerospace Titanium</h3>
                                <p className="text-sm text-[#A1A09A]">Machined from aerospace-grade Grade 5 titanium for maximum strength and extreme lightness (3g).</p>
                            </div>
                            <div className="bg-[#111110] border border-[#ffffff10] rounded-2xl p-6 hover:bg-[#151514] transition-all">
                                <Activity className="w-8 h-8 text-[#F53003] mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Active Bio-Sensors</h3>
                                <p className="text-sm text-[#A1A09A]">Infrared, red, and green LEDs tracking heart rate, HRV, blood oxygen, and temperature.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Accordion */}
                <section className="py-24 max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-10 h-10 text-[#F53003] mx-auto mb-4" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="bg-[#161615] border border-[#ffffff10] rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-white text-base md:text-lg focus:outline-none hover:bg-[#1e1e1d] transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-[#A1A09A] transition-transform duration-300 ${
                                            openFaq === index ? 'rotate-180 text-white' : ''
                                        }`} 
                                    />
                                </button>
                                
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        openFaq === index ? 'max-h-[300px] border-t border-[#ffffff10]' : 'max-h-0'
                                    }`}
                                >
                                    <p className="p-6 text-sm md:text-base text-[#A1A09A] leading-relaxed bg-[#111110]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Checkout Sidebar/Drawer Overlay */}
                {isCartOpen && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end transition-opacity duration-300">
                        {/* Drawer body */}
                        <div className="w-full max-w-md bg-[#0d0d0c] h-full border-l border-[#ffffff10] p-6 flex flex-col justify-between overflow-y-auto relative animate-[slideLeft_0.3s_ease-out]">
                            
                            {/* Close Button */}
                            <button 
                                onClick={resetCartFlow}
                                className="absolute top-6 right-6 text-[#A1A09A] hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Header */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-6 flex items-center gap-2">
                                    <ShoppingBag className="w-6 h-6 text-[#F53003]" />
                                    Your Order
                                </h3>

                                {checkoutStep === 'cart' && (
                                    <div className="flex flex-col gap-6">
                                        <div className="flex gap-4 p-4 rounded-2xl bg-[#161615] border border-[#ffffff10]">
                                            <div className="w-20 h-20 bg-black/30 rounded-xl border border-[#ffffff05] flex items-center justify-center p-1 shrink-0">
                                                <img src={selectedFinish.image} alt={selectedFinish.name} className="w-full h-full object-contain mix-blend-screen" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="font-bold text-white text-base">Olevra Smart Ring</span>
                                                <span className="text-xs text-[#A1A09A] mt-1">Finish: {selectedFinish.name}</span>
                                                <span className="text-xs text-[#A1A09A] mt-0.5">
                                                    Size: {selectedSize === 'kit' ? 'Sizing Kit (First)' : selectedSize ? `US ${selectedSize}` : 'Select a size'}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="bg-[#161615] border border-[#ffffff10] rounded-2xl p-4 flex flex-col gap-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-[#A1A09A]">Ring Cost</span>
                                                <span className="font-semibold text-white">${selectedFinish.price}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-[#A1A09A]">Sizing Kit</span>
                                                <span className="font-semibold text-emerald-500">FREE</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-[#A1A09A]">Shipping</span>
                                                <span className="font-semibold text-emerald-500">FREE</span>
                                            </div>
                                            <div className="flex justify-between text-sm border-t border-[#ffffff10] pt-3">
                                                <span className="text-white font-bold">Total</span>
                                                <span className="text-lg font-extrabold text-white">${selectedFinish.price}</span>
                                            </div>
                                        </div>

                                        {selectedSize === null && (
                                            <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-xl text-xs font-semibold leading-relaxed">
                                                Warning: Please choose a ring size or Sizing Kit first in the page options before checkout.
                                            </div>
                                        )}

                                        <button 
                                            disabled={selectedSize === null}
                                            onClick={() => setCheckoutStep('checkout')}
                                            className="w-full py-4 bg-[#F53003] hover:bg-[#D42600] disabled:bg-[#F53003]/40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            Checkout Form
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}

                                {checkoutStep === 'checkout' && (
                                    <form onSubmit={handlePlaceOrder} className="flex flex-col gap-5 mt-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-bold text-[#A1A09A] uppercase tracking-wider">Email Address</label>
                                            <input 
                                                required 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleFormChange}
                                                className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-bold text-[#A1A09A] uppercase tracking-wider">Full Name</label>
                                            <input 
                                                required 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleFormChange}
                                                className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-bold text-[#A1A09A] uppercase tracking-wider">Shipping Address</label>
                                            <input 
                                                required 
                                                type="text" 
                                                name="address"
                                                value={formData.address}
                                                onChange={handleFormChange}
                                                className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                placeholder="123 Wearable Way"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-bold text-[#A1A09A] uppercase tracking-wider">City</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleFormChange}
                                                    className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                    placeholder="San Francisco"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-bold text-[#A1A09A] uppercase tracking-wider">Zip / Postcode</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="zip"
                                                    value={formData.zip}
                                                    onChange={handleFormChange}
                                                    className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                    placeholder="94105"
                                                />
                                            </div>
                                        </div>

                                        <div className="border-t border-[#ffffff10] pt-4 mt-2">
                                            <h4 className="text-xs font-bold text-[#A1A09A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                                <CreditCard className="w-3.5 h-3.5 text-[#F53003]" />
                                                Card Details
                                            </h4>
                                            
                                            <div className="flex flex-col gap-3">
                                                <div className="flex flex-col gap-1.5">
                                                    <input 
                                                        required 
                                                        type="text" 
                                                        name="cardNum"
                                                        value={formData.cardNum}
                                                        onChange={handleFormChange}
                                                        className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                        placeholder="4111 2222 3333 4444"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input 
                                                        required 
                                                        type="text" 
                                                        name="cardExpiry"
                                                        value={formData.cardExpiry}
                                                        onChange={handleFormChange}
                                                        className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                        placeholder="MM/YY"
                                                    />
                                                    <input 
                                                        required 
                                                        type="text" 
                                                        name="cardCVC"
                                                        value={formData.cardCVC}
                                                        onChange={handleFormChange}
                                                        className="bg-[#161615] border border-[#ffffff10] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F53003] focus:ring-1 focus:ring-[#F53003]" 
                                                        placeholder="CVC"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 mt-4 bg-[#F53003] hover:bg-[#D42600] disabled:bg-[#F53003]/50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(245,48,3,0.2)]"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin"></span>
                                            ) : (
                                                <>
                                                    Place Order (${selectedFinish.price})
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}

                                {checkoutStep === 'success' && (
                                    <div className="flex flex-col items-center justify-center text-center py-12 px-4 gap-6 animate-[fadeIn_0.5s_ease-out]">
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-8 h-8 text-emerald-500 animate-[pulse_2s_infinite]" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-white">Order Confirmed!</h4>
                                            <p className="text-[#A1A09A] text-sm mt-2 leading-relaxed">
                                                Thank you, {formData.name || 'Valued Customer'}. We have sent your order confirmation to <strong>{formData.email || 'your email'}</strong>.
                                            </p>
                                        </div>

                                        <div className="w-full bg-[#161615] border border-[#ffffff10] rounded-2xl p-4 text-left flex flex-col gap-2 mt-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-[#A1A09A]">Order Details</span>
                                            <div className="flex justify-between text-xs text-white">
                                                <span>Finish</span>
                                                <span className="font-semibold">{selectedFinish.name}</span>
                                            </div>
                                            <div className="flex justify-between text-xs text-white">
                                                <span>Size</span>
                                                <span className="font-semibold">
                                                    {selectedSize === 'kit' ? 'Sizing Kit (First)' : `US ${selectedSize}`}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-xs text-white border-t border-[#ffffff10] pt-2 mt-1">
                                                <span>Total Charged</span>
                                                <span className="font-bold text-emerald-500">${selectedFinish.price}</span>
                                            </div>
                                        </div>

                                        <button 
                                            onClick={resetCartFlow}
                                            className="w-full py-3.5 bg-white text-black hover:bg-neutral-200 font-bold rounded-xl transition-all"
                                        >
                                            Back to Shop
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Footer info in Cart */}
                            {checkoutStep !== 'success' && (
                                <div className="text-center text-xs text-[#706f6c] border-t border-[#ffffff10] pt-4 mt-6">
                                    Your details are secured with 256-bit SSL encryption.
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                {/* Footer */}
                <footer className="py-8 bg-black text-center text-sm text-[#706f6c] border-t border-[#ffffff10]">
                    &copy; 2026 Olevra. All rights reserved.
                </footer>
            </div>
            
            {/* Embedded styles for animations */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes slideLeft {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />
        </>
    );
}
