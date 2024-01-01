import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function SolusiCard({ background, nama, deskripsi }) {
    return (
        <Link href="/">
            <motion.div
                // whileHover={{ scale: 1.05 }}
                className="group sticky top-4 overflow-hidden bg-primary rounded-3xl max-w-[400px]"
            >
                <img
                    src={background}
                    alt="solution Image"
                    className="h-full w-full z-0 bg-primary object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-50 group-hover:-translate-x-5 "
                />
                <div className="absolute top-4 gap-1  flex flex-col z-20 text-black py-2 pl-3 pr-20">
                    <h1 className="text-white text-2xl font- extrabold">
                        {nama}
                    </h1>
                    <p className="text-white text-md font-bold">{deskripsi}</p>
                </div>
            </motion.div>
        </Link>
    );
}
