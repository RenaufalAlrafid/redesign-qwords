import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <div className="flex flex-col bg-[#13151b] pt-14 gap-7 px-9">
            <div className="grid grid-cols-3 place-items-stretch place-content-stretch">
                <div className="place-self-center">
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-dark.webp"
                        alt="logo-qwords"
                        className="min-w-52"
                    />
                </div>
                <div className="flex flex-col gap-2 text-white place-self-center">
                    <h1 className="font-bold text-xl">
                        PT Qwords Company International
                    </h1>
                    <p className="text-lg">
                        Cloud Web Hosting Indonesia. Domain & hosting terbaik
                        dengan akses cepat yang didukung layanan support 24/7
                    </p>
                </div>
                <div>
                    <Link href="https://www.bsigroup.com/en-ID/validate-bsi-issued-certificates/client-directory-certificate/IS%20776219">
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/bsi.webp"
                            alt="bsi-qwords"
                        />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-3 px-6  gap-6 gap-y-10">
                <div className="flex flex-col gap-4 px-6">
                    <h1 className="font-bold pb-2 text-2xl">Customer Care</h1>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Pembayaran
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Faktur Pajak
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Bantuan 24 Jam
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Qwords Reward
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Knowladge Base
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Blog
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        FAQ
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Kontak
                    </Link>
                </div>
                <div className="flex flex-col gap-4 px-6">
                    <h1 className="font-bold pb-2 text-2xl">Mengenai Kami</h1>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Corporate Website
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Qwords History
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Qwords Differences
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Media Publication
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Network & Infrastructure
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Partner
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Career & Employment
                    </Link>
                </div>
                <div className="flex flex-col gap-4 px-6">
                    <h1 className="font-bold pb-2 text-2xl">layanan Lainya</h1>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Master Service Agreement
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Manage The Box Server
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Flexi Main Domain
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        FTP Backup
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Offline Backup
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Hosting Insurance
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Software License
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Digital Signature
                    </Link>
                </div>
                <div className="flex flex-col gap-4 px-6">
                    <h1 className="font-bold pb-2 text-2xl">MSA/SLA/AUP</h1>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Extended Support
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Refund Policy
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Privacy Policy
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Product Life Cycle Policy
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Penggunaan Merek dan Logo
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Migrasi Ke Qwords
                    </Link>
                </div>
                <div className="flex flex-col gap-4 px-6">
                    <h1 className="font-bold pb-2 text-2xl">Afiliasi</h1>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Qwords VIP Partner
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Private Label Hosting Reseller
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Private Label Domain Reseller
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Product Life Cycle Policy
                    </Link>
                </div>
                <div className="flex flex-col gap-4 px-6">
                    <h1 className="font-bold pb-2 text-2xl">Free Tools</h1>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Qwords Link-Q
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        WhatsApp Link Generator
                    </Link>
                    <Link className="text-white text-xl  hover:text-[#ff6d0b]">
                        Network Tools
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-4 px-6 gap-3 py-9 text-white">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Kantor Surabaya</h1>
                    <p className="text-xl font-semibold">
                        Gedung Bursa Efek Indonesia Lt.10, Jl. Taman AIS
                        Nasution No.21, Surabaya 60271 - Indonesia 031 30008800
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Kantor Yogyakarta</h1>
                    <p className="text-xl font-semibold">
                        Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak, Sleman,
                        Yogyakarta 55584 - Indonesia 0274 6058800
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Kantor Jakarta</h1>
                    <p className="text-xl font-semibold">
                        Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat no.8, Jakarta
                        12710 - Indonesia 021 39708800
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Kantor Bandung</h1>
                    <p className="text-xl font-semibold">
                        Jl. Terusan Setra Indah I No.19, Sukagalih, Sukajadi,
                        Bandung 40163 - Indonesia 022 30508800
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="text-white text-2xl font-bold">
                    Terdaftar di PSE, ICANN dan Partner Lainnya
                </h1>
                <div className="flex gap-4 flex-wrap">
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp"
                        alt=""
                        className="w-32"
                    />
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp"
                        alt=""
                        className="w-32"
                    />
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg"
                        alt=""
                        className="w-32"
                    />
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg"
                        alt=""
                        className="w-32"
                    />
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp"
                        alt=""
                        className="w-32"
                    />
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp"
                        alt=""
                        className="w-32"
                    />
                </div>
            </div>
            <div className="text-center w-full text-white py-4">
                <span>Copyright © PT. Qwords Company International</span>
            </div>
        </div>
    );
}
