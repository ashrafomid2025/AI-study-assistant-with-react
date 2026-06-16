import { ArrowUpRight, Smartphone } from "lucide-react";

import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="bg-gray-100 w-full">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex space-x-2 text-gray-400 items-center">
            <Smartphone size={18} />
            <span className="uppercase">for afghan influencer</span>
          </div>
          <p className="max-w-3xl font-black text-5xl text-dark-green/90">
            Turn followers into customers, bookings, and loyal fans.
          </p>
          <span className="text-dark-green/50 text-xl">
            Your qaa.af website gives people one place to see who you are,
            contact you, buy from you, watch your content, and share your page
            with others.
          </span>
        </div>
        <div className="lg:col-span-1 flex items-start">
          <div className="w-full p-4 bg-white">
            <p className="uppercase mb-4 ">start with</p>
            <div className="flex flex-col gap-4">
              <div className="bg-green-100 hover:-translate-y-1 transition-all hover:bg-brand/60 duration-300 p-3 flex justify-between items-center">
                <Link to="/">Shorten a link</Link>
                <ArrowUpRight />
              </div>
              <div className="bg-green-100 hover:-translate-y-1 transition-all hover:bg-brand/60 duration-300 p-3 flex justify-between items-center">
                <Link to="/">Shorten a link</Link>
                <ArrowUpRight />
              </div>
              <div className="bg-green-100 hover:-translate-y-1 transition-all hover:bg-brand/60 duration-300 p-3 flex justify-between items-center">
                <Link to="/">Shorten a link</Link>
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
