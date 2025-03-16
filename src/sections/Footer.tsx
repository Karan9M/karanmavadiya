import Link from "next/link";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    id:1,
    name: 'Github',
    href:'',
  },
  {
    id:2,
    name: 'X-Twitter',
    href:'',
  },
  {
    id:3,
    name: 'Instagram',
    href:'',
  },
  {
    id:4,
    name: 'LinkedIn',
    href:'',
  }
]

export const Footer = () => {

  return (
  <footer className="relative -z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2
    bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
      <div className="text-white/40">&copy; 2025. All right reserved</div>
      <nav className="flex flex-col items-center gap-8 md:flex-row">
        {footerLinks.map((link)=>(
          <Link href={link.href} key={link.id} className="inline-flex items-center gap-1.5">
            <span className="font-semibold">{link.name}</span>
            <ArrowUpRightIcon className="size-4"/>
          </Link>
        ))}
      </nav>
      </div>
    </div>
  </footer>
  );
};
