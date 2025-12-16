import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
    
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
       
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-extrabold cursor-pointer select-none"
          >
            <span className="text-gray-900">Tech</span>
            <span className="text-blue-600">Solve</span>
          </div>

       
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 font-medium group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

      
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Quote
            </button>
          </div>

        
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-800"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

     
      <div
        className={`fixed inset-0 z-50 ${
          open ? "visible" : "invisible"
        } transition`}
      >
   
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

     
        <aside
          className={`absolute top-0 left-0 h-full w-[260px] bg-white shadow-xl p-6
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        >
     
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-700"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>

         
          <nav className="mt-14 flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition text-left"
              >
                {item.name}
              </button>
            ))}

        
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </button>
          </nav>
        </aside>
      </div>

      
      <div className="h-[80px]" />
    </>
  );
};
