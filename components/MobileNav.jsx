"use client";

import {Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci'
import Image from "next/image";
import logo from "/public/logo.png"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "gallery",
        path: "/gallery",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "posts",
        path: "/posts",
    }
]


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-blue-500"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">                    
                    <h1 className="text-4xl font-semibold">
                        dev
                        <span className="text-cyan-500">.</span> 
                    </h1>
                </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link,index)=>{
                        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-cyan-500 border-b-2 border-cyan-500"} capitalize font-medium hover:text-cyan-400 transition-all`}>
                        {link.name}
                    </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav