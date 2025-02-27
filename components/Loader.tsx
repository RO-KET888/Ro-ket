'use cient'
import Image from "next/image";
import RocketLogo from '@/assets/images/background/RoketStacked.svg'
import React from "react";
import { MdVolumeMute, MdVolumeUp } from "react-icons/md";

interface Load {
    isPlaying: boolean
    setIsPlaying: any
}

export default function Loader(prop: Load) {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const [pause, setPause] = React.useState<boolean>(false)
    React.useEffect(() => {
        if (typeof window !== 'undefined' && audioRef.current) {
            if (pause) {
                audioRef.current.play();
                audioRef.current.currentTime = 0.2;
                audioRef.current.volume = 0.5  // Play the audio
            } else {
                audioRef.current.pause();  // Pause the audio
            }
        }



    }, [pause]);

    const toggleAudio = () => {
        setPause(!pause); // Toggle play/pause state
    };

    return (
        <>
            <section className={`fixed inset-0 loader h-screen w-screen flex items-center justify-center${prop.isPlaying ? '-z-10 hidden' : 'z-40 block'}`}>
                <div className="space-y-3 flex items-center flex-col">
                    <Image
                        alt="Rocket Logo"
                        src={RocketLogo}
                        sizes="100%"
                        className="h-40 md:h-72 w-auto"
                    />
                    <button
                        onClick={() => {
                            setPause(true)
                            prop.setIsPlaying(true)
                        }}
                        className='text-rocket text-sm hover:scale-[1.1] transition-all ease-in lg:text-base font-medium uppercase border border-solid border-rocket py-3 bg-rocket/10 px-6 flex items-center justify-center max-w-[300px] w-full btn-shadow'>
                        <span>
                            Enter Rocket
                        </span>
                    </button>
                </div>

            </section>
            <audio ref={audioRef} loop>
                <source src="/background-music.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            {
                prop.isPlaying && (
                    <button
                        className="fixed z-[99999999999999] bottom-0 bg-[#1c468a] left-1/2 -translate-x-1/2 px-4 py-2"
                        onClick={toggleAudio}
                    >
                        <span className="text-2xl font-medium">
                        {pause ? <MdVolumeUp /> : <MdVolumeMute />}
                        </span>
                    </button>
                )
            }
        </>
    )
}
