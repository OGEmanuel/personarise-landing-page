import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.svg';
import play from '../public/images/play-circle.svg';

const NavBar = () => {
  return (
    <nav className="flex px-20 pt-5 justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image src={logo} alt="logo" />
        <p className="font-bold text-[32px]">Personarise</p>
      </div>
      <ul className="flex gap-10 items-center">
        <li className="text-lg">
          <Link href="/"> Who we are </Link>
        </li>
        <li className="text-lg">
          <Link href="/"> What we do </Link>
        </li>
        <li className="text-lg">
          <Link href="/"> Contact </Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className="flex items-center bg-primary gap-2 py-2 px-4 rounded-[8px]"
        >
          <Image src={play} alt="play" />
          <p className="text-lg text-secondary">Watch a demo</p>
        </Link>
        <Link
          href="/"
          className="text-lg text-white py-2 px-4 rounded-[8px] bg-secondary"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
