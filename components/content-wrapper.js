import React from "react";

const {motion} = require('framer-motion');
const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
}

export default function ContentWrapper ({children}) {
    return (
        <motion.div 
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
        className='bg-gray-700/75 text-slate-200 text-xl rounded-xl mb-16 p-16 items-center text-center justify-center flex flex-col'>
            {children}
        </motion.div>
    )
}