import Link from "next/link";
import { RiDiscordFill, RiTelegram2Fill, RiTwitterXLine } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Dashboard from './../assets/images/background/airspace_bottom.svg';
import Image from "next/image";

export default function DownBoard() {
    return (
        <div className="fixed bottom-0 inset-x-0 w-screen z-50 flex justify-center">
            <div className="h-20 w-[350px] fixed left-1/2 -translate-x-1/2 mt-5 flex items-center flex-col gap-2">
                <div className="flex items-center gap-4">
                    <Link href='' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <RiTelegram2Fill />
                    </Link>
                    <Link href='' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <RiDiscordFill />
                    </Link>
                    <Link href=''>
                        <div className="flex flex-col items-center">
                            <MdOutlineKeyboardDoubleArrowUp className="text-lg" />
                            <span className="text-[10px]">scroll</span>
                            <MdOutlineKeyboardDoubleArrowDown className="text-lg" />
                        </div>
                    </Link>
                    <Link href='' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <RiTwitterXLine />
                    </Link>
                    <Link href='' className="text-xl md:text-2xl inline-block p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                        <IoDocumentText />
                    </Link>
                </div>
                <div className="md:flex items-center justify-center gap-2 hidden">
                    {
                        ['', '', '', '', ''].map((_, idx) => (
                            <Link href={'#page-' + (idx + 1)} key={idx} className="bg-rocket flex items-center justify-center text-xs h-5 w-5">
                                <span className="font-[Pitviper] font-semibold text-[#001616]">{idx + 1}</span>
                            </Link>
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
