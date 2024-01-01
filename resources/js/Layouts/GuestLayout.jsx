import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Pages/Components/Footer";
import Navbar from "@/Pages/Components/Navbar";
import { Link } from "@inertiajs/react";
import React from "react";

export default function GuestLayout({ children, props }) {
    const handleScroll = () => {
        console.log("User scrolled!");
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-100" onScroll={handleScroll}>
            <Navbar></Navbar>
            <div className="">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { props })
                )}
            </div>
            <Footer></Footer>
        </div>
    );
}
