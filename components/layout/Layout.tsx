import { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StickyCTA from '../StickyCTA';
import BackToTop from '../BackToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyCTA />
      <BackToTop />
    </div>
  );
}
