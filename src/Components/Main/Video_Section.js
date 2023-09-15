import React, { useEffect, useRef } from 'react'
import video from "../../Assets/Hero_Images/boxing2.mp4"

const Video_Section = () => {
  const videoref = useRef()
  useEffect(() => {
    // document.getElementById("videos").play();
  }, [])
  return (
    <>
      <section class="relative flex items-center justify-center h-screen overflow-hidden">
        <video autoplay loop muted id='videos' className='w-auto min-w-full min-h-full bg-center'>
          <source src={video} type="video/mp4" />Your browser does not support the video tag.
        </video>
        <div className='w-[100vw] h-[100vh] absolute top-0 bg-blue opacity-5'>
          <h1 className='text-3xl bg-blue opacity text-white'>Hello</h1></div>
      </section>
    </>
  )
}

export default Video_Section;