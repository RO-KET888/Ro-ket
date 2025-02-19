'use cient'
import Image from "next/image";
import RocketLogo from '@/assets/images/background/RoketStacked.svg'
import React from "react";


export default function Loader() {

    const audio = new Audio("/background-music.mp3");
    const [clicked, setClicked] = React.useState<boolean>(false)
    React.useEffect(() => {
        // Set the audio to loop and autoplay
        audio.loop = true;
        audio.autoplay = true;

        // Cleanup: Pause the audio when the component unmounts
        return () => {
            audio.pause();
            audio.currentTime = 0; // Reset the audio position when stopping
        };

    }, [])

    return (
        <section className={`fixed loader ${clicked ? 'invisible -z-10 opacity-0 transistion-all ease-linear duration-1000' : 'z-40 visible opacity-100'}`}>
            <div className="space-y-3">
                <Image
                    alt="Rocket Logo"
                    src={RocketLogo}
                    sizes="100%"
                    className="h-40 w-auto"
                />
                <button
                    onClick={() => {
                        audio.play();
                        setClicked(true)
                    }}
                    className='text-rocket text-sm hover:scale-[1.1] transition-all ease-in lg:text-base font-medium uppercase border border-solid border-rocket py-3 bg-rocket/10 px-6 flex items-center justify-center max-w-[300px] w-full btn-shadow'>
                    <span>
                        Enter Rocket
                    </span>
                </button>
            </div>
        </section>
    )
}
