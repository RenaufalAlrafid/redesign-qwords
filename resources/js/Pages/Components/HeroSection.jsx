import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";

export default function HeroSection() {
    const { scrollYProgress } = useScroll();

    const handleClick = () => {
        console.log(scrollYProgress);
    };

    const handleScroll = () => {
        console.log("User scrolled!");
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainConrtrols = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainConrtrols.start("visible");
        }
    }, [isInView]);

    return (
        <div
            className="flex w-full pt-4 max-h-screen px-8 pb-4 "
            onScroll={handleScroll}
            ref={ref}
        >
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.75,
                    delay: 1,
                }}
                className="w-full pt-24"
            >
                <div className="flex w-full justify-center items-center flex-col h-full px-10">
                    <h1 className="text-5xl font-bold">Cloud Hosting untuk</h1>
                    <h1 className="text-6xl font-extrabold text-primary pb-8 pt-4 text-center">
                        Kesuksesan Websitemu!
                    </h1>
                    <p className="text-center text-xl">
                        Qwords menawarkan layanan Cloud Hosting yang Cepat,
                        Aman, dan Dukungan 24 jam untuk memenuhi kebutuhan
                        hosting Anda. Tersertifikasi ISO 27001 dengan Data
                        Center Tier 3.
                    </p>
                    <h2 className="text-2xl font-extrabold text-primary py-8 ">
                        #QwordsYourSuccess
                    </h2>

                    <button
                        onClick={handleClick}
                        className="btn btn-primary rounded-2xl text-white text-2xl btn-lg"
                    >
                        Pesan Sekarang
                    </button>
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        x: 100,
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                    },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.75,
                    delay: 0.5,
                }}
                className="bg-primary w-full rounded-[50px] drop-shadow-2xl flex "
            >
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 75,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.75,
                        delay: 1,
                    }}
                    className="flex items-end justify-center w-full"
                >
                    <img
                        src="/images/Work_at_home.png"
                        alt="h-1/2"
                        className="h-3/4"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
