import React from 'react'
import { useTranslation } from "react-i18next";

function Hero() {
    const { t, i18n } = useTranslation();

    return (
        <div className={`bg-cover bg-center h-screen w-full bg-abu relative pt-[20vh]`}>
            <div className=' z-0 absolute top-0 left-0 w-full inset-0 bg-kok/90' ></div>
            <div className='flex  justify-between items-end max-abu text-white'>
                <div className='relative z-10 max-w-[630px] mt-36'>
                    <h2 className='text-4xl font-bold'>{t('heroTitle')}</h2>
                    <button onClick={() => {document.getElementById('more').scrollIntoView({ behavior: 'smooth' })}} className='text-base py-4 border px-7 mt-16 hover:bg-white/20'>{t('heroBtn')}</button>
                </div>
                <div className='relative z-10 flex flex-col items-center justify-center gap-6'>
                    <div className='border-2 rounded-[49.1%] p-[10px] w-56 h-56 flex items-center justify-center'>
                        <div className='border-2 rounded-[50%] w-52 h-52 flex items-center justify-center'>
                            <p className='text-4xl text-white font-bold'>
                            99,995%
                            </p>
                        </div>
                    </div>
                    <p className='text-base max-w-[230px] m-auto px-3'>Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero