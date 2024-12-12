import React from 'react';
import { motion } from 'framer-motion';

function Testimonial() {
    const cardVariants = {
        offscreen: { opacity: 0, x: -100 }, // Start offscreen (left)
        onscreen: {
            opacity: 1,
            x: 0, // Slide into view
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            },
        },
    };

    return (
        <div className="flex flex-col py-10 p-4 md:px-40 space-y-10 md:space-y-0 md:space-x-0 bg-gray-200">
            <div>
                <h1 className="text-center text-4xl font-bold mb-6 text-[#160E53]">Testimonial</h1>
            </div>
            <ul className="flex md:flex-row flex-col md:gap-3 gap-9">
                {/* Testimonial Card 1 */}
                <motion.div
                    className="flex flex-col items-center md:p-6 p-7 bg-[#D9D9D9] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    <li>
                        <h1 className="text-md font-thin text-start">
                            "I tried many web development classes, but this one stands out, not just for its features
                            but for the story behind it. An 11-year-old built this? I was skeptical at first, Now I'm
                            convinced! The Website is intuitive, and the design templates are fresh and modern. It's
                            inspiring to see such young talent creating tools that make a real impact."
                        </h1>
                        <h1 className="text-start font-bold text-[#160E53]">HAFEEX</h1>
                    </li>
                </motion.div>

                {/* Testimonial Card 2 */}
                <motion.div
                    className="flex flex-col items-center md:p-6 p-7 bg-[#D9D9D9] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        ...cardVariants,
                        offscreen: { opacity: 0, x: 100 }, // Slide in from the right
                    }}
                >
                    <li>
                        <h1 className="text-md font-thin text-start">
                            "I tried many web development classes, but this one stands out, not just for its features
                            but for the story behind it. An 11-year-old built this? I was skeptical at first, Now I'm
                            convinced! The Website is intuitive, and the design templates are fresh and modern. It's
                            inspiring to see such young talent creating tools that make a real impact."
                        </h1>
                        <h1 className="text-start font-bold text-[#160E53]">RASHID</h1>
                    </li>
                </motion.div>
            </ul>
        </div>
    );
}

export default Testimonial;
