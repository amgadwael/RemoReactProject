function About() {
  return (
    <section id="about" className="py-24 bg-[#faf7ef]" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1000&q=80"
          alt="قهوة أبو رمح"
          className="w-full h-[420px] object-cover rounded-2xl"
        />

        <div>
          <p className="text-[#c68d43] font-semibold mb-3">
            من نحن
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-black">
            أبو رمح.. القهوة ببساطة
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            نهتم باختيار حبوب القهوة وتقديم درجات تحميص مختلفة
            تناسب طرق التحضير والأذواق المختلفة.
          </p>

          <p className="text-gray-600 leading-8 mt-3">
            هدفنا إنك تلاقي نوع القهوة المناسب ليك بسهولة،
            من غير تفاصيل معقدة أو اختيارات كتير ملهاش لازمة.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;