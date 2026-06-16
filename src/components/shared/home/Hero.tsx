import { ArrowRight } from "lucide-react";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <div className="min-h-screen w-full bg-brand">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex items-center h-screen lg:col-span-2">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-8xl font-black">
              Build Your Website In 2 Minutes.
            </h1>
            <span className="text-base">
              Make one clean page for your Instagram, TikTok, WhatsApp,
              products, services, sponsors, and latest updates. No coding. No
              confusion.
            </span>
            <div className="flex my-4 justify-between space-x-6 items-center">
              <input
                placeholder="Enter your email"
                className="py-3 px-7 border rounded-full "
                type="text"
              />
              <button className="py-3 px-8 rounded-full flex bg-dark-green text-white">
                Get Started for free <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 h-screen flex items-center">
          <HeroCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
