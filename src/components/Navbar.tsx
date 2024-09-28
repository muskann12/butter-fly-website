import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pastelPink to-darkPink text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="font-bold text-2xl">Home</Link>
        </li>
        <li>
          <Link href="/about" className="font-bold text-2xl">About Us</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white font-bold text-2xl">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Image
          src="/images/logo.png" // Adjust path as necessary
          alt="Logo"
          width={50}
          height={50}
          className="ml-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
