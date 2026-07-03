import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChatWidget } from '@/components/ChatWidget';

export function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
