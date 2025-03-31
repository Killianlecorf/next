import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
