'use client'
import Link from "next/link";
import { RiTelegram2Fill, RiTiktokFill, RiTwitterXLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Dashboard from './../assets/images/background/airspace_bottom.svg';
import Image from "next/image";
import React from "react";
import { fullpageApi } from "@fullpage/react-fullpage";
import Term from "./Term";


interface Varable {
    isPlaying: boolean
    route: fullpageApi
    setOnScroll: any
}

export default function DownBoard(prop: Varable) {
    return (
        <div className={`fixed inset-x-0 w-screen z-50 flex justify-center transition-all duration-300 ease-in bottom-0 ${!prop.isPlaying ? 'translate-y-60' : 'translate-y-0'}`}>
            <div className="h-20 w-[350px] fixed left-1/2 -translate-x-1/2 mt-5 flex items-center flex-col gap-2">
                <div className="flex items-center gap-4">
                    <Link href='https://t.me/ROKETCommunity' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <RiTelegram2Fill />
                    </Link>
                    <Link href='' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <RiTiktokFill />
                    </Link>
                    <Link href=''>
                        <div className="flex flex-col items-center">
                            <MdOutlineKeyboardDoubleArrowUp className="text-lg" />
                            <span className="text-[10px]">scroll</span>
                            <MdOutlineKeyboardDoubleArrowDown className="text-lg" />
                        </div>
                    </Link>
                    <Link href='https://x.com/RO_KET888' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <RiTwitterXLine />
                    </Link>
                    <Term setOnScroll={prop.setOnScroll}/>
                </div>
                <div className="md:flex items-center justify-center gap-2 hidden">
                    {
                        ['', '', '', '', ''].map((_, idx) => (
                            <button
                                onClick={() => prop.route.moveTo(idx + 1)}
                                key={idx} className="bg-rocket flex items-center justify-center text-xs h-5 w-5">
                                <span className="font-[Pitviper] font-semibold text-[#001616]">{idx + 1}</span>
                            </button>
                        ))
                    }
                </div>
            </div>
            <Image
                alt="Dashboard"
                src={Dashboard}
                sizes="100%"
                className="min-w-[1300px] w-full"
            />
        </div>
    )
}
