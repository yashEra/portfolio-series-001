import React from "react";
import Link from "next/link";
import Image from "next/image";

import { blogData } from "../data/data";
export default function Blog(){
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Our Latest News</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {blogData.slice(0,3).map((item,index)=>{
                        return(
                        <div className="group" key={index}>
                            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="" alt=""/>
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                                    <Image src={item.image1} width={36} height={36} className="h-9 w-9 rounded-xl" alt=""/>
                                    <div className="ms-2">
                                        <Link href="" className="text-white hover:text-orange-500 text-[15px]">{item.athor}</Link>
                                        <p className="text-white/70 text-sm">5 Min Read</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <Link href={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-orange-500 duration-500">{item.title}</Link>
                                <p className="text-slate-400 dark:text-white/60 mt-3">{item.desc}</p>
                                
                                <div className="mt-3">
                                    <Link href={`/blog-detail/${item.id}`} className="hover:text-orange-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}