import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/Connected world-bro (2).png';

function Middle_Two() {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: -50 }, // Start offscreen above
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' }, // Smooth transition
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="bg-gray-200 py-10 md:py-20">
            <motion.div
                className="flex flex-col md:flex-row items-center md:px-40 space-y-10 md:space-y-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
            >
                {/* Text Content */}
                <motion.div
                    className="flex flex-col w-full md:w-1/2 space-y-5 py-10 md:px-4 px-10"
                    variants={textVariants}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0C154E]">
                        What is the Internet?
                    </h1>
                    <p className="text-md md:text-md leading-relaxed text-gray-700">
                        The internet is a global network of interconnected computers and servers that communicate with each other using standardized
                        communication protocols (such as TCP/IP). It enables the exchange of data, information, and resources across vast distances,
                        connecting billions of devices worldwide. The internet allows people to access and share information, communicate via email
                        or messaging, browse websites, watch videos, and shop online.
                    </p>
                    {/* CTA Button */}
                    <div
                        className="bg-[#0C154E] w-40 md:w-60 p-2 rounded-full hover:bg-[#131d5d] transition duration-150 ease-in-out cursor-pointer"
                        role="button"
                        aria-label="Get Started with Codight"
                    >
                        <h2 className="text-white text-center text-sm md:text-base font-thin">
                            Get Started
                        </h2>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="flex justify-center w-full md:w-2/4"
                    variants={imageVariants}
                >
                    <img
                        src={image1}
                        alt="Illustration depicting a connected world through the internet"
                        className="w-full max-w-md"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Middle_Two;
