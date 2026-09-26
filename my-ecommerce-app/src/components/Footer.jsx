function Footer() {
  return (
    <footer className="bg-[#1c120d] text-white pt-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          
          <div>
            <h2 className="text-3xl font-bold">
              TORKY <span className="text-[#c89b6d]">Cafe</span>
            </h2>

            <p className="text-gray-400 leading-7 mt-4 max-w-sm">
              متجر تجريبي لعرض حبوب القهوة ودرجات التحميص المختلفة.
              تم إنشاء المشروع كتطبيق تدريبي باستخدام React و Tailwind CSS.
            </p>

            <div className="mt-6">
              <span className="inline-block bg-[#c89b6d] text-[#1c120d] px-4 py-2 rounded-full text-sm font-semibold">
                مشروع تجريبي
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c89b6d]">
              روابط سريعة
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <a href="#home" className="hover:text-white transition">
                الرئيسية
              </a>

              <a href="#products" className="hover:text-white transition">
                المنتجات
              </a>

              <a href="#about" className="hover:text-white transition">
                من نحن
              </a>

              <a href="#contact" className="hover:text-white transition">
                تواصل معنا
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#c89b6d]">
              تواصل معي
            </h3>

            <p className="text-gray-400 mb-5">
              روابط التواصل والحسابات الشخصية
            </p>

            <div className="flex flex-wrap gap-3">
              
              <a
                href="https://www.linkedin.com/in/amgad-torky-75202005torky"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c89b6d] hover:text-[#1c120d] px-4 py-2 rounded-lg transition"
              >
                LinkedIn
              </a>

              <a
                href="https://wa.me/201050049085"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c89b6d] hover:text-[#1c120d] px-4 py-2 rounded-lg transition"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/amgad.t_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c89b6d] hover:text-[#1c120d] px-4 py-2 rounded-lg transition"
              >
                Instagram
              </a>

              <a
                href="https://mostaql.com/u/Amgad_Torky"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c89b6d] hover:text-[#1c120d] px-4 py-2 rounded-lg transition"
              >
                مستقل
              </a>

                <a
                href="https://github.com/amgadwael"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c89b6d] hover:text-[#1c120d] px-4 py-2 rounded-lg transition"
              >
                GitHub
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#160d09]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-3 text-center">
          
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <span>Powered by</span>

            <a
              href="https://amg8d.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 border-b border-dotted border-purple-500 pb-0.5"
            >
              amgad
            </a>

            <span className="text-xs">{"</>"}</span>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 TORKY Cafe — Demo Project. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;