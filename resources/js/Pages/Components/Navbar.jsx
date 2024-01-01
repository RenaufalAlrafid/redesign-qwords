import { Link } from "@inertiajs/react";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0 }}
            className=" bg-transparent fixed flex justify-between items-center px-14 py-6 drawer gap-6 z-20"
        >
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex w-full justify-between drawer-conten">
                <div className=" flex gap-2">
                    <label
                        htmlFor="my-drawer"
                        className="flex bg-transparent text-black group"
                    >
                        <div className="btn bg-white rounded-2xl text-black group-hover:bg-black group-hover:text-white">
                            menu
                        </div>
                        <div className="btn bg-white rounded-full text-black group-hover:bg-black group-hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                                />
                            </svg>
                        </div>
                    </label>
                    <Link
                        href="/"
                        className="btn bg-white text-black hover:bg-black hover:text-white rounded-2xl"
                    >
                        Daftar/Login
                    </Link>
                </div>
                <div>
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp"
                        alt="logo-qwords"
                    />
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex  justify-center items-center px-4">
                    <button className="btn btn-sm rounded-full bg-white text-black hover:bg-white hover:text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                            />
                        </svg>
                    </button>
                    <button className="btn btn-sm rounded-full bg-white text-black hover:bg-white hover:text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-sm rounded-full bg-transparent text-black hover:bg-white hover:text-black">
                        ID
                    </button>
                    <button className="btn btn-sm rounded-full bg-transparent text-black hover:bg-white hover:text-black">
                        EN
                    </button>
                </div>
            </div>
            <div className="drawer-side " style={{ zIndex: 50 }}>
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu bg-white px-7 pt-10 w-80 min-h-screen text-lg text-black flex flex-col gap-4   z-30">
                    <div className="flex w-full justify-center pb-7 ">
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp"
                            alt="logo-qwords"
                        />
                    </div>
                    <div className="dropdown dropdown-right w-full bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between   bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Cloud Hosting
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-right w-full bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between  bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Server
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-right w-full bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between  bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Domain
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-right w-full bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between  bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Email Suite
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-right dropdown-end w-full bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between  bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Service
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-right w-full dropdown-end bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between  bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Internet Access
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-right dropdown-end w-full bg-white">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 w-full justify-between  bg-white hover:bg-[#ff6d0b] text-black text-xl border-none"
                        >
                            Customer Care
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-full text-xl"
                        >
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                            <li>
                                <Link href="/">Cloud Hosting Lite</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.nav>
        // <div></div>
    );
}
