import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from "next/image";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faMastodon,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
    faPaw,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const {motion} = require('framer-motion');
const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
}

export default function Navbar () {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            {/* Desktop Navbar */}
            <div className="mx-0 bg-slate-700 text-slate-400 h-20 sm:grid grid-flow-col shadow-2xl select-none w-screen relative z-30 hidden">
                <div className="text-left my-auto mx-8 flex justify-start items-center">
                    <div className="grid grid-flow-col items-center">
                        <Link href="/" className="grid grid-flow-col pointer-events-auto">
                            <Image src="/pfp.jpg" width={48} height={48} className="rounded-xl pointer-events-none"/>
                            <div className="text-4xl ml-2 mr-8">Oric</div>
                        </Link>
                        <Link href="/" className="px-4 py-2 rounded-md hover:bg-slate-600 active:bg-slate-500 active:shadow-inner">Home</Link>
                        <Link href="/about" className="px-4 py-2 rounded-md hover:bg-slate-600 active:bg-slate-500 active:shadow-inner">About</Link>
                        <Link href="/social" className="px-4 py-2 rounded-md hover:bg-slate-600 active:bg-slate-500 active:shadow-inner">Social Media</Link>
                    </div>
                </div>
                <div className="text-right my-auto mx-8 flex justify-end text-slate-400">
                    <motion.a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.8 }}
                        href="https://meow.social/@Oric" className="hover:text-slate-200 mx-2">
                            <FontAwesomeIcon icon={faMastodon} className="text-4xl" />
                    </motion.a>
                    <motion.a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.6 }}
                        href="https://github.com/Pokefan5" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                        </motion.a>
                    <motion.a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.4 }}
                        href="https://www.furaffinity.net/user/n0tacat/" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faPaw} className="text-4xl" />
                        </motion.a>
                    <motion.a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.2 }}
                        href="https://twitter.com/Oric_Y" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
                    </motion.a>
                    <motion.a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1 }}
                        href="mailto:admin@oric.me" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                    </motion.a>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="text-right fixed w-screen p-2 sm:hidden z-20 bg-slate-700 text-slate-200 shadow-2xl">
                {nav ? <AiOutlineClose onClick={handleNav} className="float-right border-2 border-slate-600 w-10 rounded-md" size={32} /> : <AiOutlineMenu onClick={handleNav} className="float-right border-2 border-slate-600 w-10 rounded-md" size={32} />}
            </div>

            <div onClick={handleNav} className={nav ? "sm:hidden bg-slate-700/70 text-slate-200 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen ease-in-out duration-500 z-10" : "sm:hidden bg-slate-700/30 text-slate-200 absolute top-0 left-full right-0 bottom-0 flex flex-col items-center w-full h-screen ease-in-out duration-500 z-10"}>
                        <Link href="/" className="mt-16 grid grid-flow-col pointer-events-auto">
                            <Image src="/pfp.jpg" width={48} height={48} className="rounded-xl pointer-events-none"/>
                            <div className="text-4xl ml-2 mr-8">Oric</div>
                        </Link>
                        <Link href="/" className="px-4 py-2 rounded-md hover:bg-slate-600/50 active:bg-slate-500 active:shadow-inner">Home</Link>
                        <Link href="/about" className="px-4 py-2 rounded-md hover:bg-slate-600/50 active:bg-slate-500 active:shadow-inner">About</Link>
                        <Link href="/social" className="px-4 py-2 rounded-md hover:bg-slate-600/50 active:bg-slate-500 active:shadow-inner">Social Media</Link>
                    <div className="text-right my-4 mx-auto flex justify-end text-slate-400">
                    <a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.8 }}
                        href="https://meow.social/@Oric" className="hover:text-slate-200 mx-2">
                            <FontAwesomeIcon icon={faMastodon} className="text-4xl" />
                    </a>
                    <a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.6 }}
                        href="https://github.com/Pokefan5" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                        </a>
                    <a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.4 }}
                        href="https://www.furaffinity.net/user/n0tacat/" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faPaw} className="text-4xl" />
                        </a>
                    <a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1.2 }}
                        href="https://twitter.com/Oric_Y" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
                    </a>
                    <a
                        variants={variants}
                        initial="hidden"
                        animate="enter"
                        transition={{ delay: 1 }}
                        href="mailto:admin@oric.me" className="hover:text-slate-200 mx-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                    </a>
                </div>
            </div>
        </>
    )
}