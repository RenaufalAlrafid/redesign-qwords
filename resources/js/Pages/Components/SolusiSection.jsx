import React from "react";
import SolusiCard from "./SolusiCard";

export default function SolusiSection() {
    return (
        <div className="bg-neutral flex flex-col items-center py-8 gap-4">
            <h1 className="text-black text-3xl font-extrabold">
                Solusi Paket Hosting Terbaik dari Kami
            </h1>
            <p>
                Kami menawarkan solusi paket hosting terbaik untuk segala
                kebutuhan website dan sistem Anda. Mulai dari blog hingga
                website bisnis dan perusahaan
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
                <SolusiCard
                    nama={"Perusahaan"}
                    deskripsi={
                        "Wujudkan website perusahaan profesional dan berkelas dengan dukungan web hosting terbaik dan fitur keamanan ekstra"
                    }
                    background={
                        "https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/company.webp"
                    }
                ></SolusiCard>
                <SolusiCard
                    nama={"UMKM dan Toko Online"}
                    deskripsi={
                        "Memberikan hosting terbaik untuk mendukung kebutuhan website pemasaran barang/jasa secara online."
                    }
                    background={
                        "https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/umkm.webp"
                    }
                ></SolusiCard>
                <SolusiCard
                    nama={"Organisasi dan Komunitas"}
                    deskripsi={
                        "Bikin website organisasi atau komunitas Anda dengan paket hosting unggulan yang ramah kantong."
                    }
                    background={
                        "https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/orgs.webp"
                    }
                ></SolusiCard>
                <SolusiCard
                    nama={"Sekolah"}
                    deskripsi={
                        "Infrastruktur web hosting terbaik untuk menunjang kegiatan e-learning. Didukung platform MOODLE khusus pembelajaran daring"
                    }
                    background={
                        "https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/school.webp"
                    }
                ></SolusiCard>
                <SolusiCard
                    nama={"Developer"}
                    deskripsi={
                        "Tersedia paket hosting Indonesia dengan spesifikasi khusus yang dev-friendly. Ekstra NodeJS dan Git Version Control"
                    }
                    background={
                        "https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/dev.webp"
                    }
                ></SolusiCard>
                <SolusiCard
                    nama={"Blogger dan Personal"}
                    deskripsi={
                        "Memfasilitasi blogger dengan infrastruktur hosting Indonesia terbaik serta template website premium untuk tampil lebih profesional"
                    }
                    background={
                        "https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/blog.webp"
                    }
                ></SolusiCard>
            </div>
        </div>
    );
}
