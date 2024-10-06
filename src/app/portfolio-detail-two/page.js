'use client'
import React,{useState} from "react";
import Link from 'next/link';
import Image from "next/image";
import dynamic from 'next/dynamic'

const Navlight = dynamic(()=>import('../components/navlight'))
const Footer = dynamic(()=>import('../components/footer'))
const Switcher = dynamic(()=>import('../components/switcher'))
const ContactUs = dynamic(()=>import('../components/contactUs'))

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function DetailsTwo(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);

    const images = ["/images/portfolio/10.jpg", "/images/portfolio/2.jpg", "/images/portfolio/11.jpg","/images/portfolio/13.jpg", "/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/14.jpg", "/images/portfolio/12.jpg", "/images/portfolio/8.jpg", "/images/portfolio/9.jpg", "/images/portfolio/1.jpg","/images/portfolio/15.jpg", "/images/portfolio/16.jpg"]
   const data = [
    {
        id:0,
        image:"/images/portfolio/10.jpg"
    },
    {
        id:1,
        image:"/images/portfolio/2.jpg"
    },
    {
        id:2,
        image:"/images/portfolio/11.jpg"
    },
    {
        id:3,
        image:"/images/portfolio/13.jpg"
    },
    {
        id:4,
        image:"/images/portfolio/6.jpg"
    },
    {
        id:5,
        image:"/images/portfolio/7.jpg"
    },
    {
        id:6,
        image:"/images/portfolio/14.jpg"
    },
    {
        id:7,
        image:"/images/portfolio/12.jpg"
    },
    {
        id:8,
        image:"/images/portfolio/8.jpg"
    },
    {
        id:9,
        image:"/images/portfolio/9.jpg"
    },
    {
        id:10,
        image:"/images/portfolio/1.jpg"
    },
    {
        id:11,
        image:"/images/portfolio/15.jpg"
    },
    {
        id:12,
        image:"/images/portfolio/16.jpg"
    },
   ]
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = images[currentImageIndex];
    return(
        <>
          <Navlight/>
        <section className="relative table w-full py-32 lg:py-48  bg-no-repeat bg-top bg-cover" style={{backgroundImage:"url('/images/portfolio/bg-inner.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                    <ul className="list-none">
                        <li className="inline font-semibold text-white/60 me-2"> <span className="text-white">Client :</span> Calvin Carlo</li>
                        <li className="inline font-semibold text-white/60"> <span className="text-white">Date :</span> 13th March, 2023</li>
                    </ul>
                </div>
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
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0">
                        <div id="grid" className="">
                            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
                                <Masonry>
                                    {data.map((item,index)=>{
                                        return(
                                        <div className="picture-item p-1" key={index}>
                                            <div className="group relative block overflow-hidden rounded-xl duration-500">
                                                <Link href="" onClick={() => handleImageClick(item.id)} className="lightbox duration-500 group-hover:scale-105" title="">
                                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="" alt=""/>
                                                </Link>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                    nextSrc={images[(currentImageIndex + 1) % images.length]}

                    onCloseRequest={() => setisOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
            <div className="container relative md:mt-24 mt-16">
                <div className="flex mx-auto justify-center">
                    <div className="lg:w-2/3 md:w-full">
                        <div className="text-center">
                            <h4 className="text-3xl leading-normal font-semibold mb-6">Project Description</h4>
                            <p className="text-slate-400 dark:text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                            <p className="text-slate-400 dark:text-white/60 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}