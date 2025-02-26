import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QrCode from '@/assets/images/background/qr-code.svg'
export default function Three() {
    return (
        <section>
            <div className='grid md:grid-cols-3 w-full items-center gap-14'>
                <div className='space-y-4 lg:space-y-7 md:col-span-2 text-center md:text-left order-2 md:order-1'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Scan to Play Instantly</h3>

                    <p className='text-xs lg:text-lg max-w-2xl text-pretty'>  Ro-Ket is an adrenaline-fueled betting game where the rocket rises or crashes based on real-time BTC prices.</p>

                    <Link href={''} className='text-rocket hover:scale-[1.1] transition-all ease-in text-sm lg:text-base font-medium uppercase border border-solid border-rocket py-4 bg-rocket/10 px-6 inline-block w-fit btn-shadow'>
                        <span>
                            Play Now <span className='text-[8px]'>&</span> Take Off
                        </span>
                    </Link>
                </div>
                <div className='order-1 md:order-2'>
                    <Image
                    src={QrCode}
                    alt='Qrcode'
                    sizes='100%'
                    className='h-full w-full object-center object-contain'
                    />
                </div>
            </div>
        </section>
    )
}
