import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function DomainCheck() {
    const [domain, setDomain] = useState("");
    const [eror, SetError] = useState(false);
    const [isValidDomain, setValidDomain] = useState(true);
    const [search, setSearch] = useState(false);
    const [availableDomain, setAvailableDomain] = useState();
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setDomain(e.target.value);
        setSearch(false);
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setValidDomain(domainRegex.test(e.target.value));
    };

    const mainConrtrols = useAnimation();

    useEffect(() => {
        if (search) {
            mainConrtrols.start("visible");
        } else {
            mainConrtrols.start("hidden");
        }
    }, [search]);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.wixapis.com/domain-search/v2/check-domain-availability?domain=${domain}`
            );
            const data = await response.json();
            console.log(data.availability.available);
            setAvailableDomain(data.availability.available);
            setLoading(false);
            SetError(false);
            setSearch(true);

            // Handle the data as needed
        } catch (error) {
            // console.log("Error fetching data:", error);
            SetError(true);
            setLoading(false);
        }
    };
    return (
        <div>
            <div className="my-10 flex w-full justify-center">
                <div className="flex flex-col">
                    <input
                        type="text"
                        className={`rounded-2xl min-w-[600px] py-4 text-2xl input-search focus:ring-black ${
                            !isValidDomain ? "border-red-500" : ""
                        }`}
                        placeholder="ketik nama domain mu disini"
                        onChange={handleChange}
                    />
                    {eror && (
                        <span className="text-white font-bold text-xl">
                            "Terjadi Error "
                        </span>
                    )}
                    {!isValidDomain && (
                        <span className="text-white font-bold text-xl">
                            "Input Harus Bentuk Domain (contoh: google.com)"
                        </span>
                    )}
                </div>

                <button
                    className="btn btn-lg mx-4 rounded-3xl bg-black text-white hover:bg-white hover:text-black border-none"
                    type="submit"
                    onClick={handleSearch}
                >
                    {loading ? "Loading.." : "Cek Domain"}
                </button>
            </div>
            {search == true && (
                <motion.div
                    className="flex flex-col items-center"
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainConrtrols}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    {availableDomain === false ? (
                        <div>
                            <h1 className="text-white text-3xl font-bold">
                                Domain Ini Milik Anda ?
                            </h1>
                            <button className="btn font-bold max-w-sm  bg-black text-white hover:bg-white hover:text-black border-none my-4">
                                Transfer {domain} ke Qwords
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-white text-3xl font-bold">
                                Domain Ini Tersedia
                            </h1>
                            <button className="btn font-bold max-w-sm  bg-black text-white hover:bg-white hover:text-black border-none my-4">
                                Daftarkan {domain} Sekarang
                            </button>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
}
