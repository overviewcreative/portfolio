import { ReactNode } from 'react';
import { Header } from '@/components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom py-12">
          <p className="text-center text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
