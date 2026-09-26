function Navbar() {
  return (
    <nav className="bg-[#1c120d] text-white sticky top-0 z-50">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6"
        dir="rtl"
      >
        <a href="#home" className="text-2xl font-bold">
          TORKY <span className="text-[#c89b6d]">Cafe</span>
        </a>

        <div className="hidden md:flex flex-1 max-w-lg">
          <input
            type="text"
            placeholder="ابحث عن نوع القهوة..."
            className="w-full bg-white text-black px-4 py-2 rounded-r-md outline-none"
          />

          <button className="bg-[#c89b6d] px-5 py-2 text-[#1c120d] rounded-l-md">
            بحث
          </button>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a href="#home" className="hover:text-[#c89b6d]">
            الرئيسية
          </a>

          <a href="#products" className="hover:text-[#c89b6d]">
            المنتجات
          </a>

          <a href="#about" className="hidden lg:block hover:text-[#c89b6d]">
            من نحن
          </a>

          <a href="#contact" className="hidden lg:block hover:text-[#c89b6d]">
            تواصل معنا
          </a>

          <button className="bg-[#c89b6d] text-[#1c120d] px-4 py-2 rounded-md">
            السلة (0)
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;