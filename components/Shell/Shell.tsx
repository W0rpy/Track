'use client';

import {useEffect} from 'react';

import Header from '@/components/Header/Header';
import TopSection from '@/components/TopSection/TopSection';
import About from '@/components/About/About';
import Works from '@/components/Works/Works';
import Pricing from '@/components/Pricing/Pricing';
import Questions from '@/components/Questions/Questions';
import Footer from '@/components/Footer/Footer';

function Shell() {
  useEffect(() => {
    const links: any = document.querySelectorAll('a[href*="#"]');

    for (let link of links) {
      link.addEventListener('click', function (e: {preventDefault: () => void}) {
        e.preventDefault();

        const attribute = link.getAttribute('href').substr(1);
        const id: HTMLElement | null = document.getElementById(attribute);
        if (id) {
          id.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
  }, []);
  return (
    <>
      <Header />
      <main>
        <TopSection />
        <About />
        <Works />
        <Pricing />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
export default Shell;
