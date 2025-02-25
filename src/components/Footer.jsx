import React from 'react'
import logo from "../assets/logo.png";


function Footer() {
    return (
        <footer className='bg-kok py-14 mt-36'>
            <div className='max-abu'>
                <div className='text-white flex justify-between items-start '>
                    <div className="flex gap-1 items-end">
                        <div className="nav-box bg-white w-[67px] h-[60px] relative">
                            <img src={logo} className="top-0 right-[-10%] absolute w-[70px]" alt="logo" />
                        </div>
                        <p className="font-extrabold text-3xl text-white">uintela</p>
                    </div>
                    <ul className='flex flex-col gap-8 list-[square] font-light text-sm'>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Деятельность</a></li>
                        <li><a href="#">Персонал</a></li>
                        <li><a href="#">Клиенту</a></li>
                    </ul>
                    <ul className='flex flex-col gap-8 list-[square] font-light text-sm'>
                        <li><a href="#">Акционеру и инвестору</a></li>
                        <li><a href="#">Пресс-центр</a></li>
                        <li><a href="#">Торги</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <ul className='flex flex-col gap-8 '>
                        <li><h4 className='text-base font-semibold' >Местонахождение</h4></li>
                        <li><p className='max-w-[300px] font-light text-sm'>Ante quam egestas tristique a malesuada massa aliquam ultrices. Et tellus nec.</p>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-between items-center mt-12'>
                    <div className=''>
                        <p className='text-xs max-w-[530px] text-gray-400 mb-5'>Dictum praesent dignissim pellentesque amet diam velit faucibus sed. Nec mattis posuere habitasse porta feugiat mattis enim. Quam interdum at penatibus amet elementum luctus.</p>
                        <p className='text-gray-400 text-sm'>Политика обработки персональных данных</p>
                    </div>
                    <p className='text-white'>Разработано: d-e-n.ru</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer