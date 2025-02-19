import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RocketGif from '@/assets/images/gifs/Ro-ketlandingpage.gif'

export default function One() {
    return (
        <section>
            <div className='grid md:grid-cols-3 w-full items-center'>
                <div className='space-y-5 md:col-span-2'>
                    <h1 className='text-2xl lg:text-6xl font-semibold'>RO-KET YOUR WINS</h1>

                    <p className='text-sm lg:text-2xl max-w-3xl'>Risk It, Ride It, Win It – The Game Where Every
                        Second Counts</p>

                    <Link href={''} className='text-rocket text-sm lg:text-base font-medium uppercase border border-solid border-rocket py-3 bg-rocket/10 px-6 flex items-center justify-center md:max-w-[300px] w-full btn-shadow'>
                        <span>
                            Play Now
                        </span>
                    </Link>
                </div>
                <div className='md:col-span-1'>
                    <Image
                        src={RocketGif}
                        alt='Ro-Ket'
                        sizes='100%'
                        className='w-80 h-auto'
                    />
                </div>
            </div>
        </section>
    )
}
