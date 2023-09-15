import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faDumbbell, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Feature_sec = () => {
    return (
        <section id='features' className="bg-white text-white text-center container px-6 py-10 mx-auto">
            <div className='flex justify-start items-center text-center flex-col w-full mb-12'>
                <h1 className='heading' >Our Features</h1>
                <div className="relative text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    <p className="px-8 py-2 text-lg text-center italic text-blue">Join today and experience all the features that our gym has to offer.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </div>
            </div>
            <div className="grid lg:gap-x-12 lg:grid-cols-3">
                <div className="mb-12 lg:mb-0">
                    <div className="rounded-lg shadow-lg h-full block bg-blue">
                        <div className="flex justify-center">
                            <div className="p-4 bg-lightblue rounded-full shadow-lg inline-block -mt-8">
                                <FontAwesomeIcon className="w-8 h-8 text-white" icon={faCalendarAlt} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="text-lg font-bold mb-4">Personalized Workout Plans</h5>
                            <p>
                                Our experienced trainers will create a workout plan tailored to your fitness goals and schedule. Get the results you want with our expert guidance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12 lg:mb-0">
                    <div className="rounded-lg shadow-lg h-full block bg-blue">
                        <div className="flex justify-center">
                            <div className="p-4 bg-lightblue rounded-full shadow-lg inline-block -mt-8">
                                <FontAwesomeIcon className="w-8 h-8 text-white" icon={faDumbbell} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="text-lg font-bold mb-4">State-of-the-Art Equipment</h5>
                            <p>
                                Our top-of-the-line equipment helps you get the most out of your workouts. Get the results you want with the latest technology at our gym.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="rounded-lg shadow-lg h-full block bg-blue">
                        <div className="flex justify-center">
                            <div className="p-4 bg-lightblue rounded-full shadow-lg inline-block -mt-8">
                                <FontAwesomeIcon className="w-8 h-8 text-white" icon={faPeopleGroup} />
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="text-lg font-bold mb-4">Group Fitness Classes</h5>
                            <p>
                                Have fun while getting fit with our variety of classes, including high-energy cardio, relaxing yoga, and Pilates. Join us for an engaging workout experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature_sec