import React from "react";
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
    return (
        <div className="mx-0 bg-slate-700 text-slate-400 h-20 grid grid-flow-col shadow-2xl select-none w-screen relative z-30">
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
    )
}