import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "/public/logo.png"
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

const Header = () =>{
    return (
        <header className="fixed w-full top-0 left-0 py-4 md:py-8 xl:py-10 text-white bg-gray-950 z-50 shadow-sm border-b-2 border-gray-900 px-6 md:px-0">
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">                    
                    <Image src={logo} alt="Logo" width={40} className="-hue-rotate-45 contrast-125 saturate-150"></Image> 
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="mailto:omarguerreropusma@gmail.com">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;