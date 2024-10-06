import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
 
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function MasonryPortfolio({BreakPoints, container, gridclass}){
     
    const images = ["/images/portfolio/10.jpg", "/images/portfolio/2.jpg", "/images/portfolio/11.jpg","/images/portfolio/13.jpg", "/images/portfolio/6.jpg", "/images/portfolio/7.jpg", "/images/portfolio/14.jpg", "/images/portfolio/12.jpg", "/images/portfolio/8.jpg", "/images/portfolio/9.jpg", "/images/portfolio/1.jpg","/images/portfolio/15.jpg", "/images/portfolio/16.jpg"]

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
            category:"branding",
            title:"Iphone mockup",
            subtitle:'Branding'
        },
        {
            id:1,
            image:"/images/portfolio/2.jpg",
            category:"designing",
            title:"Mockup Collection",
            subtitle:'Mockup'
        },
        {
            id:2,
            image:"/images/portfolio/11.jpg",
            category:"photography",
            title:"Abstract images",
            subtitle:'Abstract'
        },
        {
            id:3,
            image:"/images/portfolio/13.jpg",
            category:"development",
            title:"Yellow bg with Books",
            subtitle:'Books'
        },
        {
            id:4,
            image:"/images/portfolio/6.jpg",
            category:"branding",
            title:"Company V-card",
            subtitle:'V-card'
        },
        {
            id:5,
            image:"/images/portfolio/7.jpg",
            category:"branding",
            title:"Mockup box with paints",
            subtitle:'Photography'
        },
        {
            id:6,
            image:"/images/portfolio/14.jpg",
            category:"designing",
            title:"Coffee cup",
            subtitle:'Cups'
        },
        {
            id:7,
            image:"/images/portfolio/12.jpg",
            category:"development",
            title:"Pen and article",
            subtitle:'Article'
        },
        {
            id:8,
            image:"/images/portfolio/8.jpg",
            category:"photography",
            title:"White mockup box",
            subtitle:'Color'
        },
        {
            id:9,
            image:"/images/portfolio/9.jpg",
            category:"photography",
            title:"Logo Vectors",
            subtitle:'Logos'
        },
        {
            id:10,
            image:"/images/portfolio/1.jpg",
            category:"branding",
            title:"Black and white T-shirt",
            subtitle:'Clothes'
        },
        {
            id:11,
            image:"/images/portfolio/15.jpg",
            category:"branding",
            title:"Yellow bg with cellphone",
            subtitle:'Cellphone'
        },
        {
            id:12,
            image:"/images/portfolio/16.jpg",
            category:"development",
            title:"Iphone mockup",
            subtitle:'Branding'
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
                    <div className="container-fluid relative px-4">
                        <ResponsiveMasonry columnsCountBreakPoints ={BreakPoints}>
                            <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                    
                                    <div className="picture-item p-1" data-groups='["branding"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                            <Link href="" onClick={() => handleImageClick(item.id)} className="lightbox duration-500 group-hover:scale-105" title="">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="" alt=""/>
                                            </Link>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded-xl shadow dark:shadow-gray-800">
                                                <Link href="/portfolio-detail-two" className="hover:text-orange-500 text-[15px] duration-500 font-medium">{item.title}</Link>
                                                <h6 className="text-slate-400 dark:text-white/60">{item.subtitle}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </Masonry>
                        </ResponsiveMasonry>
                </div>:

                <div className="container">
                    <div className={gridclass}>
                        <ResponsiveMasonry columnsCountBreakPoints ={BreakPoints}>
                            <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                    
                                    <div className="picture-item p-1" data-groups='["branding"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-xl duration-500">
                                            <Link href="" onClick={() => handleImageClick(item.id)} className="lightbox duration-500 group-hover:scale-105" title="">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="" alt=""/>
                                            </Link>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded-xl shadow dark:shadow-gray-800">
                                                <Link href="/portfolio-detail-two" className="hover:text-orange-500 text-[15px] duration-500 font-medium">{item.title}</Link>
                                                <h6 className="text-slate-400 dark:text-white/60">{item.subtitle}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </Masonry>
                        </ResponsiveMasonry>
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