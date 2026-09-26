function Hero() {
  return (
    <section id="home" className="bg-white">
      <div
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center min-h-[620px]"
        dir="rtl"
      >
        <div>
          <p className="text-[#c68d43] font-semibold mb-3">
            أبو رمح للقهوة
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            قهوة بطعم
            <br />
            تعرفه من أول فنجان
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8 max-w-lg">
            مجموعة مختارة من حبوب القهوة بدرجات تحميص مختلفة،
            مناسبة للإسبريسو والقهوة اليومية وكل ذوق له اختياره.
          </p>

          <a
            href="#products"
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-[#c68d43] transition"
          >
            تصفح المنتجات
          </a>
        </div>

        <div className="bg-[#faf7ef] rounded-3xl p-4">
          <img
            src="https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/642268969_122250679874174179_799212338198519172_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s206x206&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=fW1bku9YcZcQ7kNvwG9UYQw&_nc_oc=AdrZFZ7HAlLIS6idFQ4rHL4Nj4OALyTNjiNbNvazh0KYPEHlrYiMm9J3HTpbwoEsSG0&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=pvJr_RrEuMW5QEPYjuM3xg&_nc_ss=732a8&oh=00_AQK_8FPWuzo2-sbghFR2oes2VvFsQoq4wBhoUrtDRlpDzw&oe=6ABDAA07"
            alt="حبوب قهوة أبو رمح"
            className="w-full h-[430px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;