import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaDeviantart } from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/omargpx"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/omargpax"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/@omargpax"},
    {icon: <FaDeviantart/>, path: "https://www.deviantart.com/omargp12"},
]

const Social = ({containerStyles, iconStyles}) => {
  return ( 
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
}

export default Social