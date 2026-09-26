import logo from "../assets/abo-romaa-logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white pt-16" dir="rtl">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-xl p-1">
                <img
                  src={logo}
                  alt="أبو رمح"
                  className="w-20 h-20 object-contain rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  أبو رمح
                </h2>

                <p className="text-xs tracking-[3px] text-gray-400 mt-1">
                  ABO ROMAAH
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7 mt-5 text-sm">
              متجر لعرض أنواع مختلفة من حبوب القهوة
              ودرجات التحميص بطريقة بسيطة وسهلة.
            </p>

            <span className="inline-block mt-5 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs text-gray-300">
              مشروع تدريبي تجريبي
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              روابط سريعة
            </h3>

            <div className="flex flex-col items-start gap-3 text-gray-400 text-sm">
              <a
                href="#home"
                className="hover:text-[#c49358] transition"
              >
                الرئيسية
              </a>

              <a
                href="#products"
                className="hover:text-[#c49358] transition"
              >
                المنتجات
              </a>

              <a
                href="#about"
                className="hover:text-[#c49358] transition"
              >
                من نحن
              </a>

              <a
                href="#contact"
                className="hover:text-[#c49358] transition"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              أبو رمح
            </h3>

            <div className="flex flex-col items-start gap-3 text-gray-400 text-sm">
              <p>حبوب قهوة</p>
              <p>درجات تحميص مختلفة</p>

              <a
                href="https://www.facebook.com/profile.php?id=61555225393821"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-white border border-gray-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                صفحة أبو رمح على Facebook
              </a>
            </div>
          </div>

          {/* Developer */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              مطور المشروع
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              تصميم وتطوير
            </p>

            <h4 className="font-bold text-xl mt-1">
              Amgad Torky
            </h4>

            <div className="flex flex-wrap gap-2 mt-5">

              <a
                href="https://www.linkedin.com/in/amgad-torky-75202005torky"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                LinkedIn
              </a>

              <a
                href="https://wa.me/201050049085"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/amgad.t_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="https://mostaql.com/u/Amgad_Torky"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                مستقل
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col items-center gap-3 text-center">

          <p className="text-gray-500 text-xs max-w-2xl leading-6">
            هذا الموقع مشروع تدريبي تجريبي تم إنشاؤه لأغراض التعلم
            والتطبيق على React و Tailwind CSS، وليس متجرًا إلكترونيًا
            رسميًا للبيع عبر الإنترنت.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Powered by</span>

            <a
              href="https://amg8d.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 border-b border-dotted border-purple-500"
            >
              amgad
            </a>

            <span className="text-xs font-mono">
              {"</>"}
            </span>
          </div>

          <p className="text-gray-600 text-xs">
            © 2026 ABO ROMAAH — Demo Project
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;