import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "/public/logo.png"
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

const Header = () =>{
    return (
        <header className="py-8 xl:py-12 text-white">
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