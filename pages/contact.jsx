import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import Footer from '../components/Footer';
import { NAME, CONTACTS, DETAILS, SOCIAL_LINKS } from '../constants/constants';
import Head from 'next/head';

const Contact = () => {
    return (
        <BannerLayout>
            <Head>
                <title>Contact | Andy Setiyawan</title>
                <meta name="description" content="Get in touch with me. Contact me for collaborations, opportunities, or any inquiries regarding CloudOps, DevOps, or AI infrastructure." key="desc" />
            </Head>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.Residence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.City}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Existing Company:</span>
                                <span className='text-LightGray md:text-sm'>Icube</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>{NAME}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone / WA:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACTS.EMAIL}`} target='_blank' rel="noreferrer"><SiGmail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.TELEGRAM} target='_blank' rel="noreferrer"><FaTelegram /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.INSTAGRAM} target='_blank' rel="noreferrer"><FaInstagram /></a>
                </div>
            </div>
            <Footer />
        </BannerLayout>

    )
}

export default Contact