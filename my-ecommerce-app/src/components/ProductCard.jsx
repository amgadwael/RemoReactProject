function ProductCard({
  name,
  price,
  category,
  image,
  description,
}) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-[#e7ddd3] shadow-sm hover:shadow-md transition"
      dir="rtl"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-[#9b6d48] mb-2">
          {category}
        </p>

        <h3 className="text-xl font-bold text-[#1c120d]">
          {name}
        </h3>

        <p className="text-gray-600 mt-3 leading-7 text-sm">
          {description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-xl font-bold text-[#1c120d]">
            {price} جنيه
          </span>

          <button className="bg-[#1c120d] text-white px-4 py-2 rounded-lg hover:bg-[#3a281f] transition">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;