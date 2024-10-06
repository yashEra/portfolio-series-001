'use client'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic'

const Navbar = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(()=>import('../components/footer'))
const Switcher = dynamic(()=>import('../components/switcher'))

const About = dynamic(()=>import('../components/about'))
const Features = dynamic(()=>import('../components/features'))
const OurProjects = dynamic(()=>import('../components/ourProjexts'))
const Team = dynamic(()=>import('../components/team'))
const GetInTuch = dynamic(()=>import('../components/getInTuch'))

import { TypeAnimation } from 'react-type-animation';


export default function IndexTwo(){
    const logo = ["/images/logos/circle-logo.png","/images/logos/android.png","/images/logos/google-logo.png","/images/logos/facebook-logo.png","/images/logos/lenovo-logo.png","/images/logos/linkedin.png","/images/logos/skype.png","/images/logos/spotify.png","/images/logos/telegram.png","/images/logos/whatsapp.png"]
    return(
        <>
        <Navbar/>
        <section className="relative table w-full md:py-44 py-36 overflow-hidden before:content-[''] before:absolute before:start-1/2 before:-translate-x-1/2 rtl:before:translate-x-1/2 before:bottom-1/2 before:translate-y-1/2 before:w-[40rem] before:h-[20rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-orange-500/10 dark:before:bg-orange-500/20">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <div>
                        <Image src="/images/hero.jpg" width={112} height={112} className="h-28 w-28 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>

                        <h5 className="font-semibold leading-normal text-[20px] mt-6">Hi, I am 
                            <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Calvin Carlo',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Freelancer',
                                        1000,
                                        'Website Designer',
                                        1000,
                                        'Web Developers',
                                        1000,
                                        'UI/UX Designer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    className="typewrite ms-3"
                                    repeat={Infinity}
                                    />

                        </h5>
                    
                        <h5 className="md:text-5xl md:leading-normal text-3xl leading-normal font-bold mt-3">Complete Solution <br/> for Your Brand</h5>

                        <p className="text-slate-400 dark:text-white/60 mx-auto text-[17px] max-w-xl mt-4">Muvico is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>

                        <div className="relative mt-6">
                            <Link href="/aboutus" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Explore Work <i className="mdi mdi-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="grid md:grid-cols-10 sm:grid-cols-5 grid-cols-4 justify-center gap-6">
                    {logo.map((item,index)=>{
                        return(
                        <div key={index} className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-xl mx-auto py-4">
                            <Image src={item} width={28} height={28} className="h-7" alt=""/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="relative overflow-hidden md:pb-24 pb-16">
            <About/>
            <OurProjects containerFuild = {true}/>
            <Features/>
            <Team/>
            <GetInTuch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}