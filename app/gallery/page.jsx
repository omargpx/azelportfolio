"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
    {
        img: "/assets/gallery/ui/ui-portfolio.png",
        category: "ui/ux",
    },
    {
        img: "/assets/gallery/banners/kundu-course.png",
        category: "banner",
    },
    {
        img: "/assets/gallery/ui/gk-view.png",
        category: "os",
    },
    {
        img: "/assets/gallery/banners/kundu-banner.png",
        category: "banner",
    },
    {
        img: "/assets/gallery/ui/kundu.jpg",
        category: "banner",
    },
    {
        img: "/assets/gallery/banners/hp-banner.jpg",
        category: "banner",
    },
    {
        img: "/assets/gallery/banners/gmr-ing.jpg",
        category: "banner",
    },
    {
        img: "/assets/gallery/image.jpg",
        category: "background",
    },
    {
        img: "/assets/gallery/esfera.png",
        category: "background",
    },
    {
        img: "/assets/gallery/kunduroom.jpg",
        category: "blender",
    },
    {
        img: "/assets/gallery/ui/helix.jpeg",
        category: "software",
    },
    {
        img: "/assets/gallery/ui/hypr-vim.png",
        category: "os",
    },
];

function Gallery() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.5, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex py-12 xl:py-0 font-jetbrains"
        >
            <div className="container mx-auto w-full h-full pb-12">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
                    {gallery.map((item, index) => {
                        return (
                            <li key={index} className="w-[100%] h-[250px] rounded-xl overflow-hidden relative">
                                <Image src={item.img} fill className="object-cover" alt="" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </motion.div>
    );
}

export default Gallery;
