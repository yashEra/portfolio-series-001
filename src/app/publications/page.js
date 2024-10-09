"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navlight = dynamic(() => import("../components/navlight"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/switcher"));

const Features = dynamic(() => import("../components/features"));
const Clients = dynamic(() => import("../components/clients"));
const ContactUs = dynamic(() => import("../components/contactUs"));

export default function Services() {
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
              Publications
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
              publications
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
      <section className="relative pt-16">
        <div className="container relative">
          <div className="">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="mb-4 md:text-2xl text-xl font-medium">
                Publications
              </h3>
              <div className="lg:col-span-7">
                <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl mx-16 text-left">
                  <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="font-semibold">
                          Anthony, D., Siriwardana, H., Ashvini, S., Pallewatta,
                          S., Samarasekara, S.M., Edirisinghe, S., Vithanage, M.
                          (2023).
                        </h2>
                        <p className="text-gray-500">
                          ‘Trends in marine pollution mitigation technologies:
                          Scientometric analysis of published literature
                          (1990-2022)’, Regional Studies in Marine Science,
                          Elsevier. Vol 66, 103156.
                        </p>
                        <p>
                          <a
                            href="https://doi.org/10.1016/j.rsma.2023.103156"
                            className="text-blue-500"
                          >
                            https://doi.org/10.1016/j.rsma.2023.103156
                          </a>
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="font-semibold">
                          Siriwardana, H., Samarasekara, R. S. M., & Anthony, D.
                          (2024).
                        </h2>
                        <p className="text-gray-500">
                          Measurements and analysis of nitrogen and phosphorus
                          in oceans: Practice, frontiers, and insights. Heliyon,
                          10(7), e28182.
                        </p>
                        <p>
                          <a
                            href="https://doi.org/10.1016/j.heliyon.2024.e28182"
                            className="text-blue-500"
                          >
                            https://doi.org/10.1016/j.heliyon.2024.e28182
                          </a>
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="font-semibold">
                          Sujivakand, J., Samarasekara, R. S. M., Siriwardana,
                          H. P. A. M., Anthony, D. R., & Siriwardana, H. (2023).
                        </h2>
                        <p className="text-gray-500">
                          Unmanned Aerial Vehicles (UAVs) for Coastal Protection
                          Assessment: A Study of Detached Breakwater and Groins
                          at Marawila Beach, Sri Lanka. Regional Studies in
                          Marine Science, 103282.
                        </p>
                        <p>
                          <a
                            href="https://doi.org/10.1016/j.rsma.2023.103282"
                            className="text-blue-500"
                          >
                            https://doi.org/10.1016/j.rsma.2023.103282
                          </a>
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="font-semibold">
                          Samarasekara, R., Siriwardana, A., & Anthony, D.
                          (2023).
                        </h2>
                        <p className="text-gray-500">
                          Recent Maritime Accidents: Chemicals and Plastic
                          Spills.
                        </p>
                        <p className="text-gray-500">
                          In M. Vithanage, A. P. De Alwis, & D. Botheju (Eds.),
                          Maritime Accidents and Environmental Pollution-The
                          X-Press Pearl Disaster Causes, Consequences, and
                          Lessons Learned (1st Edition). CRC Press.
                        </p>
                        <p>
                          <a
                            href="https://www.routledge.com/Maritime-Accidents-and-Environmental-Pollution---The-X-Press-Pearl-Disaster/Vithanage-Alwis-Botheju/p/book/9781032315270"
                            className="text-blue-500"
                          >
                            https://www.routledge.com/Maritime-Accidents-and-Environmental-Pollution---The-X-Press-Pearl-Disaster/Vithanage-Alwis-Botheju/p/book/9781032315270
                          </a>
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="font-semibold">
                          Gunawardana, I.W.G.A.S.D., Samarasekara, R.S.M.,
                          Anthony D.R. (2023).
                        </h2>
                        <p className="text-gray-500">
                          Flood risk management during Covid-19 Pandemic in Sri
                          Lanka: Driver-Pressure-State-Impact-Response (DPSIR)
                          Analysis.
                        </p>
                        <p className="text-gray-500">
                          8th International Conference on Humanities and Social
                          Sciences-IRCHSS 2023, Colombo, 16th and 17th March
                          2023.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h2 className="font-semibold">
                          Anthony, D.R., Kumanayake, R.P. (2023).
                        </h2>
                        <p className="text-gray-500">
                          Sustainable Construction Practices in Urban
                          Construction Projects in Sri Lanka.
                        </p>
                        <p className="text-gray-500">
                          Annual Technical Session of the Institute of
                          Environmental Professionals Sri Lanka, Virtual, 20th
                          March 2023.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative md:pb-24 pb-16">
        <ContactUs />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
