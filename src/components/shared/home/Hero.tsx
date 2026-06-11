function Hero() {
  return (
    <div className="min-h-screen w-full bg-brand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2">
          <div className="flex flex-col items-center">
            <h1 className="text-9xl font-black">
              Build your website in 2 minutes
            </h1>
            <span>
              Make one clean page for your Instagram, TikTok, WhatsApp,
              products, services, sponsors, and latest updates. No coding. No
              confusion.
            </span>
            <div className="flex justify-between">
              <input type="text" />
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1"></div>
      </div>
    </div>
  );
}

export default Hero;
