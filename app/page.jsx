'use client'
import Image from "next/image";
import TopBoard from './../assets/images/background/airspace_top.svg';
import One from "@/components/One";
import Two from "@/components/Two";
import Three from "@/components/Three";
import Four from "@/components/Four";
import Five from "@/components/Five";
import DownBoard from "@/components/DownBoard";
import React from "react";
import Loader from "@/components/Loader";
import ReactFullpage from "@fullpage/react-fullpage";


export default function Home() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [fullpage, setFullpage] = React.useState(null);
  const [onScroll, setOnScroll] = React.useState(false)

  if (typeof window !== "undefined" && window.innerWidth < 760) {
    return (
      <main>
        <div className={`fixed inset-x-0 w-screen z-50 flex items-center justify-center transition-transform duration-300 ease-in -top-3 md:top-0 ${!isPlaying ? '-translate-y-40' : 'translate-y-0'}`}>
          <Image
            alt="Top Board"
            src={TopBoard}
            sizes="100%"
            className="w-full min-w-[1000px]"
          />
        </div>
        <Loader
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className={isPlaying ? 'block pt-24 md:pt-0 pb-40 md:pb-0 md:hidden overflow-y-auto' : 'hidden'}>
          <One />
          <Two />
          <Three />
          <Four />
          <Five />
        </div>

        <DownBoard
          isPlaying={isPlaying}
          route={fullpage}
          setOnScroll={setOnScroll}
        />
      </main >
    )

  }
  return (
    <main>
      <Loader
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <div className={isPlaying ? 'block pt-24 md:pt-0 pb-40 md:pb-0' : 'hidden'}>
        <div className={`fixed inset-x-0 w-screen z-50 flex items-center justify-center transition-transform duration-300 ease-in -top-3 md:top-0 ${!isPlaying ? '-translate-y-40' : 'translate-y-0'}`}>
          <Image
            alt="Top Board"
            src={TopBoard}
            sizes="100%"
            className="w-full min-w-[1000px]"
          />
        </div>
        <ReactFullpage
          navigation={false}
          credits={{
            enabled: false,
          }}
          touchSensitivity={5}
          scrollingSpeed={1000}
          onLeave={(origin, destination, direction) => {
            if (onScroll) return false; // Prevent scrolling
          }}
          render={({ fullpageApi }) => {
            setFullpage(fullpageApi)
            return (
              <>
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <One />
                  </div>
                  <div className="section">
                    <Two />
                  </div>
                  <div className="section">
                    <Three />
                  </div>
                  <div className="section">
                    <Four />
                  </div>
                  <div className="section">
                    <Five />
                  </div>
                </ReactFullpage.Wrapper>
              </>
            );
          }}
        />
        <DownBoard
          isPlaying={isPlaying}
          route={fullpage}
          setOnScroll={setOnScroll}
        />
      </div>
    </main>

  );
}