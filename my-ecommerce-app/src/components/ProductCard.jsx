function ProductCard({
  name,
  price,
  category,
  image,
  description,
}) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
      dir="rtl"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-[#c68d43] font-medium">
          {category}
        </p>

        <h3 className="text-xl font-bold text-black mt-2">
          {name}
        </h3>

        <p className="text-gray-600 text-sm leading-7 mt-3">
          {description}
        </p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold">
            {price} جنيه
          </span>

          <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-[#c68d43] transition">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;