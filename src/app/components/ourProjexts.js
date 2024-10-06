import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiCamera} from "../assets/icons/vander"

export default function OurProjects({containerFuild}){
    
    const images = ["/images/portfolio/1.jpg", "/images/portfolio/2.jpg", "/images/portfolio/3.jpg","/images/portfolio/4.jpg", "/images/portfolio/5.jpg", "/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/8.jpg", "/images/portfolio/23.jpg", "/images/portfolio/20.jpg", "/images/portfolio/21.jpg","/images/portfolio/22.jpg"]

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);

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

    const projectData = [
        {
            id:0,
            image:"/images/portfolio/1.jpg",
            category:"branding"
        },
        {
            id:1,
            image:"/images/portfolio/2.jpg",
            category:"designing"
        },
        {
            id:2,
            image:"/images/portfolio/3.jpg",
            category:"photography"
        },
        {
            id:3,
            image:"/images/portfolio/4.jpg",
            category:"development"
        },
        {
            id:4,
            image:"/images/portfolio/5.jpg",
            category:"branding"
        },
        {
            id:5,
            image:"/images/portfolio/6.jpg",
            category:"branding"
        },
        {
            id:6,
            image:"/images/portfolio/7.jpg",
            category:"designing"
        },
        {
            id:7,
            image:"/images/portfolio/8.jpg",
            category:"development"
        },
        {
            id:8,
            image:"/images/portfolio/23.jpg",
            category:"photography"
        },
        {
            id:9,
            image:"/images/portfolio/20.jpg",
            category:"photography"
        },
        {
            id:10,
            image:"/images/portfolio/21.jpg",
            category:"branding"
        },
        {
            id:11,
            image:"/images/portfolio/22.jpg",
            category:"branding"
        },
    ]
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };
    const filteredData = selectedCategory
    ? projectData.filter((item) => item.category === selectedCategory)
    : projectData;
    return(
        <>
         <div className="relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Our Projects</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className=" container grid grid-cols-1 items-center mt-6 gap-6">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter filter-options space-x-3">
                                <li className={`${selectedCategory === null ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === "branding" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="branding" onClick={() => matchCategory("branding")}>Branding</li>
                                <li className={`${selectedCategory === "designing" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="designing" onClick={() => matchCategory('designing')} >Designing</li>
                                <li className={`${selectedCategory === "photography" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === "development" ? "active" : "" } inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

              {containerFuild ? 
                <div className="container-fluid relative">
                    <div id="grid" className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px] lg:px-6 px-4">
                    {filteredData.map((item,index)=>{
                        return(
                         <div className=" picture-item" data-groups='["designing"]' key={index}>
                         <div className="group relative block overflow-hidden rounded-xl duration-500">
                             <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="group-hover:origin-center group-hover:scale-125 duration-500" alt=""/>
                             <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>
 
                             <div className="content duration-500">
                                 <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                     <Link href="" onClick={() => handleImageClick(item.id)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl lightbox"><FiCamera className="h-[14px] w-[14px] align-middle"/></Link>
                                 </div>
 
                                 <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                     <Link href="/portfolio-detail-three" className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">Mockup Collection</Link>
                                     <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
                                 </div>
                             </div>
                         </div>
                     </div>
 
                        )
                    })}
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
                    </div>
                </div> :
                <div className="container relative">
                    <div id="grid" className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-4 gap-[30px]">
                    {filteredData.map((item,index)=>{
                        return(
                        <div className="" data-groups='["branding"]' key={index}>
                            <div className="group relative block rounded-xl duration-700 ease-in-out">
                                <div className="relative overflow-hidden rounded-xl">
                                    <Link href="" onClick={() => handleImageClick(item.id)} className="lightbox" title="">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-xl" alt=""/>
                                    </Link>
                                </div>
                                <div className="content duration-700 ease-in-out">
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
                                        <Link href="/portfolio-detail-three" className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">Mockup Collection</Link>
                                        <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
                            </div>
                        </div>
                        )
                    })}
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
                    </div>
                </div>
              }
            </div>
        </>
    )
}