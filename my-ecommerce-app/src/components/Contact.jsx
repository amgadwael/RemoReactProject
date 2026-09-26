function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#faf7f3]" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <p className="text-[#9b6d48] font-medium">
            تواصل معنا
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1c120d] mt-2">
            عندك سؤال عن القهوة؟
          </h2>

          <p className="text-gray-600 leading-7 mt-4">
            ابعت لنا رسالتك ولو محتاج مساعدة في اختيار نوع القهوة المناسب ليك
            هنساعدك.
          </p>

          <div className="mt-7 space-y-2 text-gray-700">
            <p>البريد: hello@torkycafe.com</p>
            <p>الهاتف: 0100 000 0000</p>
          </div>
        </div>

        <form className="bg-white p-7 rounded-2xl border border-[#e7ddd3]">
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              الاسم
            </label>

            <input
              type="text"
              placeholder="اكتب اسمك"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#9b6d48]"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#9b6d48]"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              الرسالة
            </label>

            <textarea
              rows="5"
              placeholder="اكتب رسالتك هنا..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-[#9b6d48]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1c120d] text-white py-3 rounded-lg hover:bg-[#3a281f] transition"
          >
            إرسال
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;