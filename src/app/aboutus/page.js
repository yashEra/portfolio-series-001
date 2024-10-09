"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navlight = dynamic(() => import("../components/navlight"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));

const Features = dynamic(() => import("../components/features"));
const Team = dynamic(() => import("../components/team"));
const Clients = dynamic(() => import("../components/clients"));
const ContactUs = dynamic(() => import("../components/contactUs"));

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navlight />
      <section
        className="relative table w-full py-32 lg:py-40 bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: "url('/images/portfolio/bg-inner.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-3xl leading-normal font-medium text-white">
              About Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle"></i>
            </li>
            <li
              className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white"
              aria-current="page"
            >
              About Us
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/images/about.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                />
                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                  {/* <Link
                    href="#!"
                    onClick={() => setOpen(true)}
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-950 text-orange-500"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link> */}
                </div>
                {/* <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="S_CGed6E610"
                                    onClose={() => setOpen(false)} 
                                /> */}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  Damsara Rasandun
                </h3>

                <p className="text-slate-400 dark:text-white/60 max-w-2xl mx-auto">
                  I am a dedicated civil engineer committed to advancing the
                  field through research, education, and innovation in academia.
                  With a strong academic background and practical experience, I
                  focus on green buildings, sustainable environments,
                  construction management, and environmental pollution. As an
                  educator, I inspire and mentor students, fostering critical
                  thinking and problem-solving skills while emphasizing
                  collaboration and interdisciplinary work. Additionally, I am a
                  passionate musician with professional experience as a pianist,
                  bass guitarist, and rhythm guitarist, having performed live
                  and managed bands, as well as working in sound engineering and
                  studio recordings.
                </p>

                <div className="relative mt-8">
                  <Link
                    href="/aboutus"
                    className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"
                  >
                    Read More <i className="mdi mdi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative pt-16">
          <div className="container relative">
            <div className="">
              <div className="grid grid-cols-1 text-left">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  Qualifications
                </h3>
                <div className="lg:col-span-7">
                  <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                    <ul
                      className="w-full text-left px-16 px-6"
                      style={{ textAlign: "left" }}
                    >
                      <li className="mt-2 text-left">
                        BScEngHons (First Class) in Civil Engineering (General
                        Sir John Kotelawala Defence University, Sri Lanka)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-16">
          <div className="container relative">
            <div className="">
              <div className="grid grid-cols-1 text-left">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  Research Interests
                </h3>
                <div className="lg:col-span-7">
                  <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                    <ul
                      className="w-full text-left px-16 px-6"
                      style={{ textAlign: "left"}}
                    >
                      <li className="mt-2 text-left">
                        Sustainable Design and Construction
                      </li>
                      <li className="mt-2">Construction Project Management</li>
                      <li className="mt-2">Green Buildings and Materials</li>
                      <li className="mt-2">Marine Pollution and Environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-16">
          <div className="container relative">
            <div className="">
              <div className="grid grid-cols-1 text-left">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  Memberships
                </h3>
                <div className="lg:col-span-7">
                  <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                    <ul
                      className="w-full text-left px-6"
                      style={{ textAlign: "left" }}
                    >
                      <li className="mt-2 text-left">
                        Student Member, Institution of Civil Engineers (UK) -
                        Membership Number 91784892 (2019-2021)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-16">
          <div className="container relative">
            <div className="">
              <div className="grid grid-cols-1 text-left">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  Specialized fields
                </h3>
                <div className="lg:col-span-7">
                  <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                    <ul
                      className="w-full text-left px-6"
                      style={{ textAlign: "left" }}
                    >
                      <li className="mt-2 text-left">
                        Student Member, Institution of Civil Engineers (UK) -
                        Membership Number 91784892 (2019-2021)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-16">
          <div className="container relative">
            <div className="">
              <div className="grid grid-cols-1 pb-6 text-cente">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  Research grants
                </h3>
                <div className="lg:col-span-7">
                  <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                    <ul
                      className="w-full text-left px-6"
                      style={{ textAlign: "left" }}
                    >
                      <li className="mt-2 text-left">
                        Student Member, Institution of Civil Engineers (UK) -
                        Membership Number 91784892 (2019-2021)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-6">
          <div className="container relative">
            <div className="">
              <div className="grid grid-cols-1 pb-6 text-left">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">Awards</h3>
                <div className="lg:col-span-7">
                  <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                    <ul
                      className="w-full text-left px-16"
                      style={{ textAlign: "left" }}
                    >
                      <li className="mt-2 text-left">
                        Student Member, Institution of Civil Engineers (UK) -
                        Membership Number 91784892 (2019-2021)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactUs />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
