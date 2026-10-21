import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-56 items-center justify-center bg-orange-100 text-6xl">
        🍰
      </div>

      <div className="p-6">
        <span className="text-sm font-medium text-orange-600">
          {product.category}
        </span>

        <h3 className="mt-2 text-xl font-bold">
          {product.name}
        </h3>

        <p className="mt-2 text-black-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-orange-700">
            ${product.price.toLocaleString("es-AR")}
          </span>

          <button className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700">
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}