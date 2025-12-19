import { ReactNode } from 'react';
import { Header } from '@/components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <footer style={{backgroundColor: 'var(--color-light)'}}>
        <div className="container-custom py-12">
          <p className="text-center" style={{color: 'var(--color-dark)'}}>
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
