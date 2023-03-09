import Image from 'next/image';
import Link from 'next/link';
import linkedin from '../public/icons/linkedin.svg';
import twitter from '../public/icons/twitter.svg';
import instagram from '../public/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-secondary px-20 py-10">
      <div className="grid grid-cols-4 text-white border-b border-footerBorder pb-7 gap-40 mb-10">
        <ul>
          <li className="mb-4">
            <Link href="/">Who we are</Link>
          </li>
          <li className="mb-4">
            <Link href="/">What we do</Link>
          </li>
          <li className="mb-4">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <Link href="/">Lorem ipsum</Link>
          </li>
          <li className="mb-4">
            <Link href="/">Lorem ipsum</Link>
          </li>
          <li className="mb-4">
            <Link href="/">Lorem ipsum</Link>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="mb-4">
            <Link href="/">Terms & Conditions</Link>
          </li>
          <li className="mb-4">
            <Link href="/">License</Link>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex gap-2">
              <Image src={linkedin} alt="instagram" />
              <p>LinkedIn</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/" className="flex gap-2">
              <Image src={twitter} alt="twitter" />
              <p>Twitter</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/" className="flex gap-2">
              <Image src={instagram} alt="instagram" />
              <p>Instagram</p>
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-white text-center">
        © Personise 2022. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
