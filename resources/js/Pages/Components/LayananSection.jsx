import React, { useEffect, useRef } from "react";
import LayananCard from "./LayananCard";
import { motion, useAnimation, useInView } from "framer-motion";

export default function LayananSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainConrtrols = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainConrtrols.start("visible");
        }
    }, [isInView]);
    return (
        <div ref={ref} className="bg-[#fff8f3]">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainConrtrols}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-col justify-center items-center gap-8 py-8"
            >
                <h1 className="text-3xl font-extrabold text-black">
                    Lihat Juga Layanan Kami Yang Lain
                </h1>
                <span>
                    Optimalkan performa website bisnis Anda dengan berbagai
                    layanan berkualitas dari Qwords
                </span>
                <div className="flex  gap-4 ">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainConrtrols}
                        transition={{ duration: 0.25, delay: 1.25 }}
                    >
                        <LayananCard
                            logo={
                                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp"
                            }
                            nama={"SSL"}
                            description={
                                "Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate."
                            }
                            harga={"Rp. 112.000"}
                            durasi={"tahun"}
                        ></LayananCard>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainConrtrols}
                        transition={{ duration: 0.25, delay: 1 }}
                    >
                        <LayananCard
                            logo={
                                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/dbstack.webp"
                            }
                            nama={"Dedicated Server"}
                            description={
                                "Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas"
                            }
                            harga={"Rp. 499.000"}
                            durasi={"bulan"}
                        ></LayananCard>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainConrtrols}
                        transition={{ duration: 0.25, delay: 0.75 }}
                    >
                        <LayananCard
                            logo={
                                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/disk.webp"
                            }
                            nama={"Colocation Server"}
                            description={
                                "Akses cepat dari seluruh dunia dengan fasilitas 24x7 full monitoring dengan cooling system terbaik serta fire extinguisher"
                            }
                            harga={"Rp. 500.000"}
                            durasi={"bulan"}
                        ></LayananCard>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
