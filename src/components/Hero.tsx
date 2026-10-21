export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-orange-100 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 text-lg font-medium text-orange-700">
          Repostería artesanal
        </p>

        <h2 className="text-5xl font-bold text-orange-950 md:text-6xl">
          Endulzá tus momentos
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-black-700">
          Tortas, cupcakes, cookies y postres preparados
          artesanalmente para hacer tus momentos aún más especiales.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#productos"
            className="rounded-full bg-orange-600 px-7 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Ver productos
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-orange-600 px-7 py-3 font-semibold text-orange-700 hover:bg-orange-200"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}