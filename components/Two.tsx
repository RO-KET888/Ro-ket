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
                    // fill
                    className='h-full max-h-96 w-full'
                />
            </div>
        </section>
    )
}


