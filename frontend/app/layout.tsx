import React from 'react';
import NavHeader from '@/components/layout/NavHeader';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import ScrollToTop from '@/components/layout/ScrollToTop';
import PopUpFloat from '@/components/PopUpFloat';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Times',
  description: 'Digital Times Africa is a multimedia agency that provides a platform promoting African innovation. We curate relevant and credible content for startups, entrepreneurs and technology lovers in Africa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      <div className={`flex flex-col justify-center items-center bg-white dark:bg-slate-800 ${inter.className}`}>
          <div className='xsm:w-10/12 w-11/12'>
            <header>
              <NavHeader />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
      </div>
      <PopUpFloat />
      <ScrollToTop />
      <Script src="https://platform.twitter.com/widgets.js" />
    </React.Fragment>
  )
}
