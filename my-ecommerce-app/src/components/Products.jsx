import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section
      id="products"
      className="py-20 bg-[#faf7f3]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#9b6d48] font-medium">
            منتجاتنا
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1c120d] mt-2">
            اختار القهوة المناسبة ليك
          </h2>

          <p className="text-gray-600 mt-3">
            مجموعة من حبوب القهوة بدرجات تحميص مختلفة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;