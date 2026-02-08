import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Architect & Builder</h3>
            <p className="text-gray-400">
              Professional architectural design and construction services for your dream spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +1 (234) 567-8900</li>
              <li>Email: info@architectbuilder.com</li>
              <li>123 Architecture Street</li>
              <li>Design City, DC 12345</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-gray-400 hover:text-white transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Architect & Builder Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
