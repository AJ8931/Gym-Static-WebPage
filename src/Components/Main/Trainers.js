import React from 'react'
import image from "../../Assets/Hero_Images/trainer.png"

const Trainers = () => {
    return (
        <section id="trainers" className='flex justify-center items-center w-[100vw] py-8 text-blue bg-white'>
            <div className='px-8 py-8 m-auto flex flex-col justify-between items-center container gap-10 bg-lightWhite rounded-2xl shadow-xl'>
                <div className='flex justify-start items-center text-center flex-col w-full'>
                    {/* <div className='pl-12'> */}
                    <h1 className='heading' >
                        Gym Mentors
                    </h1>
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-8 py-2 text-lg text-center italic">Get in shape and achieve your fitness goals with our experienced and certified gym trainers.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6 flex-col xl:flex-row'>

                    <div className=' flex justify-center items-center flex-col'>
                        <div className='object-cover lg:w-[220px] w-[150px] m-auto'>
                            <img className='lg:w-[220px] lg:h-[220px]  w-[150px] h-[150px] object-cover object-top transition-all duration-200 ease-in transform hover:scale-105' src={image} alt='ges' />
                        </div>
                        <div className=' flex justify-center px-3 py-2 items-center flex-col description w-full text-white bg-blue rounded-xl  text-center min-w-[350px] max-w-[550px] '>
                            <h2 className='font-bold uppercase py-1 text-xl underline'>John Smith</h2>
                            <h5 className='font-semibold text-[15px] text-sky'>NASM-CPT, CrossFit Level 1</h5>
                            <p className='pt-1' >John is a dedicated trainer with a passion for helping his clients reach their fitness goals.</p>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center flex-col'>
                        <div className=' object-cover lg:w-[220px] w-[150px] m-auto'>
                            <img className='lg:w-[220px] lg:h-[220px]  w-[150px] h-[150px] object-cover object-top transition-all duration-200 ease-in transform hover:scale-105' src={image} alt='ges' />
                        </div>
                        <div className=' flex justify-center px-3 py-2 items-center flex-col description w-full text-white bg-blue rounded-xl  text-center  min-w-[350px] max-w-[550px]'>
                            <h2 className='font-bold uppercase py-1 text-xl underline'>Sarah Johnson</h2>
                            <h5 className='font-semibold text-[15px] text-sky'>ACE-CPT, TRX Suspension Training</h5>
                            <p className='pt-1'  >Sarah is a high-energy trainer who loves to incorporate new and innovative exercises into her clients' workouts.</p>

                        </div>
                    </div>
                    <div className=' flex justify-center items-center flex-col'>
                        <div className='object-cover lg:w-[220px] w-[150px] m-auto'>
                            <img className='lg:w-[220px] lg:h-[220px]  w-[150px] h-[150px] object-cover object-top transition-all duration-200 ease-in transform hover:scale-105' src={image} alt='ges' />
                        </div>
                        <div className=' flex justify-center px-3 py-2 items-center flex-col description w-full text-white bg-blue rounded-xl  text-center min-w-[350px] max-w-[550px]'>
                            <h2 className='font-bold uppercase py-1 text-xl underline'> Emily Rodriguez</h2>
                            <h5 className='font-semibold text-[15px] text-sky'> NASM-CPT, Precision Nutrition Level 1</h5>
                            <p className='pt-1' >Emily is a passionate trainer who specializes in helping clients achieve their bodybuilding goals.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Trainers
        // <section className="text-gray-800  w-[100vw] h-[100vh] px-12 py-14 ">

        //     <div>


        //         <div className="flex flex-wrap items-center">
        //             <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
        //                 <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg" data-mdb-ripple="true"
        //                     data-mdb-ripple-color="light" style={{ backgroundPosition: "50%" }}>
        //                     <img src="https://mdbootstrap.com/img/new/textures/full/126.jpg" className="w-full" alt='ooo' />
        //                     <a href="#!">
        //                         <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        //                             style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        //                             <div className="flex justify-center items-center h-full">
        //                                 <div className="px-6 py-12 md:px-12 text-white text-center">
        //                                     <h3 className="text-2xl uppercase font-bold mb-6">
        //                                         The future is <u style={{ color: "hsl(231, 52.6%, 85%)" }}>now</u>
        //                                     </h3>
        //                                     <p style={{ color: "hsl(231, 52.6%, 85%)" }}>
        //                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia
        //                                         laboriosam error consequuntur fugit, doloribus rerum, iure nesciunt amet
        //                                         quidem veniam cupiditate hic fugiat dolore aperiam quisquam libero earum
        //                                         quibusdam?
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="relative overflow-hidden bg-no-repeat bg-cover">
        //                             <div
        //                                 className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
        //                                 style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
        //                         </div>
        //                     </a>
        //                 </div>
        //             </div>

        //             <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
        //                 <h2 className="text-3xl font-bold mb-1 text-center">Projects we are proud of</h2>
        //                 <div className="flex mb-12">
        //                     <div className="shrink-0">
        //                         <div className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "hsl(231, 52.6%, 20%)" }}>
        //                             <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        //                                 <path fill="currentColor"
        //                                     d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
        //                                 </path>
        //                             </svg>
        //                         </div>
        //                     </div>
        //                     <div className="grow ml-4">
        //                         <p className="font-bold mb-1">Support 24/7</p>
        //                         <p className="text-gray-500">
        //                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quisquam quibusdam
        //                             modi sapiente magni molestias pariatur facilis reprehenderit facere aliquam ex.
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className="flex mb-12">
        //                     <div className="shrink-0">
        //                         <div className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "hsl(231, 52.6%, 20%)" }}>
        //                             <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        //                                 <path fill="currentColor"
        //                                     d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
        //                                 </path>
        //                             </svg>
        //                         </div>
        //                     </div>
        //                     <div className="grow ml-4">
        //                         <p className="font-bold mb-1">Safe and solid</p>
        //                         <p className="text-gray-500">
        //                             Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
        //                             soluta, quisquam dolore animi mollitia a omnis praesentium, expedita nobis!
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className="flex mb-12">
        //                     <div className="shrink-0">
        //                         <div className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "hsl(231, 52.6%, 20%)" }}>
        //                             <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        //                                 <path fill="currentColor"
        //                                     d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
        //                                 </path>
        //                             </svg>
        //                         </div>
        //                     </div>
        //                     <div className="grow ml-4">
        //                         <p className="font-bold mb-1">Extremely fast</p>
        //                         <p className="text-gray-500">
        //                             Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
        //                             voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi iure
        //                             eveniet facere?
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className="flex">
        //                     <div className="shrink-0">
        //                         <div className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "hsl(231, 52.6%, 20%)" }}>
        //                             <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
        //                                 <path fill="currentColor"
        //                                     d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z">
        //                                 </path>
        //                             </svg>
        //                         </div>
        //                     </div>
        //                     <div className="grow ml-4">
        //                         <p className="font-bold mb-1">Live analytics</p>
        //                         <p className="text-gray-500">
        //                             Illum doloremque ea, blanditiis sed dolor laborum praesentium maxime sint,
        //                             consectetur atque ipsum ab adipisci ullam aspernatur odio soluta, quisquam dolore
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </section>