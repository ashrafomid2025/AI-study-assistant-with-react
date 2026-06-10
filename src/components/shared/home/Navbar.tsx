import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links: { id: number; link: string; name: string }[] = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "/ai-assistant",
      name: "Study Assistant",
    },
    {
      id: 3,
      link: "/about",
      name: "about",
    },
  ];
  return (
    <div>
      <nav
        className={`
   max-w-7xl fixed  left-1/2 -translate-x-1/2
    mx-auto py-2 px-4 flex w-full ${isOpen ? "bg-primary/60 top-0 rounded-none" : "bg-primary top-1.5 rounded-full"}  justify-between items-center
        
    `}
      >
        <div className="flex space-x-1.5 items-center">
          <img src="./images/logo.png" className="w-9 h-9" />
          <span className="text-sm hidden md:inline">Study Assistant</span>
        </div>
        {/* desktop nav */}
        <div className="md:flex hidden justify-center space-x-4">
          {links.map((y) => {
            return (
              <Link
                key={y.id}
                to={y.link}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {y.name}
              </Link>
            );
          })}
        </div>

        {/* bars icon */}

        <div className="md:hidden">
          {isOpen ? (
            <X size={24} onClick={() => setIsOpen((prev) => !prev)} />
          ) : (
            <Menu onClick={() => setIsOpen(!isOpen)} size={24} />
          )}
        </div>

        {/* mobile navbar */}
      </nav>

      <div
        className={` fixed top-12 transition-all duration-300 left-1/2 min-h-screen -translate-x-1/2
           w-full ${isOpen ? "flex" : "hidden"} bg-primary/60 pb-4 backdrop-blur-md`}
      >
        <div className="flex w-full flex-col items-center gap-4">
          {links.map((y) => {
            return (
              <Link key={y.id} to={y.link}>
                {y.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
