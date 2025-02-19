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
import dynamic from "next/dynamic";
const Pageable = dynamic(() => import("pageable"), { ssr: false });

export default function Home() {
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    if (containerRef.current) {
      new Pageable(containerRef.current, {
        animation: 900,
        delay: 0,
        orientation: "horizontal",
        swipeThreshold: 60
      })
    }
  }, [])

  return (
    <main>
      <div className="fixed top-0 inset-x-0 w-screen z-50 flex items-center justify-center">
        <Image
          alt="Top Board"
          src={TopBoard}
          sizes="100%"
          className="w-full min-w-[1000px]"
        />
      </div>
      <div ref={containerRef}>
        <div data-anchor="page-1">
          <One />
        </div>
        <div data-anchor="page-2">
          <Two />
        </div>
        <div data-anchor="page-3">
          <Three />
        </div>
        <div data-anchor="page-4">
          <Four />
        </div>
        <div data-anchor="page-5">
          <Five />
        </div>
      </div>
      <DownBoard />
    </main >
  );
}
