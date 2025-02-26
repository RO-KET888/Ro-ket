'use-client'
import Image from 'next/image'
import React from 'react'
import WhyBg from '@/assets/images/background/why-bg.svg'
import BitCoin from '@/assets/images/gifs/wired-lineal-2588-logo-bitcoin-hover-roll.gif'
import LinearChartOutline from '@/assets/images/gifs/wired-outline-153-bar-chart-hover-growth.gif'
import FlatCoin from '@/assets/images/gifs/wired-flat-298-coins-hover-jump.gif'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

export default function Four() {
    return (
        <section>
            <div className='space-y-8'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl text-center font-semibold'>why play ro-ket?</h2>
                <div className="flex items-center justifyy-center">
                    <Swiper
                        spaceBetween={20}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                autoplay: true,
                                loop: true
                            },
                            760: {
                                slidesPerView: 2,
                                autoplay: true,
                                loop: true
                            },
                            1024: {
                                slidesPerView: 3,
                                autoplay: false,
                                loop: false
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper min-h-[220px] max-w-xs md:max-w-lg lg:max-w-5xl mx-auto w-fit"
                    >
                        {
                            WhyQuestions.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className='relative min-h-[220px] flex flex-col items-center justify-center gap-4'>
                                        <Image
                                            alt='Gif'
                                            src={items.gif}
                                            priority
                                            className='max-h-24 h-full w-auto'
                                        />
                                        <Image
                                            alt='Background'
                                            src={WhyBg}
                                            sizes='100%'
                                            fill
                                            className='h-full w-full'
                                        />
                                        <p className='text-base text-center'>{items.label}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


                </div>
                <p className='text-xs md:text-base lg:text-lg max-w-4xl mx-auto text-center leading-[1.7]'>Ro-Ket is an adrenaline-fueled betting game where the rocket rises or crashes based on real-time BTC prices.</p>
            </div>
        </section>
    )
}

const WhyQuestions = [
    {
        gif: BitCoin,
        label: <span>Live BTC Price<br />Dynamics</span>,
    },
    {
        gif: LinearChartOutline,
        label: <span>Real Crypto<br />Thrills</span>,
    },
    {
        gif: FlatCoin,
        label: <span>Instant <br />Wins</span>,
    },
]