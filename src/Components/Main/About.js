import React from 'react'
import Carousel from '../Carousels'
import Carousel_image from '../../Assets/Hero_Images/carousel_image1.png'
import Carousel_image2 from '../../Assets/Hero_Images/carousel_image2.png'
import Carousel_image3 from '../../Assets/Hero_Images/carousel_image3.png'
import Carousel_image4 from '../../Assets/Hero_Images/carousel_image4.png'

const About = () => {
    return (
        <section id="about" className="overflow-hidden bg-blue text-white text-center containerm px-6 py-10 mx-auto">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap items-center justify-around">
                    <div className="w-full flex justify-center items-center px-4 lg:w-4/12">
                        <div className="-mx-3 flex justify-center items-center max-w-[460px]">
                            <div className="w-full px-3">
                                <Carousel>
                                    {/* {src.map(
                                        () => ( */}
                                    <img className='h-[550px] max-w-[380] object-cover' src={Carousel_image} alt="c_images" />
                                    <img className='h-[550px] max-w-[380] object-cover' src={Carousel_image2} alt="c_images" />
                                    <img className='h-[550px] max-w-[380] object-cover' src={Carousel_image3} alt="c_images" />
                                    <img className='h-[550px] max-w-[480] object-cover' src={Carousel_image4} alt="c_images" />
                                    {/* )
                                    )} */}
                                </Carousel>

                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                About Us
                            </span>
                            <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                                Empowering Your Fitness Journey with our Gym
                            </h2>
                            <p className="text-body-color mb-8 text-base">
                                we're passionate about helping our clients achieve their fitness goals.
                                Our experienced trainers and state-of-the-art equipment create a supportive
                                and motivating environment for all fitness levels
                            </p>
                            <p className="text-body-color mb-12 text-base">
                                With personalized workout plans and a variety of group fitness classes,
                                we're committed to helping you reach your full potential. Our team is dedicated to
                                making fitness fun and accessible for everyone. Come see us today and discover what
                                sets XYZ Gym apart.
                            </p>
                            <a
                                href="javascript:void(0)"
                                className="bg-white text-blue inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal hover:bg-opacity-90 hover:underline decoration-1 lg:px-8 xl:px-10"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About