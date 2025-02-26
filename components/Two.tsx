import React from 'react'
import VideoBg from '@/assets/images/background/Videos Bg.svg'
import Image from 'next/image'

export default function Two() {
    return (
        <section>
            <div className='mx-auto relative'>
                <Image
                    src={VideoBg}
                    alt='Video Background'
                    sizes='100%'
                    className='z-0 object-contain object-center w-[342px] md:w-auto h-[250px] md:h-[400px] lg:h-[450px]'
                />
               <div className="absolute z-10 top-12 md:top-14 lg:top-16 inset-x-4 md:inset-x-7 lg:inset-x-8 bottom-7 lg:bottom-8">
               <video controls preload="none" className='h-full w-full' poster=''>
                    <source src="/video/Ro-ket-Explainer-video.mp4" type="video/mp4" />
                </video>
               </div>
            </div>
        </section>
    )
}


