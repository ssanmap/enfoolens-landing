export const ProductGrid = ({ products }) => {
    return (
      <section id="mas-vendidos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">LOS MÁS VENDIDOS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-enfoolens-primary font-bold mt-2">${product.price.toLocaleString('es-CL')}</p>
                  <button className="mt-3 w-full bg-enfoolens-dark text-white py-2 rounded-md text-sm">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };