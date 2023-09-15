import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Textimonials = () => {
    const SectionParentRef = useRef()

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
        
    //     const ctx = gsap.context((self) => {
    //         const sections = self.selector("section");
    //         const horizontalTween = gsap.to(sections, {
    //             xPercent: -100 * (sections.length - 1),
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: SectionParentRef.current,
    //                 pin: true,
    //                 markers: true,
    //                 scrub: 1,
    //                 snap: 1 / (sections.length - 1),
    //                 end: () => "+=" + document.querySelector(".wrapper").offsetWidth
    //             }
    //         });
    //     }, SectionParentRef);

    //     return () => ctx.revert();
    // }, [])
    return (
        <div className='section_parent bg-white text-blue container px-6 py-10 mx-auto w-full flex flex-col justify-center items-center' ref={SectionParentRef}>
            <section className='flex flex-col justify-center items-center w-full h-[100vh] bg-black panel rounded-xl mb-2'>
                <h1 className='text-center font-extrabold text-4xl block'>Equipements</h1>
                <p className='block'>wide range of Equipements</p>
            </section>
            <section className='flex flex-col justify-center items-center w-full h-[100vh] bg-sky panel rounded-xl my-2'>
                <h1 className='text-center font-extrabold text-4xl block'>Equipements</h1>
                <p className='block'>wide range of Equipements</p>
            </section>
            <section className='flex flex-col justify-center items-center w-full h-[100vh] bg-red panel rounded-xl my-2'>
                <h1 className='text-center font-extrabold text-4xl block'>Equipements</h1>
                <p className='block'>wide range of Equipements</p>
            </section>
            <section className='flex flex-col justify-center items-center text-pink w-full h-[100vh] bg-blue panel rounded-xl my-2'>
                <h1 className='text-center font-extrabold text-4xl block'>Equipements</h1>
                <p className='block'>wide range of Equipements</p>
            </section>
            <section className='flex flex-col justify-center items-center w-full h-[100vh] bg-pink panel rounded-xl mt-2'>
                <h1 className='text-center font-extrabold text-4xl block'>Equipements</h1>
                <p className='block'>wide range of Equipements</p>
            </section>
        </div>
    )
}

export default Textimonials