'use client'
import React from 'react';
import Date from './setdate';
import { useState, useEffect } from 'react';
// import { useClient } from 'next/edge';
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="relative h-screen w-screen">
      {/* Background Video */}
      <video autoPlay muted loop className=" w-full h-full object-cover">
        <source src="/NarmadaRiver.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white bg-opacity-75 rounded-lg p-4 ">
          <center>
            <a href="http://hindupoojari.com/" target="_blank" rel="noopener noreferrer">
              <img src="profilePicture.jpg" alt="PhaniSarma" style={{ height: '60px' }} />
            </a>
            <Date />
          </center>
        </div>
      </div>
    </div>
  );
}
