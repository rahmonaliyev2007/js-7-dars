import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import bir from '../assets/1.png';
import ikki from '../assets/2.png';
import uch from '../assets/3.png';
import tort from '../assets/4.png';
import besh from '../assets/5.png';

function Personal() {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar bg='bg-kok' />
            <div className='pt-[30vh] max-w-[1310px] px-5 m-auto flex justify-between items-start gap-12 '>
                <ul>
                    <li>
                        <NavLink to="personal" className="text-white font-bold">
                            {({ isActive }) => (
                                <div className={`flex gap-3 p-2 w-[266px] justify-between px-5 py-4 text-base font-light  items-center ${isActive ? "bg-kok opacity-100" : "bg-kok opacity-55"}`}>
                                    {t('link3')} <img src={bir} alt="" />
                                </div>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="activity" className="text-white font-bold">
                            {({ isActive }) => (
                                <div className={`flex gap-3 p-2 w-[266px] justify-between px-5 py-4  text-base font-light items-center ${isActive ? "bg-kok opacity-100" : "bg-kok opacity-55"}`}>
                                    {t('link2')} <img src={ikki} alt="" />
                                </div>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="shareholder" className="text-white font-bold">
                            {({ isActive }) => (
                                <div className={`flex gap-3 p-2 w-[266px] justify-between px-5 py-4  text-base font-light items-center ${isActive ? "bg-kok opacity-100" : "bg-kok opacity-55"}`}>
                                    {t('shareholder')} <img src={uch} alt="" />
                                </div>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="investors" className="text-white font-bold">
                            {({ isActive }) => (
                                <div className={`flex gap-3 p-2 w-[266px] justify-between px-5 py-4  text-base font-light items-center ${isActive ? "bg-kok opacity-100" : "bg-kok opacity-55"}`}>
                                    {t('investors')} <img src={tort} alt="" />
                                </div>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className="text-white font-bold">
                            {({ isActive }) => (
                                <div className={`flex gap-3 p-2 w-[266px] justify-between px-5 py-4  text-base font-light items-center ${isActive ? "bg-kok opacity-100" : "bg-kok opacity-55"}`}>
                                    {t('link8')} <img src={besh} alt="" />
                                </div>
                            )}
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Personal;