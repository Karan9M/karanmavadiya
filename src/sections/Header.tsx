import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavLinks = [
  {
    id:1,
    name:"Home",
    href:'/'
  },
  {
    id:2,
    name:"Projects",
    href:'/'
  },
  {
    id:1,
    name:"About",
    href:'/'
  },
  {
    id:1,
    name:"Contact",
    href:'/'
  },
]

export const Header = () => {
  return <div className="flex justify-center items-center top-3 z-10 sticky">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      {NavLinks.map((nav)=>(
        <Link key={nav.id} href={nav.href} className={twMerge("px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300", nav.name.toLowerCase() === 'contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900':"")}>    
        {nav.name}
        </Link>
      ))}
    </nav>
  </div>;
};
