"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link,index)=>{
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-cyan-500 border-b-3 border-cyan-500"} capitalize font-medium hover:text-cyan-400 transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};


export default Nav