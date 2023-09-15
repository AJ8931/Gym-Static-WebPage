import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Data from "../../Assets/FAQs.json";


const FAQ_Sec = () => {
    console.log(Data.ArrayObject)

    return (
        <section id="FAQ" className='flex flex-col justify-center items-center w-[100vw] py-8 text-white bg-blue'>
            <div className='py-8 m-auto container bg-lightWhite rounded-2xl shadow-xl'>
                <div className='flex justify-start items-center text-center flex-col w-full'>
                    {/* <div className='pl-12'> */}
                    <h1 className='heading ' >
                        FAQs
                    </h1>
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-8 py-2 text-lg text-center italic text-blue">Have a Question? Find Your Answers Here"</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                </div>
                <div class="m-8 overflow-hidden p-9 bg-blue rounded-xl">
                    {Data.ArrayObject.map((QA) => (
                        <div key={QA.id} class="group outline-none accordion-section" tabindex="1">
                            <div
                                class="group bg-blue flex justify-between px-4 py-6 items-center text-gray-400 transition ease duration-500 cursor-pointer pr-10 relative"
                            >
                                <div class="group-focus:text-white transition ease duration-500 text-xl">
                                    Question {QA.id}: {QA.question}
                                </div>
                                <div
                                    class="h-8 w-8 border border-gray-500 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:border-white group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2 p-6"
                                >
                                    <FontAwesomeIcon size={40} icon={faChevronDown} />
                                </div>
                            </div>
                            <div
                                class="group-focus:max-h-screen max-h-0 bg-darkblue px-4 overflow-hidden ease duration-500"
                            >
                                <p class="p-2 text-white text-justify text-lg rounded-full">
                                    {QA.Answer}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default FAQ_Sec