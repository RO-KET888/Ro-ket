import Link from 'next/link'
import React from 'react'

export default function Three() {
    return (
        <section>
            <div className='grid md:grid-cols-3 w-full'>
                <div className='space-y-4 lg:space-y-7 md:col-span-2'>
                    <h3 className='text-2xl md:text-3xl font-semibold'>Scan to Play Instantly</h3>

                    <p className='text-sm lg:text-lg max-w-2xl'>  Ro-Ket is an adrenaline-fueled betting game where the rocket rises or crashes based on real-time BTC prices.</p>

                    <Link href={''} className='text-rocket text-sm lg:text-base font-medium uppercase border border-solid border-rocket py-3 bg-rocket/10 px-6 inline-block w-fit btn-shadow'>
                        <span>
                            Play Now <span className='text-[8px]'>&</span> Take Off
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
