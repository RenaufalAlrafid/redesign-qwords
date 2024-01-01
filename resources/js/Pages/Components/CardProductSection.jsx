import React, { useEffect, useRef } from "react";
import CardProduct from "./CardProduct";
import { motion, useAnimation, useInView } from "framer-motion";

export default function CardProductSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainConrtrols = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainConrtrols.start("visible");
        }
    }, [isInView]);
    return (
        <motion.div
            ref={ref}
            className="flex flex-col bg-[#ffffff] justify-center py-12 w-full"
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainConrtrols}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-center flex flex-col gap-4 px-96"
            >
                <h1 className="text-4xl font-extrabold text-black">
                    Cloud Hosting Indonesia
                </h1>
                <span className="text-4xl font-extrabold text-primary ">
                    Diskon Hingga 50%
                </span>
                <p className="text-lg">
                    Layanan cloud hosting indonesia terbaik dengan teknologi
                    andal dan hardware kelas terbaik untuk website Anda
                </p>
            </motion.div>
            <div className="flex justify-center flex-wrap items-center my-8 gap-8">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainConrtrols}
                    transition={{ duration: 0.25, delay: 1.5 }}
                >
                    <CardProduct
                        type={"Value Cloud Hosting"}
                        name={"VCH1"}
                        price={"Rp 24.500"}
                        discount={"Rp 14.500"}
                        disk={"3 GB"}
                        bandwith={"Unlimited"}
                        core={"0.5 Core"}
                        addon={"No"}
                    ></CardProduct>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainConrtrols}
                    transition={{ duration: 0.25, delay: 1.25 }}
                >
                    <CardProduct
                        type={"Value Cloud Hosting"}
                        name={"VCH1"}
                        price={"Rp 24.500"}
                        discount={"Rp 14.500"}
                        disk={"3 GB"}
                        bandwith={"Unlimited"}
                        core={"0.5 Core"}
                        addon={"No"}
                    ></CardProduct>
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
                    <CardProduct
                        type={"Value Cloud Hosting"}
                        name={"VCH1"}
                        price={"Rp 24.500"}
                        discount={"Rp 14.500"}
                        disk={"3 GB"}
                        bandwith={"Unlimited"}
                        core={"0.5 Core"}
                        addon={"No"}
                    ></CardProduct>
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
                    <CardProduct
                        type={"Value Cloud Hosting"}
                        name={"VCH1"}
                        price={"Rp 24.500"}
                        discount={"Rp 14.500"}
                        disk={"3 GB"}
                        bandwith={"Unlimited"}
                        core={"0.5 Core"}
                        addon={"No"}
                    ></CardProduct>
                </motion.div>
            </div>
        </motion.div>
    );
}
