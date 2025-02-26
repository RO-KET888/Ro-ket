'use cient'
import Image from "next/image";
import RocketLogo from '@/assets/images/background/RoketStacked.svg'
import React from "react";

interface Load {
    isPlaying: boolean
    setIsPlaying: any
}

export default function Loader(prop: Load) {
    const audioRef = React.useRef<HTMLAudioElement>(null);

    React.useEffect(() => {
        if (typeof window !== 'undefined' && audioRef.current) {
            if (prop.isPlaying) {
                audioRef.current.play();
                audioRef.current.volume = 0.2  // Play the audio
            } else {
                audioRef.current.pause();  // Pause the audio
            }
        }

        return () => {
            // Cleanup: Stop and reset audio when component unmounts
            if (audioRef.current && prop.isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset playback position
                audioRef.current = null;
            }
        };

    }, [prop.isPlaying]);

    const toggleAudio = () => {
        prop.setIsPlaying(true); // Toggle play/pause state
    };

    return (
        <section className={`fixed inset-0 loader ${prop.isPlaying ? 'invisible -z-10 opacity-0 transistion-all ease-linear duration-1000' : 'z-40 visible opacity-100'}`}>
            <div className="space-y-3 flex items-center flex-col">
                <Image
                    alt="Rocket Logo"
                    src={RocketLogo}
                    sizes="100%"
                    className="h-40 md:h-72 w-auto"
                />
                <button
                    onClick={toggleAudio}
                    className='text-rocket text-sm hover:scale-[1.1] transition-all ease-in lg:text-base font-medium uppercase border border-solid border-rocket py-3 bg-rocket/10 px-6 flex items-center justify-center max-w-[300px] w-full btn-shadow'>
                    <span>
                        Enter Rocket
                    </span>
                </button>
            </div>
            <audio ref={audioRef} loop>
                <source src="/background-music.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </section>
    )
}
