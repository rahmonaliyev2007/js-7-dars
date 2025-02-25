import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

function Navbar({bg}) {
    const { t, i18n } = useTranslation();
  
    return (
      <nav className={`m-auto fixed w-full top-0 z-20 py-4 bg-kok ${bg}`}>
        <div className="nav_top max-abuu flex justify-between items-center text-white">
          {/* logo */}
          <div className="flex gap-1 items-end">
            <div className="nav-box bg-white w-[67px] h-[60px] relative">
              <img src={logo} className="top-0 right-[-10%] absolute w-[70px]" alt="logo" />
            </div>
            <p className="font-extrabold text-3xl text-white">uintela</p>
          </div>
  
          {/* search */}
          <div>
            <p className="font-semibold text-sm">{t('search')}</p>
            <div className="flex items-center gap-4">
              <input type="text" className="bg-transparent border-b outline-none border-b-white border-solid" />
              <Search />
            </div>
          </div>
  
          {/* language */}
          <div className="flex gap-2">
            <button className="px-2 py-1 border border-white rounded" onClick={() => i18n.changeLanguage("ru")}>Ru</button>
            <button className="px-2 py-1 border border-white rounded" onClick={() => i18n.changeLanguage("en")}>En</button>
            <button className="px-2 py-1 border border-white rounded" onClick={() => i18n.changeLanguage("uz")}>Uz</button>
          </div>
        </div>
        <hr className="w-full border-none h-[1px] bg-white/50 my-4" />
  
        {/* Navbar Links */}
        <div className="mt-2 flex gap-4 max-abuu justify-between items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold"}>{t('link1')}</NavLink>
          <NavLink to="/nest/activity" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link2')}</NavLink>
          <NavLink to="/nest/personal" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link3')}</NavLink>
          <NavLink to="/nest/investors" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link4')}</NavLink>
          <NavLink to="/nest/shareholder" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link5')}</NavLink>
          <NavLink to="/nest/contact" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link6')}</NavLink>
          <NavLink to="/nest/contact" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link7')}</NavLink>
          <NavLink to="/nest/contact" className={({ isActive }) => isActive ? "text-white font-bold border-b" : "text-white hover:font-bold "}>{t('link8')}</NavLink>
        </div>
      </nav>
    );
  }

export default Navbar;