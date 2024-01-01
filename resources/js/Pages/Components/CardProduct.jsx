import React from "react";
import { motion } from "framer-motion";

export default function CardProduct({
    type,
    name,
    price,
    discount,
    disk,
    bandwith,
    core,
    addon,
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col px-8 shadow-2xl rounded-3xl py-4"
        >
            <span className="text-lg text-black">{type}</span>
            <span className="mt-2 text-2xl font-extrabold">{name}</span>
            <strike className="mt-2 opacity-50 text-xl">{price}</strike>
            <span className="mt-4 text-4xl font-extrabold text-primary">
                {discount}
            </span>
            <div className="py-8 flex flex-col gap-4">
                <div className="flex items-center gap-8">
                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/disk.webp"
                            alt="logo-disk"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Disk</span>
                        <span className="text-xl font-bold">{disk}</span>
                    </div>
                </div>
                <div className="flex  items-center gap-8">
                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/bandwidth.webp"
                            alt="logo-disk"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Bandwith</span>
                        <span className="text-xl font-bold">{bandwith}</span>
                    </div>
                </div>
                <div className="flex  items-center gap-8">
                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/cpu.webp"
                            alt="logo-disk"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Core CPU</span>
                        <span className="text-xl font-bold">{core}</span>
                    </div>
                </div>
                <div className="flex  items-center gap-8">
                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/addon.webp"
                            alt="logo-disk"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">
                            Addon/parked domain
                        </span>
                        <span className="text-xl font-bold">{addon}</span>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary text-white hover:bg-blue-400 hover:border-blue-400 rounded-2xl">
                Pesan Sekarang
            </button>
        </motion.div>
    );
}
