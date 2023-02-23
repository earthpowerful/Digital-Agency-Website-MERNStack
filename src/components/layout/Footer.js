import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { AmexIcon, MasterIcon, PaypalIcon, VisaIcon, AppleIcon, InstagramIcon, TwitterIcon, DiscordIcon } from '../../icon';
const listData = [
    {
        label: 'About Us',
        path: '/about'
    },
    {
        label: 'Refund Policy',
        path: '/refund'
    },
    {
        label: 'Privacy Policy',
        path: '/privacy'
    },
    {
        label: 'Terms of Service',
        path: '/service'
    },
    {
        label: 'Legal Notice',
        path: '/legal'
    },
    {
        label: 'Contact Information',
        path: '/contactinfo'
    }
];

const Footer = () => {
    return (
        <div>
            <div className='footer bg-[#0d1245]'>
                <div className='grid justify-center justify-items-center w-full shadow mb-[20px]'>
                    <p className='font-sm text-[#c471f5]'>NEWSLETTER FOR G'S</p>
                    <p className="font-sm text-[#c471f5] font-bold  text-[40px] my-[20px]">WEEKLY KNOWLEDGE EXCLUSIVELY FOR G'S.</p>
                    <div className="w-72 my-[15px]">
                        <Input color="purple" label="Email" icon={<i className="fas fa-heart" />} />
                    </div>
                </div>
                <div className='about border-t border-[#1b1a53]'>
                    <div className='flex aboutmission mb-[30px] mt-[20px]'>
                        <div className='aboutus w-[50%]'>
                            <p className='text-[20px] text-[#c471f5] mb-[20px] ml-[80px]'>ABOUT US</p>
                            <div className='aboutlist grid ml-[80px]'>
                                {listData.map((tab, idx) => {
                                    return (
                                        <Link
                                            to={tab.path}
                                            key={idx}
                                            className={"text-[#7f4db2] text-sm hover:text-indigo-200 mb-[10px] mr-[30px]"}
                                        >
                                            {tab.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='mission w-[50%]'>
                            <p className='text-[20px] text-[#c471f5] mb-[20px]'>Our Mission</p>
                            <p className='text-[#7f4db2] text-[15px] mr-[80px]'>
                                At Creatus Marketing Agency, our mission is to empower individuals with the necessary tools and resources to thrive in the ever-changing digital landscape. We strive to create a community of like-minded individuals who share a passion for personal growth and development. Our ecommerce store offers a wide range of courses and information to help individuals achieve their goals and enhance their skills. In addition, our agency provides free training and job opportunities in various industries, including tech and marketing. We believe that by offering these resources and opportunities, we can help individuals escape the constraints of traditional employment and become their own bosses.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center justify-items-center mb-[40px] sociallink'>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <DiscordIcon />
                        </a>
                    </div>
                </div>
                <div className='payment border-t border-[#1b1a53]' >
                    <div className='flex justify-center justify-items-center mt-[30px] payment' >
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <AmexIcon />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <AppleIcon />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <MasterIcon />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <PaypalIcon />
                        </a>
                        <a
                            href="javascript:void(0)"
                            className="px-4 py-2 text-gray-800 bg-none rounded-md shadow "
                        >
                            <VisaIcon />
                        </a>
                    </div>
                    <div className='pb-[50px]'>
                        <span className='copyright text-[#7f4db2] text-[13px] mt-[10px] ml-[50px]'>
                            @ 2023,
                            <a
                                href="/"
                                className="text-[#7f4db2] text-[13px] bg-none rounded-md shadow hover:text-indigo-200 "
                            >
                                CreatusMarketingAgency
                            </a>
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="fixed bottom-5 right-5 inline-block rounded-full bg-danger p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="h-4 w-4">
                        <path
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Footer
