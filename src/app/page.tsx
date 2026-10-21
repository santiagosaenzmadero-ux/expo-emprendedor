import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Categories />

        <section
          id="productos"
          className="bg-gray-50 px-6 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="font-medium text-pink-600">
                Nuestros productos
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                Productos destacados
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Elegí entre nuestras especialidades de
                repostería artesanal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="nosotros"
          className="px-6 py-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-medium text-pink-600">
              Sobre nosotros
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Hecho de manera artesanal
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              En Dulce Tentación nos apasiona crear productos
              de repostería utilizando ingredientes de calidad
              y mucho amor. Nuestro objetivo es que cada
              producto convierta cualquier momento en algo
              especial.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}