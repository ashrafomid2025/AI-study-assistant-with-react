import { ChartColumn, Link, ShoppingBag } from "lucide-react";
import React from "react";

function MainSection() {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 flex flex-col justify-start space-y-4">
          <span className="uppercase text-gray-400 ">made for creators</span>
          <p className="text-4xl font-black">
            Everything your followers need, in one simple qaa.af website.
          </p>
        </div>
        <div className="grid lg:col-span-3 md:grid-cols-3 gap-8">
          <div className="border border-dark-green/40 p-4">
            <div className="bg-brand p-3 w-fit">
              <Link size={28} />
            </div>
            <div className="flex flex-col my-3">
              <p className="text-xl text-dark-green/80">All Your links</p>
              <p className="text-sm ">
                Put Instagram, TikTok, YouTube, Telegram, WhatsApp, and every
                important link on one page.
              </p>
            </div>
          </div>
          <div className="border border-dark-green/40 p-4">
            <div className="bg-brand p-3 w-fit">
              <ShoppingBag size={28} />
            </div>
            <div className="flex flex-col my-3">
              <p className="text-xl text-dark-green/80">All Your links</p>
              <p className="text-sm ">
                Put Instagram, TikTok, YouTube, Telegram, WhatsApp, and every
                important link on one page.
              </p>
            </div>
          </div>
          <div className="border border-dark-green/40 p-4">
            <div className="bg-brand p-3 w-fit">
              <ChartColumn size={28} />
            </div>
            <div className="flex flex-col my-3">
              <p className="text-xl text-dark-green/80">All Your links</p>
              <p className="text-sm ">
                Put Instagram, TikTok, YouTube, Telegram, WhatsApp, and every
                important link on one page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
