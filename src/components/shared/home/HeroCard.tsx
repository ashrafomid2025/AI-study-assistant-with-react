import { Link } from "react-router-dom";

function HeroCard() {
  return (
    <div className="relative w-full  bg-white p-4">
      <div className=" w-full bg-dark-green/95 py-4 px-4">
        <div className="w-full flex items-center justify-between">
          <img src="./images/logo.png" className="w-10 h-10" alt="" />
          <span className="py-1.5 px-3 rounded-full text-xs bg-dark-green text-white">
            visit website
          </span>
        </div>
        <h1 className="text-3xl text-white font-bold">Your Brand</h1>
        <Link to="/" className="text-white">
          AI Study Assistant
        </Link>
        <div className="px-2 mt-4 flex flex-col space-y-3">
          <div className="flex w-full bg-white py-2 px-4 justify-between">
            <span>Book on WhatsApp</span>
            <span>/</span>
          </div>
          <div className="flex w-full bg-white py-2 px-4 justify-between">
            <span>Book on WhatsApp</span>
            <span>/</span>
          </div>
          <div className="flex w-full bg-white py-2 px-4 justify-between">
            <span>Book on WhatsApp</span>
            <span>/</span>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 bg-yellow-200">
        <div className="flex py-3 border-gray-400 bg-yellow-200 border-r flex-col justify-center items-center">
          <h1 className="font-bold text-xl">3</h1>
          <span>Links</span>
        </div>
        <div className="flex py-3 border-gray-400 bg-yellow-200 border-r flex-col justify-center items-center">
          <h1 className="font-bold text-xl">3</h1>
          <span>Links</span>
        </div>
        <div className="flex py-3 border-gray-400 bg-yellow-200 border-r flex-col justify-center items-center">
          <h1 className="font-bold text-xl">3</h1>
          <span>Links</span>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
