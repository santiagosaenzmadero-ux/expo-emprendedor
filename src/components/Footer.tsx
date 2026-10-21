export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-orange-950 px-6 py-12 text-white"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold">
          Dulce Tentación
        </h2>

        <p className="mt-3 text-orange-200">
          Repostería artesanal hecha con amor.
        </p>

        <div className="mt-6">
          <p>📍 La Plata, Buenos Aires</p>
          <p className="mt-2">📱 WhatsApp: 11 1234-5678</p>
          <p className="mt-2">📧 contacto@dulcetentacion.com</p>
        </div>

        <p className="mt-8 border-t border-orange-800 pt-6 text-sm text-orange-300">
          © 2026 Dulce Tentación. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}