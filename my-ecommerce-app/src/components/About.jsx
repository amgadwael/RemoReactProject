function About() {
  return (
    <section id="about" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1000&q=80"
            alt="تحضير القهوة"
            className="w-full h-[380px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <p className="text-[#9b6d48] font-medium mb-2">
            عن TORKY Cafe
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1c120d]">
            بنهتم بالقهوة من أول الحبة
          </h2>

          <p className="text-gray-600 leading-8 mt-5">
            بنختار أنواع مختلفة من حبوب القهوة ونقدمها بدرجات تحميص متنوعة،
            عشان كل شخص يقدر يلاقي الطعم المناسب ليه.
          </p>

          <p className="text-gray-600 leading-8 mt-3">
            هدفنا إن القهوة تكون بسيطة، طازجة، وطعمها واضح من غير تعقيد.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;