import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Clients(){

    const teamData = [
        {
            image:"/images/team/01.jpg",
            name:'Thomas Israel',
            title:'C.E.O',
            desc:"I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
            image2:"/images/team/02.jpg",
            name2:'Barbara McIntosh',
            title2:'C.E.O',
            desc2:"There are so many things I had to do with my old software that I just dont do at all with Techwind. Suspicious but I cant say I dont love it.",
        },
        {
            image:"/images/team/03.jpg",
            name:'Carl Oliver',
            title:'C.E.O',
            desc:"The best part about Techwind is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
            image2:"/images/team/04.jpg",
            name2:'Jill Webb',
            title2:'C.E.O',
            desc2:"Im trying to get a hold of someone in support, Im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
        },
        {
            image:"/images/team/05.jpg",
            name:'Barbara McIntosh',
            title:'C.E.O',
            desc:"I used to have to remit tax to the EU and with Techwind I somehow dont have to do that anymore. Nervous to travel there now though.",
            image2:"/images/team/06.jpg",
            name2:'Janisha Doll',
            title2:'C.E.O',
            desc2:"This is the fourth email Ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
        },
    ]
    return(
        <>
        <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium">Client Review</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {teamData.map((item,index) =>{
                        return(
                            <ul className="space-y-6" key={index}>
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <Image src={item.image} width={56} height={56} className="h-14 w-14 rounded-full shadow dark:shadow-gray-800" alt=""/>
    
                                    <div className="ps-3">
                                        <Link href="" className="text-[16px] font-medium hover:text-orange-500 duration-500">{item.name}</Link>
                                        <p className="text-slate-400 dark:text-white/60">{item.title}</p>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">{item.desc}</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </li>
    
                            <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <Image src={item.image2} width={56} height={56} className="h-14 w-14 rounded-full shadow dark:shadow-gray-800" alt=""/>
    
                                    <div className="ps-3">
                                        <Link href="" className="text-[16px] font-medium hover:text-orange-500 duration-500">{item.name2}</Link>
                                        <p className="text-slate-400 dark:text-white/60">{item.title2}</p>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <p className="text-slate-400 dark:text-white/60">{item.desc2}</p>
                                    <ul className="list-none mb-0 text-amber-400 mt-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        )
                    })}
                </div>
            </div> 
        </>
    )
}