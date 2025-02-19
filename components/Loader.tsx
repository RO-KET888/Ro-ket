'use cient'
import Image from "next/image";
import RocketLogo from '@/assets/images/background/RoketStacked.svg'
import React from "react";


export default function Loader() {


    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(new Audio('/background-music.mp3'));

    React.useEffect(() => {
        // Play the background music when component is mounted
        if (typeof window !== 'undefined' && isPlaying && audioRef.current) {
            audioRef.current.play();
        }

        // Cleanup function to stop the audio when component unmounts
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset to the start
        };
    }, [isPlaying]);

    const toggleAudio = () => {
        setIsPlaying(true); // Toggle play/pause state
    };

    return (
        <section className={`fixed loader ${isPlaying ? 'invisible -z-10 opacity-0 transistion-all ease-linear duration-1000' : 'z-40 visible opacity-100'}`}>
            <div className="space-y-3">
                <Image
                    alt="Rocket Logo"
                    src={RocketLogo}
                    sizes="100%"
                    className="h-40 w-auto"
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
