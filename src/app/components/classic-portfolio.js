import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiCamera} from "../assets/icons/vander"

export default function ClassicPortfolio({gridclass, container}){
     
    const images = ["/images/portfolio/01.jpg", "/images/portfolio/02.jpg", "/images/portfolio/03.jpg","/images/portfolio/04.jpg", "/images/portfolio/05.jpg", "/images/portfolio/06.jpg", "/images/portfolio/07.jpg", "/images/portfolio/08.jpg", "/images/portfolio/09.jpg", "/images/portfolio/010.jpg", "/images/portfolio/011.jpg","/images/portfolio/012.jpg"]

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
            image:"/images/portfolio/01.jpg",
            category:"branding",
            title:"Iphone mockup",
            subtitle:'Branding'
        },
        {
            id:1,
            image:"/images/portfolio/02.jpg",
            category:"designing",
            title:"Mockup Collection",
            subtitle:'Mockup'
        },
        {
            id:2,
            image:"/images/portfolio/03.jpg",
            category:"photography",
            title:"Abstract images",
            subtitle:'Abstract'
        },
        {
            id:3,
            image:"/images/portfolio/04.jpg",
            category:"development",
            title:"Yellow bg with Books",
            subtitle:'Books'
        },
        {
            id:4,
            image:"/images/portfolio/05.jpg",
            category:"branding",
            title:"Company V-card",
            subtitle:'V-card'
        },
        {
            id:5,
            image:"/images/portfolio/06.jpg",
            category:"branding",
            title:"Mockup box with paints",
            subtitle:'Photography'
        },
        {
            id:6,
            image:"/images/portfolio/07.jpg",
            category:"designing",
            title:"Coffee cup",
            subtitle:'Cups'
        },
        {
            id:7,
            image:"/images/portfolio/08.jpg",
            category:"development",
            title:"Pen and article",
            subtitle:'Article'
        },
        {
            id:8,
            image:"/images/portfolio/09.jpg",
            category:"photography",
            title:"White mockup box",
            subtitle:'Color'
        },
        {
            id:9,
            image:"/images/portfolio/010.jpg",
            category:"photography",
            title:"Logo Vectors",
            subtitle:'Logos'
        },
        {
            id:10,
            image:"/images/portfolio/011.jpg",
            category:"branding",
            title:"Black and white T-shirt",
            subtitle:'Clothes'
        },
        {
            id:11,
            image:"/images/portfolio/012.jpg",
            category:"branding",
            title:"Yellow bg with cellphone",
            subtitle:'Cellphone'
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
            <div className="relative">
                <div className="grid container grid-cols-1 items-center gap-6">
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
                {container === false ?
                    <div className="container-fluid relative">
                    <div id="grid" className={gridclass}>
                        {filteredData.map((item,index)=>{
                            return(
                                
                                <div className="picture-item" data-groups='["branding"]' key={index}>
                                     <div className="group relative block overflow-hidden rounded-xl duration-500">
                                        <div className="relative overflow-hidden">
                                            <Link href="/portfolio-detail-one"><Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-xl" alt=""/></Link>

                                            <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-3 end-3 duration-500">
                                                <Link href="" onClick={() => handleImageClick(item.id)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl lightbox"><FiCamera className="h-[14px] w-[14px] align-middle"/></Link>
                                            </div>
                                        </div>
                                        <div className="content pt-3">
                                            <h5 className="mb-1"><Link href="/portfolio-detail-one" className="hover:text-orange-500 duration-500 font-semibold">{item.title}</Link></h5>
                                            <h6 className="text-slate-400 dark:text-white/60">{item.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>:

                <div className="container">
                    <div id="grid" className={gridclass}>
                        {filteredData.map((item,index)=>{
                            return(
                                
                                <div className="picture-item" data-groups='["branding"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                        <div className="relative overflow-hidden">
                                            <Link href="/portfolio-detail-one"><Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-xl" alt=""/></Link>

                                            <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-3 end-3 duration-500">
                                                <Link href="" onClick={() => handleImageClick(item.id)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl lightbox"><FiCamera className="h-[14px] w-[14px] align-middle"/></Link>
                                            </div>
                                        </div>
                                        <div className="content pt-3">
                                            <h5 className="mb-1"><Link href="/portfolio-detail-one" className="hover:text-orange-500 duration-500 font-semibold">{item.title}</Link></h5>
                                            <h6 className="text-slate-400 dark:text-white/60">{item.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">
                                        <i className="mdi mdi-chevron-left text-[20px] rtl:rotate-180"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">2</Link>
                                </li>
                                <li>
                                    <Link href="#" aria-current="page" className="z-10 w-8 h-8 inline-flex text-sm justify-center items-center text-white bg-orange-500 border border-orange-500">3</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">4</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">5</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-8 h-8 inline-flex text-sm justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500">
                                        <i className="mdi mdi-chevron-right text-[20px] rtl:rotate-180"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
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
        </>
    )
}