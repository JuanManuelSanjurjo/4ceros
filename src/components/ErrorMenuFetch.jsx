export default function ErrorMenuFetch() {
  return (
    <div className="mt-12 text-center py-12">
      <h2 className="text-2xl font-bold text-red-600">
        No se pudo cargar el menú
      </h2>
      <p className="mt-4 text-gray-600">
        Por favor, inténtelo de nuevo más tarde o póngase en contacto con el
        restaurante directamente.
      </p>
    </div>
  );
}
