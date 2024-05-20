import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGitlab, FaTelegram } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>Indonesia</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Bandung</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Existing Company:</span>
                                <span className='text-LightGray md:text-sm'>Sirclo</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>andy.silva270114@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>Andy Setiyawan</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone / WA:</span>
                                <span className='text-LightGray text-sm'>+6283822000035</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://mail.google.com/mail/?view=cm&fs=1&to=andy.silva270114@gmail.com" target='_blank' rel="noreferrer"><SiGmail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://t.me/AndyCungkrinx91" target='_blank' rel="noreferrer"><FaTelegram /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/andycungkrinx91" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://gitlab.com/andycungkrinx/" target='_blank' rel="noreferrer"><FaGitlab /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/andy-setiyawan-452396170/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/AndyCungkrinx" target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.instagram.com/andy.silva270114/" target='_blank' rel="noreferrer"><FaInstagram /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.facebook.com/dbreakingheart.mazta" target='_blank' rel="noreferrer"><FaFacebook /></a>
                </div>


                {/* <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" className="input_stylings" placeholder="Name" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="text" className="input_stylings" placeholder="Email" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} cols={50} className="input_stylings" placeholder="Message" />
                                </div>
                            </div>

                            <div className="my-4">
                                <button onClick={() => setIsOpen(true)} className="button"> SEND MESSAGE </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* success modal */}
            {/* <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
                    <a className='underline text-Snow' target='_blank' href=''>Be the one to integrate this!</a>
                </div>
            </Modal> */}
            <Footer />
        </BannerLayout>

    )
}

export default Contact