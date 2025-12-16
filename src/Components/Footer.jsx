import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

       
        <div>
          <h3 className="text-2xl font-extrabold text-white">
            Tech<span className="text-blue-500">Solve</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            We provide complete digital solutions including web development,
            app development & digital marketing for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => scrollToSection("home")} className="hover:text-white">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-white">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("testimonials")} className="hover:text-white">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>

   
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

    
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <span>India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+918989997886</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@brand.com</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-5">
            <a className="hover:text-white" href="#"><Facebook size={18} /></a>
            <a className="hover:text-white" href="#"><Instagram size={18} /></a>
            <a className="hover:text-white" href="#"><Linkedin size={18} /></a>
            <a className="hover:text-white" href="#"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 py-6 text-center text-sm text-gray-400 relative">
        © {new Date().getFullYear()} YourBrand. All rights reserved.


        <button
          onClick={() => scrollToSection("home")}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};
