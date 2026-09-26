function Hero() {
  return (
    <section id="home" className="bg-[#f5eee6]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
        
        <div className="text-right" dir="rtl">
          <p className="text-[#a46f42] font-medium mb-3">
            حبوب قهوة مختارة بعناية
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#1c120d] leading-tight">
            قهوتك تبدأ
            <br />
            من حبة كويسة
          </h1>

          <p className="text-[#66554b] mt-6 text-lg max-w-lg leading-8 mr-0 ml-auto">
            في TORKY Cafe بنختار حبوب القهوة من مصادر مختلفة،
            ونقدم لك درجات تحميص تناسب ذوقك وطريقة تحضيرك.
          </p>

          <a
            href="#products"
            className="inline-block mt-8 bg-[#1c120d] text-white px-7 py-3 rounded-md hover:bg-[#3a281f] transition"
          >
            شوف المنتجات
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80"
            alt="حبوب قهوة"
            className="w-full h-[430px] object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;