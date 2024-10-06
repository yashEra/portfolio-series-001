import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function OurProjectTwo(){
    
    const images = ["/images/portfolio/10.jpg", "/images/portfolio/2.jpg", "/images/portfolio/11.jpg","/images/portfolio/13.jpg", "/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/14.jpg", "/images/portfolio/12.jpg", "/images/portfolio/8.jpg", "/images/portfolio/9.jpg", "/images/portfolio/1.jpg","/images/portfolio/15.jpg","/images/portfolio/16.jpg"]

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
            image:"/images/portfolio/10.jpg",
            category:"designing"
        },
        {
            id:1,
            image:"/images/portfolio/2.jpg",
            category:"photography"
        },
        {
            id:2,
            image:"/images/portfolio/11.jpg",
            category:"branding"
        },
        {
            id:3,
            image:"/images/portfolio/13.jpg",
            category:"branding"
        },
        {
            id:4,
            image:"/images/portfolio/6.jpg",
            category:"designing"
        },
        {
            id:5,
            image:"/images/portfolio/7.jpg",
            category:"development"
        },
        {
            id:6,
            image:"/images/portfolio/14.jpg",
            category:"development"
        },
        {
            id:7,
            image:"/images/portfolio/12.jpg",
            category:"development"
        },
        {
            id:8,
            image:"/images/portfolio/8.jpg",
            category:"development"
        },
        {
            id:9,
            image:"/images/portfolio/9.jpg",
            category:"designing"
        },
        {
            id:10,
            image:"/images/portfolio/1.jpg",
            category:"development"
        },
        {
            id:11,
            image:"/images/portfolio/15.jpg",
            category:"branding"
        },
        {
            id:12,
            image:"/images/portfolio/16.jpg",
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
          <div className="container relative md:mt-24 mt-16">
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
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1050:4,}}
                    >
                        <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                    <div className="p-1 picture-item" data-groups='["designing"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                        <Link href="" onClick={() => handleImageClick(item.id)} className="lightbox duration-500 group-hover:scale-105" title="">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:"auto"}} className="" alt=""/>
                                        </Link>
                                        <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded-xl shadow dark:shadow-gray-800">
                                            <Link href="/portfolio-detail-two" className="hover:text-orange-500 text-[15px] duration-500 font-medium">Iphone mockup</Link>
                                            <h6 className="text-slate-400 dark:text-white/60">Branding</h6>
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
                           
                        </Masonry>
                    </ResponsiveMasonry>

            </div>
        </>
    )
}