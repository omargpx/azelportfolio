"use client";

import { delay, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

function Photo() {
    return (
        <>
            <Head>
                <link rel="preload" href="/assets/avatar.png" as="image" />
            </Head>

            <div className="w-full h-full relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                    }}
                >
                    {/* avatar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.4, duration: 0.7, ease: "easeIn" },
                        }}
                        className="w-[295px] h-[295px] xl:w-[495px] xl:h-[495px] mix-blend-lighten absolute mt-1 ml-1"
                    >
                        <Image
                            src="/assets/avatar.png"
                            priority
                            quality={100}
                            fill
                            alt=""
                            className="object-contain"
                        />
                    </motion.div>
                    {/* circle */}
                    <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xlmns="http://www.w3.org/2000/svg">
                        <motion.circle cx="253" cy="253" r="250" stroke="#0967b3" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}>
                        </motion.circle>
                    </motion.svg>
                </motion.div>
            </div>
        </>
    );
}

export default Photo;
