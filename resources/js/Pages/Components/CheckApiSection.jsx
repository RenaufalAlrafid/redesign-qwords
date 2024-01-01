import React, { useEffect, useRef } from "react";
import DomainCheck from "./DomainCheck";
import { motion, useAnimation, useInView } from "framer-motion";

export default function CheckApiSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainConrtrols = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainConrtrols.start("visible");
        }
    }, [isInView]);
    return (
        <div className="relative bg-primary  h-[500px] flex items-end">
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainConrtrols}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex w-full h-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 125">
                    <path
                        fill="#ff7d0a"
                        fillOpacity="0.75"
                        d="M0,32L26.7,58.7C53.3,85,107,139,160,138.7C213.3,139,267,85,320,101.3C373.3,117,427,203,480,229.3C533.3,256,587,224,640,213.3C693.3,203,747,213,800,213.3C853.3,213,907,203,960,192C1013.3,181,1067,171,1120,144C1173.3,117,1227,75,1280,80C1333.3,85,1387,139,1413,165.3L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                    ></path>
                </svg>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainConrtrols}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute z-10 top-0 left-0 right-0 bottom-0 mx-auto w-full text-center py-20"
            >
                <div className="px-96">
                    <h1 className="text-white text-4xl font-bold">
                        Cari Nama Domainmu
                    </h1>
                    <span className="text-lg text-white my-8">
                        Nama Domain digunakan untuk mempermudah pengunjung
                        menuju ke situs Anda. Pilih nama domain yang paling
                        mencerminkan bisnis, produk, atau layanan Anda.
                    </span>
                </div>
                <DomainCheck></DomainCheck>
            </motion.div>
        </div>
    );
}
