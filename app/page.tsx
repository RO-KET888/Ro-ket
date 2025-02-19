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
import { usePageScroller } from "@furman1331/page-scroller";
import ReactAudioPlayer from 'react-audio-player';


export default function Home() {

  React.useEffect(() => {
    if (window.innerWidth > 450) {
      usePageScroller({ isAllowToScrollThroughSlides: true }).initPageScroller("#page-scroller");
    }
  }, [])

  return (
    <main>
      <ReactAudioPlayer
        src="/background-music.mp3"
        autoPlay
        loop
        volume={1}
        controls={false}
      />
      <div className="fixed -top-3 md:top-0 inset-x-0 w-screen z-50 flex items-center justify-center">
        <Image
          alt="Top Board"
          src={TopBoard}
          sizes="100%"
          className="w-full min-w-[1000px]"
        />
      </div>
      <div id="page-scroller">
        <div>
          <One />
        </div>
        <div>
          <Two />
        </div>
        <div>
          <Three />
        </div>
        <div>
          <Four />
        </div>
        <div>
          <Five />
        </div>
      </div>
      <DownBoard />
    </main >
  );
}
