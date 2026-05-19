import { Link, usePage } from '@inertiajs/react';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { auth } = usePage().props;

    return (
        <div className="dark min-h-screen bg-[#0a0a0a] text-[#EDEDEC] font-sans selection:bg-[#F53003] selection:text-white flex flex-col lg:flex-row relative">
            
            {/* Top Right Navigation */}
            <div className="absolute top-8 right-8 z-50 flex items-center gap-6">
                <Link href="/" className="text-sm font-medium text-[#A1A09A] hover:text-white transition-colors">
                    Home
                </Link>
                <Link href="/about" className="text-sm font-medium text-[#A1A09A] hover:text-white transition-colors">
                    About
                </Link>
            </div>

            {/* Left Side: Brand Identity (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#050505] border-r border-[#ffffff10] flex-col items-center justify-center p-12">
                {/* Subtle Abstract Dark Red Glowing Gradient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F53003]/20 rounded-full blur-[140px] pointer-events-none"></div>
                
                {/* Brand Logo & Content */}
                <div className="relative z-10 text-center">
                    <div className="text-6xl font-bold tracking-tighter text-white mb-6">Olevra.</div>
                    <p className="text-lg text-[#A1A09A] max-w-md mx-auto leading-relaxed">
                        Precision biometrics in a sleek titanium ring. <br/> Zero hidden fees. 100% your data.
                    </p>
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative bg-[#0a0a0a]">
                {/* Mobile Glow Effect (Since left side is hidden on mobile) */}
                <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#F53003]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="w-full max-w-sm relative z-10">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-10 mt-8">
                        <div className="text-4xl font-bold tracking-tighter text-white">Olevra.</div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
                            <p className="text-sm text-[#A1A09A]">
                                {description}
                            </p>
                        </div>
                        
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
