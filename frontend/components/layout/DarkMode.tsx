import { useState, useEffect } from 'react';
import ThemeIconDark from '@/assets/img/icons/theme_icon_crescent_moon.svg';
import ThemeIconLight from '@/assets/img/icons/theme_icon_sun.svg';
import Image from 'next/image';

export default function Darkmode() {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex justify-center items-center">
      {theme === 'dark' && (
        <div onClick={toggleTheme} className="xmd:flex justify-center items-center gap-2 py-1 px-3 rounded border border-primary-white text-primary-white hover:bg-btn-black hover:border-btn-black focus:outline-none">
          <Image src={ThemeIconDark} alt="" />
          <span className="hidden lg:block text-xs font-medium">Turn on Light theme</span>
        </div>
      )}

      {theme === 'light' && (
        <div onClick={toggleTheme} className="xmd:flex justify-center items-center gap-2 py-1 px-3 rounded border border-primary-blue text-primary-black hover:bg-primary-green hover:border-primary-green focus:outline-none">
          <Image src={ThemeIconLight} alt="" />
          <span className="hidden lg:block text-xs font-medium">Turn on Dark theme</span>
        </div>
      )}
    </div>
  );
}
