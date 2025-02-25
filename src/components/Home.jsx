import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import About from './About';
import aboutImg from '../assets/about__img.png'
import peper from '../assets/peper2.png'
import factory from '../assets/factory.png'
import kimyo from '../assets/kimyo.png'
import musr from '../assets/musr.png'
import butlka from '../assets/butlka.png'
import Footer from './Footer';
import axios from 'axios';

function Home() {
    const [navBg, setNavBg] = useState('bg-transparent')
    const { t, i18n } = useTranslation();
    const [users, setUser] = useState([]);


    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            setNavBg('bg-kok')


        } else {
            setNavBg('bg-transparent')
        }
    });
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUser(res.data))
    }, [])
    return (

        <>
            <Navbar bg={navBg} />
            <Hero />
            <div className='grid grid-cols-3 max-abu m-auto gap-6 !my-36 '>
                <NavLink to="/" className={({ isActive }) => `p-12 relative ${isActive ? "bg-kok text-white border" : "bg-white text-black border-kok/50"}`}>
                    <p className={`text-2xl font-bold`}>{t('link1')}</p>
                    <p className='text-8xl z-[3] text-white/70 font-bold absolute top-10 right-10'>01</p>
                    <ul>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                    </ul>
                </NavLink>
                <NavLink to="/aa" className={({ isActive }) => `p-12 relative ${isActive ? "bg-kok text-white" : "bg-white text-black border-kok/50 border-2"}`}>
                    <p className={`text-2xl font-bold`}>{t('link2')}</p>
                    <p className='text-8xl z-[3] text-kok/30 font-bold absolute top-10 right-10'>02</p>
                    <ul>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                    </ul>
                </NavLink>
                <NavLink to="/ali" className={({ isActive }) => `p-12 relative ${isActive ? "bg-kok text-white" : "bg-white text-black border-kok/50 border-2"}`}>
                    <p className={`text-2xl font-bold`}>{t('link3')}</p>
                    <p className='text-8xl z-[3] text-kok/30 font-bold absolute top-10 right-10'>03</p>
                    <ul>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                    </ul>
                </NavLink>
                <NavLink to="/ali" className={({ isActive }) => `p-12 relative ${isActive ? "bg-kok text-white" : "bg-white text-black border-kok/50 border-2"}`}>
                    <p className={`text-2xl font-bold`}>{t('link5')}</p>
                   <p className='text-8xl z-[3] text-kok/30 font-bold absolute top-10 right-10'>04</p>
                    <ul>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li></ul>
                </NavLink>
                <NavLink to="/ali" className={({ isActive }) => `p-12 relative ${isActive ? "bg-kok text-white" : "bg-white text-black border-kok/50 border-2"}`}>
                    <p className={`text-2xl font-bold`}>{t('link6')}</p>
                    <p className='text-8xl z-[3] text-kok/30 font-bold absolute top-10 right-10'>05</p>
                    <ul>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                    </ul>
                </NavLink>
                <NavLink to="/ali" className={({ isActive }) => `p-12 relative ${isActive ? "bg-kok text-white" : "bg-white text-black  border-kok/50 border-2"}`}>
                    <p className={`text-2xl font-bold`}>{t('link8')}</p>
                    <p className='text-8xl z-[3] text-kok/30 font-bold absolute top-10 right-10'>06</p>
                    <ul>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>О нас</button></li>
                        <li><button onClick={() => document.getElementById('us').scrollIntoView({ behavior: 'smooth' })}>Руководство</button></li>
                    </ul>
                </NavLink>
            </div>
            <div className='grid grid-cols-2 max-abu m-auto gap-6 !mb-20'>
                {users.map((user) => {
                    return (
                        <div key={user.id} className='p-12 border-2 border-kok/60 relative card' >
                            <p className={`text-2xl font-bold  transition-all duration-75 `}>{user.name}</p>
                            <p><span>email: </span>{user.email}</p>
                            <p><span>company name: </span>{user.company.name}</p>
                            <p><span>website: </span>{user.website}</p>
                            <span className='text-8xl z-[3] text-kok/60 font-bold absolute top-5 right-10'>{user.id > 9 ? user.id : `0${user.id}` }</span>
                            
                        </div>
                    )
                })}
            </div>

            <div id='us' className='flex justify-between items-center max-abu '>
                <div className='max-w-[40%] flex flex-col items-start gap-5'>
                    <h2 className='text-2xl font-bold'>Lectus nisi sed id dictum. Adipiscing</h2>
                    <p className='text-base my-4 font-light leading-7'>
                        Commodo faucibus justo turpis id lectus ac fringilla scelerisque accumsan. Fames lectus nibh non ultrices id ut sed praesent in. Ac tristique nunc pellentesque odio. Blandit scelerisque dolor molestie egestas nunc nunc sit. Fermentum at pharetra odio risus malesuada diam laoreet eleifend vulputate. Enim molestie lorem nec ipsum nunc sit commodo non. Euismod rhoncus ut amet diam porta nisi tempus. Posuere suspendisse suscipit dolor enim. A lectus convallis quis elementum. Vitae pretium nunc venenatis felis. <br /> <br />
                        Urna orci blandit imperdiet feugiat scelerisque dui at velit ac. Sollicitudin placerat in viverra amet in praesent vestibulum. Suscipit interdum odio pellentesque diam et.
                    </p>
                    <div className='flex gap-7'>
                        <button className='text-base py-3 px-5 font-light bg-kok text-white'>aaaddd@test.ru</button>
                        <button className='text-base py-3 px-5 font-light bg-kok text-white'>dvs@test.ru</button>
                    </div>
                </div>
                <div><img src={aboutImg} alt="" /></div>
            </div>
            <div>
                <h2 className='text-center text-5xl mt-36 mb-20'>Vel pretium pellentesque enim morbi</h2>
                <div className='font-light max-w-[415px] text-center m-auto border-2'>
                    Et aliquam eu feugiat vel egestas semper elementum. Bibendum eget massa .
                </div>
                <div className='flex max-w-[760px] m-auto text-center gap-5 mt-20 mb-36'>
                    <div className='bg-kok p-5'>
                        <img src={factory} alt="img" className='block m-auto mb-7' />
                        <h3 className='text-white text-2xl font-bold'>Enim ac sagittis tempus iaculis blandit. Tellus.</h3>
                    </div>
                    <div className='bg-kok p-5'>
                        <img src={peper} alt="img" className='block m-auto mb-7' />
                        <h3 className='text-white text-2xl font-bold'>Ultricies erat sagittis est dictum leo est nibh a.</h3>
                    </div>
                </div>
            </div>
            <div>
                <h2 id='more' className='text-5xl m-auto text-center font-bold mb-20'>Новости компании</h2>
                <div className='grid grid-cols-3 max-abu gap-5'>
                    <div className='p-4 border-2 border-kok/50'>
                        <div>
                            <img src={butlka} alt="butlka" />
                            <h3 className='text-sm my-4'>Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales viverra viverra.</h3>
                            <p className='text-sm font-thin leading-5'>Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu tristique diam lectus platea orci sed cras. Egestas lorem tincidunt pellentesque dolor vulputate lacus platea. Varius.</p>
                        </div>
                    </div>
                    <div className='p-4 border-2 border-kok/50'>
                        <div>
                            <img src={musr} alt="" />
                            <h3 className='text-sm my-4'>Sapien odio eu et quis ornare. Amet ultrices mauris pellentesque aliquam et. Fermentum cursus.</h3>
                            <p className='text-sm font-thin leading-5'>Lacus ut in vel blandit lectus et fermentum et vulputate. Amet netus gravida et facilisi sit cursus lobortis pellentesque. Vestibulum a pulvinar eu proin a tincidunt.</p>
                        </div>
                    </div>
                    <div className='p-4 border-2 border-kok/50'>
                        <div>
                            <img src={kimyo} alt="" />
                            <h3 className='text-sm my-4'>Lectus sagittis non id ut eget tellus aenean. Pretium scelerisque pellentesque in lacus ultrices mauris tempor. Est cursus laoreet in dictumst arcu.</h3>
                            <p className='text-sm font-thin leading-5'>Vestibulum id pulvinar enim molestie erat suscipit montes hendrerit. Integer ac egestas tempor nisl. Vel vitae quam nisi egestas tincidunt facilisi non faucibus. Mi sed et id.</p>
                        </div>
                    </div>
                </div>
                <button className='text-base bg-kok text-white py-4 px-5 text-center m-auto block mt-20'>Все новости</button>
            </div>
            <Footer />
        </>

    )

}

export default Home