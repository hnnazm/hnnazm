"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MdLink } from "react-icons/md";
import {
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";
import {
  TbWorld,
  TbDeviceMobile,
  TbCloud,
  TbTerminal2
} from "react-icons/tb";
import { BiSolidFilePdf } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";

export default function Contact() {
  const expertises = [
    {
      field: "Web Application",
      level: 100,
      description: "Provide a full stack solutions ranging from corporate website, e-commerce, inventory system, social platform and many more.",
      icon: <TbWorld size={32} color="#005180" />
    },
    {
      field: "Mobile Application",
      level: 100,
      description: "Production of a hybrid application that can run natively on Android and iOS that suits your business needs.",
      icon: <TbDeviceMobile size={32} color="#005180" />
    },
    {
      field: "Cloud Computing",
      level: 100,
      description: "Plan, deploy, and optimize current infrastructure to level up your business with high availability and scalability.",
      icon: <TbCloud size={32} color="#005180" />
    },
    /* {
      field: "Automation",
      level: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      icon: <TbTerminal2 size={32} color="#005180" />
    }, */
  ];

  return (
    <div className="h-screen pb-14 relative flex flex-col text-slate-900 bg-stone-100 overflow-auto">
      <div className="flex justify-center items-center bg-profile bg-gray-900/60 bg-blend-multiply object-cover h-48 md:h-72 w-full bg-cover bg-center">
        <span className="px-5 flex flex-col">
          <FaQuoteLeft className="text-stone-200" />
          <blockquote className="text-2xl md:text-4xl text-stone-200 font-amaticSC font-bold">
            If the why is powerful, the how will be easy
          </blockquote>
          <FaQuoteRight className="self-end text-stone-200" />
        </span>
      </div>

      <div className="-mt-10 px-10 md:px-96 flex flex-row space-x-3">

        <div className="p-1 bg-stone-100 rounded-full">
          <img
            src="/profile.jpeg"
            className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] rounded-full border-4 border-primary-lighter p-1" />
        </div>


        <div className="mb-2 self-end md:self-center">
          <h1 className="text-xl md:text-3xl font-bold">Hannan Azmi</h1>
          <h2 className="text-xs md:text-sm text-slate-500 leading-tight">Software Engineer</h2>
        </div>
      </div>

      <div className="md:mx-auto mt-2 md:-mt-12 px-10 md:px-96 flex flex-row items-center md:space-x-48 text-sm leading-tight">
        <div className="grow md:grow-0 flex flex-col justify-center space-y-1 md:text-lg">
          <span className="inline-flex items-center space-x-2">
            <BiSolidFilePdf className="w-5 h-5 text-slate-900" />
            <a href="/CV.pdf" download>Download CV</a>
          </span>
          <span className="inline-flex items-center space-x-2 md:text-lg">
            <MdLink className="w-5 h-5 text-slate-900" />
            <a href="https://www.hnnazm.com">hnnazm.com</a>
          </span>
        </div>
        <div className="shrink-0 relative p-2 flex flex-row items-center space-x-2 border-2 border-green-700 rounded-lg">
          <span className="text-xs md:text-md text-green-700 uppercase">Open to work</span>
          <span className="absolute -top-[6px] -right-[6px] flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
          </span>
        </div>
      </div>

      <hr className="mt-4 mx-5" />

      <div className="grow mt-4 md:px-96 flex flex-col space-y-2">
        <h3 className="px-5 text-sm md:text-lg font-semibold">Area of Expertise</h3>
        <Swiper
          // @ts-ignore */
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={8}
          slidesPerView={1}
          className="w-screen md:w-full md:px-96 h-full"
        >
          {expertises.map((expertise) => (
            <SwiperSlide
              key={expertise.field}
              className="flex flex-col justify-center items-center bg-expertise bg-contain md:bg-cover bg-center bg-no-repeat"
            >
              <div className="px-14 md:px-24 pt-8 flex flex-col justify-center items-center space-y-1">
                {expertise.icon}
                <span className="text-xl md:text-3xl text-primary-lighter font-bold">{expertise.field}</span>
                <span className="grow text-xs md:text-lg text-primary-darker/50 text-center">{expertise.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <a
        href="/contact.vcf"
        download
        className="w-3/4 md:w-1/4 py-2 fixed bottom-2 inset-x-1/2 transform -translate-x-1/2 text-stone-100 text-center bg-primary rounded-xl z-20"
      >
        Save Contact
      </a>
    </div>
  );
};
