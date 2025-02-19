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
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
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
      <ReactFullpage
      
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div data-anchor="page-1" className="section">
                <One />
              </div>
              <div data-anchor="page-2" className="section">
                <Two />
              </div>
              <div data-anchor="page-3" className="section">
                <Three />
              </div>
              <div data-anchor="page-4" className="section">
                <Four />
              </div>
              <div data-anchor="page-5" className="section">
                <Five />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <DownBoard />
    </main >
  );
}
