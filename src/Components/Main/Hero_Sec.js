import React from 'react'
import image3 from '../../Assets/Hero_Images/png_Hero2.png';

const Hero_Sec = () => {
    return (
        // <div>
        //     <div>
        //         <h1></h1>
        //         <span></span>
        //     </div>
        // </div>
        <section id='hero' className="bg-gradient-to-r from-darkblue via-middleblue to-blue bg-cover h-full w-full">
            <div className="grid max-w-screen-xl px-4 py-8 md:py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Elevate Your Fitness, Enhance Your Life</h1>
                    <p className="max-w-2xl mb-6 font-light text-lightWhite lg:mb-8 md:text-lg lg:text-xl">Elevate your fitness and enhance your life at our gym. Our experienced trainers and cutting-edge equipment will help you achieve your goals, improve your health, and boost your confidence.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-center text-white border border-white rounded-lg hover:bg-sky focus:ring-4 focus:ring-gray-100 cursor-pointer">
                        Join Now
                    </a>

                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={image3} alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Hero_Sec