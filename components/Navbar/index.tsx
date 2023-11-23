import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <header className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <AiFillBug />
      </Link>
      <nav>
        <ul className='flex space-x-6'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className='text-zinc-500 hover:text-zinc-800 transition-colors'
                href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
