import { useState } from "react";
import logo from '../assets/logo-img.png';
import "tailwindcss";



function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <div>
    <header className="flex justify-between items-center
    text-black !py-4 !px-5 md:px-32 bg-orange-200 !drop-shadow-md">
      <a href="#">
        <img src={logo} alt="" className="w-25 hover:scale-105 transition-all" />
      </a>

      <ul className="hidden lg:flex items-center gaps-12 font-bold text-base bg-orange-100 rounded-2xl mr-10">
        <li className="p-3 mr-5 hover:bg-orange-300 hover:rounded-2xl hover:text-sky-400 font-stretch-50% text-lg rounded-md transition-all cursor-pointer">Home</li>
        <li className="p-3 mr-5 hover:bg-orange-300 hover:rounded-2xl hover:text-sky-400 font-stretch-50% text-lg rounded-md transition-all cursor-pointer">Portfolio</li>
        <li className="p-3 mr-5 hover:bg-orange-300 hover:rounded-2xl hover:text-sky-400 font-stretch-50% text-lg rounded-md transition-all cursor-pointer">Packages</li>
        <li className="p-3 mr-5 hover:bg-orange-300 hover:rounded-2xl hover:text-sky-400 font-stretch-50% text-lg rounded-md transition-all cursor-pointer">Contact</li>
        <li className="p-3 hover:bg-orange-300 hover:rounded-2xl hover:text-sky-400 font-stretch-50% text-lg rounded-md transition-all cursor-pointer">About</li>
      </ul>

      <div className="relative hidden md:flex items-center justify-center gap-3">
        <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
        <input type="text" placeholder="Search..."
        className="py-2 pl-10 text-lg border-2 rounded-xl border-orange-100
        focus:bg-slate-100 focus:outline-orange-400" />
      </div>

      <i className="bx bx-menu-alt-right lg:!hidden block text-6xl cursor-pointer text-rose-900 !drop-shadow-sm"
      onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

      <div className={`absolute xl:hidden top-20 left-0 w-full bg-orange-200 flex flex-col
        items-center gap-6 font-stretch-50% font-bold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>

          <li className="lg:!hidden list-none w-full text-center p-3 hover:bg-orange-300 hover:text-white transition-all cursor-pointer">Home</li>
          <li className="lg:!hidden list-none w-full text-center p-3 hover:bg-orange-300 hover:text-white transition-all cursor-pointer">Portfolio</li>
          <li className="lg:!hidden list-none w-full text-center p-3 hover:bg-orange-300 hover:text-white transition-all cursor-pointer">Packages</li>
          <li className="lg:!hidden list-none w-full text-center p-3 hover:bg-orange-300 hover:text-white transition-all cursor-pointer">Contact</li>
          <li className="lg:!hidden list-none w-full text-center p-3 hover:bg-orange-300 hover:text-white transition-all cursor-pointer">About</li>
          <li className="lg:!hidden list-none w-full text-center p-3 hover:bg-orange-300 hover:text-white transition-all cursor-pointer text-rose-900 text-3xl " onClick={() => setIsMenuOpen(!isMenuOpen)}>X</li>
        </div>

    </header>
  </div>

  )
}
export default Header
