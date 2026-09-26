import logo from "../assets/abo-romaa-logo.png";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div
        className="max-w-7xl mx-auto px-5 md:px-6 py-3 flex items-center justify-between gap-6"
        dir="rtl"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            className="w-16 h-16 object-contain"
          />

          <div className="hidden sm:block">
           

           
          </div>
        </a>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <input
            type="text"
            placeholder="ابحث عن القهوة..."
            className="w-full border border-gray-300 px-4 py-2 rounded-r-lg outline-none focus:border-black"
          />

          <button className="bg-black text-white px-5 rounded-l-lg hover:bg-[#b98445] transition">
            بحث
          </button>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 lg:gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-[#b98445] transition">
            الرئيسية
          </a>

          <a href="#products" className="hover:text-[#b98445] transition">
            المنتجات
          </a>

          <a
            href="#about"
            className="hidden lg:block hover:text-[#b98445] transition"
          >
            من نحن
          </a>

          <a
            href="#contact"
            className="hidden lg:block hover:text-[#b98445] transition"
          >
            تواصل معنا
          </a>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#b98445] transition">
            السلة
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;