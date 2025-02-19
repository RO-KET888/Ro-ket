import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RocketGif from '@/assets/images/gifs/Ro-ketlandingpage.gif'

export default function One() {
    
    return (
        <section>
            <div className='grid md:grid-cols-5 w-full items-center md:pt-0'>
                <div className='md:col-span-3 flex flex-col item  md:items-start gap-4 md:gap-5 relative z-20 text-center md:text-left'>
                    <h1 className='text-2xl lg:text-5xl xl:text-[56px] font-semibold'>RO-KET YOUR WINS</h1>

                    <p className='text-sm lg:text-xl max-w-3xl lg:leading-[1.8]'>Risk It, Ride It, Win It – The Game Where Every
                        Second Counts</p>

                    <Link href={''} className='text-rocket text-sm hover:scale-[1.1] transition-all ease-in lg:text-base font-medium uppercase border border-solid border-rocket py-4 bg-rocket/10 px-6 flex items-center justify-center max-w-[340px] w-full btn-shadow'>
                        <span>
                            Play Now
                        </span>
                    </Link>
                </div>
                <div className='md:col-span-2 -mt-20 relative z-0'>
                    <Image
                        src={RocketGif}
                        alt='Ro-Ket'
                        sizes='100%'
                        className='w-80 md:w-full h-auto'
                    />
                </div>
            </div>
        </section>
    )
}
