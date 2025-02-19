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



export default function Home() {
  React.useEffect(() => {
    usePageScroller({ isAllowToScrollThroughSlides: true }).initPageScroller("#page-scroller");
  }, [])
  return (
    <main>
      <audio loop autoPlay muted={false} src="/background-music.mp3" type="audio/mp3" />
      <div className="fixed top-0 inset-x-0 w-screen z-50 flex items-center justify-center">
        <Image
          alt="Top Board"
          src={TopBoard}
          sizes="100%"
          className="w-full min-w-[1000px]"
        />
      </div>
      <div id="page-scroller">
        <div page-scroller-slide='true'>
          <One />
        </div>
        <div page-scroller-slide='true'>
          <Two />
        </div>
        <div page-scroller-slide='true'>
          <Three />
        </div>
        <div page-scroller-slide='true'>
          <Four />
        </div>
        <div page-scroller-slide='true'>
          <Five />
        </div>
      </div>
      <DownBoard />
    </main >
  );
}
