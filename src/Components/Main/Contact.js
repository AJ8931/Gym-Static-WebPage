import React from 'react'

const Contact = () => {
    return (
        <>
            <section id='contact' class="bg-lightWhite/65">
                <div class="py-6 lg:py-14 px-4 mx-auto max-w-screen-md">
                    <div className='flex justify-start items-center text-center flex-col w-full pb-10'>
                        {/* <div className='pl-12'> */}
                        <h1 className='heading' >
                            Contact US
                        </h1>
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-8 py-2 text-lg text-center italic text-blue">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                    </div>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-[500] text-blue">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-lightWhite border border-gray-300 text-blue text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-[500] text-blue">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-lightWhite rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-[500] text-blue">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-lightWhite rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-ccd sm:w-fit hover:bg-ddc focus:ring-4 focus:outline-none focus:ring-primary-300 transition-all duration-1000 ease-in-out">Send message</button>
                    </form>
                </div>
            </section>
            <iframe
                title='Our Map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9552744.26934314!2d-13.4568264025925!3d54.22941960708522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1679401268151!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: "none", outline: "none" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />
        </>
    )
}

export default Contact