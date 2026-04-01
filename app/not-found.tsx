'use client';

import Link from 'next/link';
import { IconArrowLeft, IconAlertCircle } from '@tabler/icons-react';
import NavigationBarTop from '@/components/common/NavigationBarTop';
import Footer from '@/components/common/FooterSection';
import AnimatedContent from '@/components/AnimatedContent';
import BackgroundSection from '@/components/section/Background';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col selection:bg-blue-500/30">
      <NavigationBarTop />

      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-900/10 dark:via-neutral-950 dark:to-neutral-950 pointer-events-none z-0 transition-colors duration-300" />
      
      <BackgroundSection enableWaves={['bottom']} opacity={'30'}/>

      <main className="grow container mx-auto px-4 flex items-center justify-center relative z-10 pt-20">
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.8}
          className="max-w-2xl w-full text-center flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 backdrop-blur-sm transition-colors">
            <IconAlertCircle size={18} />
            <span>Error 404</span>
          </div>

          <h1 className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-linear-to-b from-blue-800 to-purple-400 dark:from-white dark:to-neutral-800 leading-none tracking-tighter mb-4 select-none drop-shadow-2xl transition-colors">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors">
            Page Not Found
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed transition-colors">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" passHref>
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-950 active:scale-95 cursor-pointer">
              <IconArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Homepage</span>
            </button>
          </Link>
        </AnimatedContent>
      </main>

      <Footer />
    </div>
  );
}