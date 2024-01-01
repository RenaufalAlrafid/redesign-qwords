import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function LayananCard({
    logo,
    nama,
    description,
    harga,
    durasi,
}) {
    const [isHovered, setHovered] = useState(false);
    const mainConrtrols = useAnimation();

    useEffect(() => {
        if (isHovered) {
            mainConrtrols.start("hover");
        } else {
            mainConrtrols.start("initial");
        }
    }, [isHovered]);
    return (
        <motion.div
            variants={{
                hover: {
                    scale: 1.1,
                    backgroundColor: "#fff8f3",
                },
                initial: {
                    scale: 1,
                    backgroundColor: "#ffff",
                },
            }}
            initial="initial"
            transition={{
                duration: 0.25,
            }}
            animate={mainConrtrols}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-neutral group rounded-2xl"
        >
            <div className=" #cf3b21 flex flex-col gap-6 shadow-2xl rounded-2xl max-w-96 px-8 py-8  ">
                <div className="flex gap-4 items-center ">
                    <img src={logo} alt="logo layanan" />
                    <span className="text-xl font-bold">{nama}</span>
                </div>
                <p>{description}</p>

                <span>Mulai dari</span>
                <div className="flex items-end gap-1">
                    <span className="text-3xl text-primary font-extrabold">
                        {harga}
                    </span>
                    <span className="text-xl"> /{durasi}</span>
                </div>
                <button className="bg-primary text-white py-2 rounded-lg hover:bg-blue-500 ">
                    Lihat Detail
                </button>
            </div>
        </motion.div>
    );
}
