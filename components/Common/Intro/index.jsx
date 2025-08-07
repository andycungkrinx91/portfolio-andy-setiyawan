import Link from 'next/link';
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Languages from './Languages';
import Location from './Location';
import Skills from './Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import Andy from '../../../public/compressed/andy.webp';
import TechStack from './TechStack';

const Intro = () => {
  const socialIcons = {
    TELEGRAM: <FaTelegram />,
    LINKEDIN: <FaLinkedin />,
    GITHUB: <FaGithub />,
    INSTAGRAM: <FaInstagram />,
  };

  return (
    <>
      {/* fixed at top */}      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-[280px] top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
        <Image className='w-32 h-32 rounded-full' src={Andy} alt='profile picture' />
        <div className='flex flex-col items-center justify-center'>
          <span className='text-gray-300 text-base font-bold break-normal'>{NAME}</span>
          <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION}</span>
        </div>
      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-[280px] space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
        <Contact />
        <Location />
        <Languages />
        <Skills />
        <TechStack />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
        {Object.entries(SOCIAL_LINKS).map(([key, link]) => (
          <Link key={key} href={link} target='_blank' rel='noreferrer' className=''>
            {socialIcons[key]}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Intro;
