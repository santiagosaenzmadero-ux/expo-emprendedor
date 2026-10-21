export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-orange-700">
            Dulce Tentación
          </h1>
        </div>

        <div className="hidden gap-8 md:flex">
          <a href="#inicio" className="hover:text-orange-600">
            Inicio
          </a>

          <a href="#productos" className="hover:text-orange-600">
            Productos
          </a>

          <a href="#nosotros" className="hover:text-orange-600">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-orange-600">
            Contacto
          </a>
        </div>

        <button className="rounded-full bg-orange-600 px-5 py-2 text-white hover:bg-orange-700">
          🛒 Carrito
        </button>
      </nav>
    </header>
  );
}