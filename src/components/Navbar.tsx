import { useState } from "react";
import Logo from "../assets/logo.png";
import Cancel from "../assets/cancel.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav
        className={`fixed max-sm:h-full inset-x-0 z-10 max-sm:w-1/2 bg-white ${
          toggle ? "hidden" : ""
        }`}
      >
        <div className="flex max-sm:flex-col max-sm:pt-10 justify-between md:items-center py-1  px-10">
          <img className="w-14 h-14 max-sm:mb-8" src={Logo} alt="logo image" />
          <button className="absolute top-5 right-5">
            <img onClick={handleToggle} src={Cancel} className="w-4 h-4"/>
          </button>
          <div className="flex max-sm:flex-col gap-5 tracking-widest text-sm font-bold">
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Contact Us</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
