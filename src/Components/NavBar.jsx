import { navLinks } from "../assets/Data/Navlinks";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full shadow-md">
      <ul className="flex justify-center space-x-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-blue-400">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
