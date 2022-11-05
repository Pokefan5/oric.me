import Navbar from "./navbar";
import ContentWrapper from "./content-wrapper";
import bg from "../public/bg.jpg"

const {motion, AnimatePresence} = require('framer-motion');
const variants = {
    enter: { opacity: 0 }
}

function removeCover() {
    document.getElementById('cover').remove();
}

export default function Layout ({children}) {
    return (
    <div className="h-screen">
        <Navbar/>
        <motion.div
        id='cover'
        variants={variants}
        animate="enter"
        transition={{delay: .3, duration: 1}}
        className='h-screen w-screen fixed bg-slate-700 z-30'
        onAnimationComplete={removeCover}>
        </motion.div>     
        <div style={{backgroundRepeat:`no-repeat`, backgroundPosition:`center center`, backgroundImage: `url(${bg.src})`, backgroundSize: `cover`}} className='h-screen w-screen fixed overflow-scroll'>
            <div className='h-full w-full fixed overflow-scroll py-16 px-2 sm:px-16 bg-gray-800/50'>
                <AnimatePresence
                mode="wait">
                    {children}
                </AnimatePresence>
            </div>
        </div>
    </div>
    );
}