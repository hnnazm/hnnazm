import {
  MdEmail,
  MdSmartphone,
  MdLink,
  MdClose
} from "react-icons/md";
import {
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

import BubbleChart from "../../components/BubbleChart";

export default function Contact() {
  return (
    <div className="h-screen pb-20 relative text-slate-900 bg-stone-100 overflow-auto">
      <div className="flex justify-center items-center bg-profile bg-gray-900/60 bg-blend-multiply object-cover h-48 w-full bg-cover bg-center">
        <span className="px-5 flex flex-col">
          <FaQuoteLeft className="text-stone-200" />
          <blockquote className="text-2xl text-stone-200 font-amaticSC font-bold">
            If the why is powerful, the how will be easy
          </blockquote>
          <FaQuoteRight className="self-end text-stone-200" />
        </span>
      </div>

      <div className="-mt-10 px-10 flex flex-row space-x-3">

        <div className="p-1 bg-stone-100 rounded-full">
          <img
            src="/memoji.png"
            className="h-[100px] w-[100px] rounded-full border-4 border-primary-lighter p-1" />
        </div>


        <div className="mb-2 self-end">
          <h1 className="text-xl font-bold">Hannan Azmi</h1>
          <h2 className="text-xs text-slate-500 leading-tight">Software Engineer</h2>
        </div>
      </div>

      <div className="mt-2 px-10 flex flex-col space-y-1 text-sm leading-tight">
        <span className="inline-flex items-center space-x-2">
          <MdEmail className="w-5 h-5 text-slate-900" />
          <a href="mailto:work@hnnazm.com">work@hnnazm.com</a>
        </span>
        <span className="inline-flex items-center space-x-2">
          <MdSmartphone className="w-5 h-5 text-slate-900" />
          <a href="tel:+60102216100">+60-102216100</a>
        </span>
        <span className="inline-flex items-center space-x-2">
          <MdLink className="w-5 h-5 text-slate-900" />
          <a href="https://www.hnnazm.com">hnnazm.com</a>
        </span>
      </div>

      <hr className="mt-4 mx-5" />

      <div className="mt-4 px-5 flex flex-col space-y-2">
        <h3 className="text-sm font-semibold">Area of Expertise</h3>
        <div>
          <BubbleChart />
        </div>
      </div>

      <a
        href="/contact.vcf"
        download
        className="w-3/4 py-2 fixed bottom-2 inset-x-1/2 transform -translate-x-1/2 text-stone-100 text-center bg-primary rounded-xl"
      >
        Save Contact
      </a>
    </div>
  );
};
