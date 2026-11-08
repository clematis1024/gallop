'use client'

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineBars, AiOutlineClose} from "react-icons/ai"

import LogoLink from "./logo";
import AccountPFP from "./account_pfp";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () =>  {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="mb-16">
        <nav className="fixed w-full h-16 not-dark:shadow-xl bg-cyan-950 flex items-center gap-x-4">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="flex items-center">
                    <LogoLink/>
                    <div className="gap-x-6 pl-10 hidden sm:flex">
                    <Link href={"/runs"} className="cursor-pointer text-lg font-semibold uppercase hover:border-b text-cyan-700">Runs</Link>
                    <Link href={"/info"} className="cursor-pointer text-lg font-semibold uppercase hover:border-b text-cyan-700">Info</Link>
                    </div>
                    <div onClick={handleNav} className="sm:hidden cursor-pointer pl-10">
                    <AiOutlineBars size={25}/>
                    </div>
                </div>
                <AccountPFP/>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-cyan-950 p-10 ease-in duration-500"
                : "fixed -left-full top-0 w-[65%] h-screen bg-cyan-950 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8">
                <LogoLink/>
                <Link onClick={() => setMenuOpen(false)} href={"/runs"} className="cursor-pointer text-lg font-semibold uppercase hover:border-b text-cyan-700">Runs</Link>
                <Link onClick={() => setMenuOpen(false)} href={"/info"} className="cursor-pointer text-lg font-semibold uppercase hover:border-b text-cyan-700">Info</Link>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default NavBar;