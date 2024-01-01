import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./Components/HeroSection";
import CheckApiSection from "./Components/CheckApiSection";
import CardProductSection from "./Components/CardProductSection";
import LayananSection from "./Components/LayananSection";
import SolusiSection from "./Components/SolusiSection";



export default function LandingPage() {
    return (
        <GuestLayout>
            <HeroSection></HeroSection>
            <CheckApiSection></CheckApiSection>
            <CardProductSection></CardProductSection>
            <LayananSection></LayananSection>
            <SolusiSection></SolusiSection>
        </GuestLayout>
    );
}
