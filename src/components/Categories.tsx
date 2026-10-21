const categories = [
  {
    name: "Tortas",
    emoji: "🎂",
  },
  {
    name: "Cupcakes",
    emoji: "🧁",
  },
  {
    name: "Cookies",
    emoji: "🍪",
  },
  {
    name: "Postres",
    emoji: "🍰",
  },
];

export default function Categories() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-bold">
          ¿Qué estás buscando?
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="cursor-pointer rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">
                {category.emoji}
              </div>

              <h3 className="text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}