import Intro from '../components/Common/Intro';
import Nav from '../components/Common/Nav/Nav';
import { FaBars, FaMousePointer } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const router = useRouter();
  const canonicalUrl = `https://portfolio-andy-setiyawan.vercel.app${router.asPath === '/' ? '' : router.asPath}`;

  return (
    
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
      <Head>
        <title>Andy Setiyawan | CloudOps & DevOps Engineer Portfolio</title>
        <meta name="description" content="I'm Andy Setiyawan, a CloudOps & DevOps Engineer with 5+ years of experience in GCP, AWS, and Kubernetes. Specializing in IaC, CI/CD, and AI infrastructure. Explore my portfolio." key="desc" />
        <meta property="og:title" content="Andy Setiyawan | CloudOps & DevOps Engineer Portfolio" />
        <meta
          property="og:description"
          content="I'm Andy Setiyawan, a CloudOps & DevOps Engineer with 5+ years of experience in GCP, AWS, and Kubernetes. Specializing in IaC, CI/CD, and AI infrastructure. Explore my portfolio."
        />
        <meta
          property="og:image"
          content="https://portfolio-andy-setiyawan.vercel.app/compressed/avatar.webp"
        />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
      <div className='lg:hidden'>
        <div className=' bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative'>
          <button type="button" aria-label="Open user intro" className='icon flex items-center gap-x-2' onClick={(e) => setIntro(!intro)}>
            <span className='icon border-2 text-Green border-Green p-1 text-sm rounded-lg'>
              <SlOptionsVertical />
            </span>
            <div className='text-Snow absolute -right-1 -bottom-1'>
              <FaMousePointer />
            </div>
          </button>
          <button type="button" aria-label="Open navigation menu" className='icon flex items-center gap-x-2' onClick={(e) => setIsOpen(!isOpen)}>
            <span className='icon border-2 text-Green border-Green p-1 text-sm rounded-lg'>
              {' '}
              <FaBars />
            </span>
          </button>
        </div>
      </div>
      <div className='flex relative h-full justify-between gap-x-3'>
        {/* left most side */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col  lg:relative ${
            intro ? 'flex absolute' : 'hidden'
          }`}>
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* overlay */}
        {intro && <div onClick={(e) => setIntro(false)} className='fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40'></div>}

        {/* middle of screen */}
        <div className='w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>

        {/* right side */}
        {/* right side */}
        <div className={`hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}>
          <button type="button" aria-label="Open navigation menu" onClick={(e) => setIsOpen(!isOpen)} className='bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl w-full'>
            <span className='icon border-2 border-Green p-2 rounded-xl'>
              {' '}
              <FaBars />
            </span>
          </button>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest'>
            NavBar
          </span>
        </div>
        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      <Analytics />
    </div>
  );
}
