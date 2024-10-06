'use client'
import React from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic'

const Navlight = dynamic(()=>import('../components/navlight'))
const Footer = dynamic(()=>import('../components/footer'))
const Switcher = dynamic(()=>import('../components/switcher'))

const CreativePortfolio = dynamic(()=>import('../components/creative-portfolio'))
const ContactUs = dynamic(()=>import('../components/contactUs'))

export default function CreativeFour(){
    return(
        <>
         <Navlight/>
        <section className="relative table w-full py-32 lg:py-40 bg-no-repeat bg-top bg-cover" style={{backgroundImage:"url('/images/portfolio/bg-inner.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-3 text-3xl leading-normal font-medium text-white">Portfolio & Works</h3>

                    <p className="text-white/70 text-base max-w-xl mx-auto">Showcase of Our Awesome Works in Two Columns</p>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Muvico</Link></li>
                   <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right align-middle"></i></li>
                   <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white"><Link href="">Portfolio</Link></li>
                   <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right align-middle"></i></li>
                    <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white" aria-current="page">Creative</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <CreativePortfolio gridclass="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 gap-[30px] px-4 " container={false}/>
           <ContactUs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}